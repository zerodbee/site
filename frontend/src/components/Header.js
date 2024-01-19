import React from 'react';
import './Header.css';
import UserBox from './UserBox';

function Header({ setPage, setModalBox, token, setToken }) {
  function BasketLink() {
    if (token !== null) {
      return (
        <>
        
          <li onClick={() => setPage('Basket')}>Корзина</li>
        </>
      )
    }
  }

  return (
    <div className="Header">
      <ul>
        <img height="50px" src="https://irecommend.ru/sites/default/files/product-images/2157451/QAWxBqw8FMO7J8RBvt4EVA.jpg"></img>
        <li onClick={() => setPage('Main')}>Главная</li>
        <BasketLink />
      </ul>
      <UserBox setModalBox={setModalBox} token={token} setToken={setToken} setPage={setPage} />
      
    </div>

  );
}

export default Header;