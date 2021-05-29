import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import { QueryClient, QueryClientProvider } from 'react-query';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<h2>loading...</h2>}>
            <Layout />
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
};

export default App;
