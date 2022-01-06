import * as React from 'react';
import basket from '../images/basket.svg';

export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {
  return (
    <header className='header' id="header">
      <h1 className="header__title">LookBook</h1>
      <nav className="header__navbar">
        <ul className="header__list">
          <li className="header__element"><a href="#" className="header__link header__link_active">Главная</a></li>
          <li className="header__element"><a href="#" className="header__link">Акции</a></li>
          <li className="header__element"><a href="#" className="header__link">О нас</a></li>
          <li className="header__element"><a href="#" className="header__link">Контакты</a></li>
          <li className="header__element"><a href="#" className="header__link">Каталог</a></li>
          <li className="header__element"><a href="#" className="header__link"><img src={basket} alt="shop basket." /></a></li>
        </ul>
      </nav>
    </header>
  );
}

