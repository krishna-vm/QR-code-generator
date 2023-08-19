import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './App.css';

function QrcodeGenerator() {
  const [text, setText] = useState('');

  const onChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className='pt-2 justify-center items-center'>
      <input type="text" value={text} onChange={onChange} className='text-center w-38 rounded' />
      <div className='pt-4 w-38'>
      <QRCode value={text} size={195}/>
      </div>
    </div>
  );
}

export default QrcodeGenerator;
