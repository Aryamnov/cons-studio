import * as React from "react";

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__label">LookBook</div>
          <ul className="footer__nav">
            <li className="footer__element">
              <a href="#" className="footer__link">
                Каталог
              </a>
            </li>
            <li className="footer__element">
              <a href="#" className="footer__link">
                Для Него
              </a>
            </li>
            <li className="footer__element">
              <a href="#" className="footer__link">
                Для Нее
              </a>
            </li>
            <li className="footer__element">
              <a href="#" className="footer__link">
                Хит продаж
              </a>
            </li>
            <li className="footer__element">
              <a href="#" className="footer__link">
                Осень-Зима 21-22
              </a>
            </li>
            <li className="footer__element">
              <a href="#" className="footer__link">
                О нас
              </a>
            </li>
            <li className="footer__element">
              <a href="#" className="footer__link">
                Магазины
              </a>
            </li>
            <li className="footer__element">
              <a href="#" className="footer__link">
                Доставка
              </a>
            </li>
            <li className="footer__element">
              <a href="#" className="footer__link">
                Размеры
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__everything">
          <a href="#header" className="footer__nav-start" />
          <div className="footer__contacts">
            <button className="footer__phone">Заказать звонок</button>
            <p className="footer__email">hi@LookBook.ru</p>
            <p className="footer__copyright">2021 &copy; Copyright</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
