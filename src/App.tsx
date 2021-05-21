import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<h2>loading...</h2>}>
          <Layout />
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
