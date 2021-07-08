import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import InfoIcon from '@material-ui/icons/Info';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

interface ILoanDetails {
  loanDetails: {
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
  };
}

export const TransitionsModal = ({ loanDetails }: ILoanDetails) => {
  console.log(loanDetails);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleOpen}>
        <InfoIcon style={{ cursor: 'pointer' }} />
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {/* <p id="transition-modal-description">react-transition-group animates me.</p> */}
            <h2 id="transition-modal-title">address:{loanDetails.address}</h2>
            <h2 id="transition-modal-title">
              alternativeMobileNumber:{loanDetails.alternativeMobileNumber}
            </h2>
            <h2 id="transition-modal-title">amount:{loanDetails.amount}</h2>
            <h2 id="transition-modal-title">createdAt:{loanDetails.createdAt}</h2>
            <h2 id="transition-modal-title">creator:{loanDetails.creator}</h2>
            <h2 id="transition-modal-title">firstName:{loanDetails.firstName}</h2>
            <h2 id="transition-modal-title">lastName:{loanDetails.lastName}</h2>
            <h2 id="transition-modal-title">loanID:{loanDetails.loanID}</h2>
            <h2 id="transition-modal-title">mobileNumber:{loanDetails.mobileNumber}</h2>
            <h2 id="transition-modal-title">notes:{loanDetails.notes}</h2>
            <h2 id="transition-modal-title">_id:{loanDetails._id}</h2>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
