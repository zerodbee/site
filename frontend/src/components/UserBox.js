import React from 'react';
import './UserBox.css';
import { jwtDecode } from 'jwt-decode';

function UserBox({ setModalBox, token, setToken, setPage }) {

  function logout() {
    setToken(null)
    localStorage.removeItem('token')
    setPage('Main')
  }

  function MultipleBoxes() {
    if (token !== null) {
      const login = jwtDecode(token).login

      // console.debug(login)

      return (
        <div className="UserBox">
          <p class="hello">Привет, {login}!</p>
          <button class="cabinet" onClick={() => setPage('Cabinet')}>Профиль</button>
          <button class="out" onClick={() => logout()}>Выйти</button>
          
        </div>
      )
    }

    return (
      <div className="UserBox">
        <button class="cabinet" onClick={() => setModalBox('Login')}>Вход</button>
        <button class="cabinet" onClick={() => setModalBox('Registration')}>Регистрация</button>
        
      </div>
    )
  }

  return (
    <MultipleBoxes />
  );
}

export default UserBox;