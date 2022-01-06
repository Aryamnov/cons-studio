import * as React from 'react';

export interface IInfoProps {
}

export function Info (props: IInfoProps) {
  return (
    <section className="info">
      <ul className="info__list">
          <li className="info__element">
              <p className="info__title">50</p>
              <span className="info__subtitle">магазинов</span>
          </li>
          <li className="info__element">
              <p className="info__title">100+</p>
              <span className="info__subtitle">брендов</span>
          </li>
          <li className="info__element">
              <p className="info__title">1000+</p>
              <span className="info__subtitle">Сотрудников</span>
          </li>
          <li className="info__element">
              <p className="info__title">10000+</p>
              <span className="info__subtitle">Заказов в сутки</span>
          </li>
          <li className="info__element">
              <p className="info__title">1млн+</p>
              <span className="info__subtitle">Положительных отзывов</span>
          </li>
      </ul>
    </section>
  );
}
