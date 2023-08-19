import React from 'react';
import QRCodeGenerator from './QrcodeGenerator';
import './App.css';


function App() {
  return (
    <div className=" p-4 flex width-4 justify-center items-center">
      <div className='p-4 items-center border-2 bg-sky-300 shadow-2xl'>
      QR Code Generator App
      <QRCodeGenerator/>
      </div>
    </div>
  );
}

export default App;