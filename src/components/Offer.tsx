import * as React from 'react';
import hoodie from '../images/hoodie.jpg';
import tshirt from '../images/t-shirt.jpg';
import printedTshirt from '../images/printed t-shirt.jpg';

export interface IOfferProps {
}

export function Offer (props: IOfferProps) {
  return (
    <section className="offer">
      <h2 className="offer__title">Специальные предложения</h2>
      <ul className="offer__cards">
        <li className="offer__card">
          <img src={hoodie} alt="product." className="offer__image" />
          <div className="offer__card-info">
            <div className="offer__card-buy">
              <span className="offer__price">20$</span>
              <button className="offer__basket"></button>
            </div>
            <span className="offer__product">Худи OneSize</span>
          </div>
        </li>
        <li className="offer__card">
          <img src={tshirt} alt="product." className="offer__image" />
          <div className="offer__card-info">
            <div className="offer__card-buy">
              <span className="offer__price">10$</span>
              <button className="offer__basket"></button>
            </div>
            <span className="offer__product">Майка</span>
          </div>
        </li>
        <li className="offer__card">
          <img src={printedTshirt} alt="product." className="offer__image" />
          <div className="offer__card-info">
            <div className="offer__card-buy">
              <span className="offer__price">35$</span>
              <button className="offer__basket"></button>
            </div>
            <span className="offer__product">Футболка с принтом</span>
          </div>
        </li>
      </ul>
    </section>
  );
}
