import React, { ReactElement } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './InProgress.style.css';
import { AppBar } from '@material-ui/core';
import { useStyles } from './Inprogress.style';
import { QueryClient, useMutation, useQuery } from 'react-query';
import { loansAPI } from 'apis';
import { IAddLoan } from '../../apis/loans/addLoan.api';
import EditIcon from '@material-ui/icons/Delete';
import { TransitionsModal } from './Inprogress.modal';

interface IFilterLoan {
  address: string;
  alternativeMobileNumber: string;
  amount: number;
  createdAt: string;
  creator: string;
  firstName: string;
  lastName: string;
  loanID: string;
  mobileNumber: string;
  notes: string;
  _id: string;
}

const Inprogress = (): ReactElement => {
  const user = JSON.parse(localStorage.getItem('profile')!);
  const classes = useStyles();
  const { data, isLoading, isError } = useQuery('getAllLoans', () => loansAPI.getAllLoans());

  const queryClient = new QueryClient();

  const mutation = useMutation(loansAPI.deleteLoan, {
    onSuccess: () => queryClient.refetchQueries(['getAllLoans']),
  });

  if (isError) return <div>Something went wrong...</div>;
  if (isLoading) return <div>Loading...</div>;
  let filterData;
  if (user?.result?._id) {
    filterData = data?.data?.allLoans?.filter(
      (loan: IAddLoan) => loan.creator === user?.result?._id
    );
  } else {
    filterData = [];
  }

  const deleteLoan = async (id: string) => {
    mutation.mutate(id);
  };

  return (
    <div className={classes.bigContainer}>
      <AppBar className={classes.appbar} elevation={0} position="static" color="inherit">
        <h1 className={classes.heading}>Current Loans</h1>
      </AppBar>
      <Paper className="container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Loan ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Interest</TableCell>
              <TableCell>Pending Amount</TableCell>
              <TableCell>Full Details</TableCell>
              <TableCell>delete</TableCell>
              {/* <TableCell>Customize</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {filterData.map((loan: IFilterLoan, idx: number) => (
              <TableRow key={idx + 1}>
                <TableCell component="th" scope="row">
                  {idx + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {loan.loanID}
                </TableCell>
                <TableCell>{loan.firstName + loan.lastName}</TableCell>
                <TableCell>{loan.createdAt}</TableCell>
                <TableCell>{loan.amount}</TableCell>
                <TableCell>0</TableCell>
                <TableCell>{0}</TableCell>
                <TableCell>
                  <TransitionsModal loanDetails={loan} />
                </TableCell>
                <TableCell onClick={() => deleteLoan(loan._id)}>
                  <EditIcon style={{ cursor: 'pointer' }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Inprogress;
