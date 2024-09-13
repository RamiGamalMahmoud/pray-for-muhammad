import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Prayer(props) {

  const [count, setCount] = useState(parseInt(localStorage.getItem('userCount')) || 0);

  return (
    <div className="input">
      <input type="number" id="number" />
      <button id="btn" onClick={(e) => {
        const inputElement = document.getElementById('number');
        const userInput = parseInt(inputElement.value) || 0;
        let userHistory = parseInt(localStorage.getItem('userCount')) || 0;
        userHistory += parseInt(userInput) || 0;
        console.log(userHistory);

        localStorage.setItem('userCount', userHistory);
        setCount(userHistory);

        props.onClick(userInput);
        inputElement.value = 0;
      }}>
        تسجيل
      </button>
      <span>لقد صليت على النبي</span>
      <span id="user-counter">{count}</span>
      <span>صلاة</span>
      <Link className="link" to="/home">الصفحة الرئيسية</Link>
    </div>
  );
}

