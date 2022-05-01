import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import Home from './pages/Home/Home';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Home />}></Route>
      </Routes>
      <ToastContainer
        position="bottom-right"
        theme={'dark'}
        transition={Slide}
        autoClose={5000}
        // hideProgressBar={false}
        newestOnTop={false}
        // closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        // pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
