import * as React from "react";
import image1 from "../images/light-hall.jpg";
import image2 from "../images/new-collection.jpeg";
import image3 from "../images/Spring Summer 2022.jpg";
import image4 from "../images/new-items.jpg";
import image5 from "../images/new-hall.jpg";
import { Spring, Transition, animated } from "react-spring";

export interface IAdvertProps {}

export function Advert(props: IAdvertProps) {
  const [counter, setCounter] = React.useState(3);
  const [title, setTitle] = React.useState("");
  const [image, setImage] = React.useState(image3);

  React.useEffect(() => {
    let timer = setInterval(() => {
      setCounter((counter) => {
        const updatedCounter = counter + 1;
        if (updatedCounter === 6) {
          return 1;
        }
        return updatedCounter;
      });
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  function handleChangeAdvert() {
    if (counter === 1) {
      setTitle("Коллекция Весна-лето 2020");
      setImage(image1);
    } else if (counter === 2) {
      setTitle("Коллекция Осень 2020");
      setImage(image2);
    } else if (counter === 3) {
      setTitle("Коллекция Весна-лето 2022");
      setImage(image3);
    } else if (counter === 4) {
      setTitle("Коллекция Осень 2022");
      setImage(image4);
    } else {
      setTitle("Коллекция Весна-лето 2023");
      setImage(image5);
    }
  }

  React.useEffect(() => {
    handleChangeAdvert();
  }, [counter]);

  return (
    <section className="advert">
      <div className="advert__content">
        <div className="advert__info">
          <Transition
            items={title}
            from={{ opacity: 0 }}
            leave={{ opacity: 0, position: "absolute" }}
            enter={{ opacity: 1 }}
            config={{ duration: 1000 }}
          >
            {(styles, item) => (
              <animated.div style={styles} className="advert__title">
                {item}
              </animated.div>
            )}
          </Transition>
          {/*<h2 className="advert__title">{title}</h2>*/}
          <p className="advert__subtitle">Ваш стиль - наша забота.</p>
          <button className="advert__button">Смотреть коллекцию</button>
        </div>
        <div className="advert__image-container">
          <Transition
            items={image}
            from={{ opacity: 0, position: "absolute" }}
            leave={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            config={{ duration: 1000 }}
          >
            {(styles, item) => (
              <animated.img
                style={styles}
                src={item}
                alt="Advert image."
                className="advert__image"
              />
            )}
          </Transition>
        </div>
        {/*<img src={image} alt="Advert image." className="advert__image" />*/}
      </div>
      <div className="advert__list">
        <ul className="advert__lang">
          <li className="advert__element">
            <button className="advert__lang-link advert__lang-link_active">
              RU
            </button>
          </li>
          <li className="advert__element">
            <button className="advert__lang-link">EN</button>
          </li>
        </ul>
        <ul className="advert__number-list">
          <li className="advert__number">
            <button
              className={
                "advert__link " + (counter === 1 ? "advert__link_active" : "")
              }
              onClick={() => setCounter(1)}
            />
          </li>
          <li className="advert__number">
            <button
              className={
                "advert__link " + (counter === 2 ? "advert__link_active" : "")
              }
              onClick={() => setCounter(2)}
            />
          </li>
          <li className="advert__number">
            <button
              className={
                "advert__link " + (counter === 3 ? "advert__link_active" : "")
              }
              onClick={() => setCounter(3)}
            />
          </li>
          <li className="advert__number">
            <button
              className={
                "advert__link " + (counter === 4 ? "advert__link_active" : "")
              }
              onClick={() => setCounter(4)}
            />
          </li>
          <li className="advert__number">
            <button
              className={
                "advert__link " + (counter === 5 ? "advert__link_active" : "")
              }
              onClick={() => setCounter(5)}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
