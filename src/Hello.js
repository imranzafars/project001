import React from 'react';
import './Hello.css';

function Hello ({firstName}) {
  return <p className ="myname">This is my first para in page: {firstName}</p>
}

export default Hello;