import * as React from "react";
import isEmail from "validator/lib/isEmail";
import { subscribe } from "../utils/api";

export interface ISubscriptionProps {}

export function Subscription(props: ISubscriptionProps) {
  const [value, setValue] = React.useState("");
  const [isValidEmail, setIsValidEmail] = React.useState(false);
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [isSuccesSubmit, setIsSuccesSubmit] = React.useState(true);

  const handleChangeEmail = (e: any) => {
    setValue(e.target.value);
    const inputValue = e.target.value;
    if (isEmail(inputValue)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isValidEmail) {
      console.log("Submit!");
      subscribe(value)
      .then((res) => {
        setIsSuccesSubmit(true);
      })
      .catch((err) => {
        console.log(err);
        setIsSuccesSubmit(false);
      })
      .finally(() => setIsSubmit(true));
    } else {
      return;
    }
  };

  return (
    <section className="subscription">
      <div className="subscription__container">
        <div className="subscription__info">
          <h2 className="subscription__title">Актуальные новости</h2>
          <h3 className="subscription__subtitle">Подпишитесь на рассылку</h3>
          {!isSubmit ? (
            <form
              className="subscription__form"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <p className="subscription__value">E-mail:</p>
              <input
                className={
                  "subscription__input " +
                  (value !== ""
                    ? isValidEmail
                      ? "subscription__input_valid"
                      : "subscription__input_not-valid"
                    : "")
                }
                type="email"
                name="email"
                placeholder="Введите ваш E-mail"
                value={value}
                onChange={(e) => handleChangeEmail(e)}
              ></input>
            </form>
          ) : (<>{isSuccesSubmit ? (<p className="subscription__submit">Письмо отправлено!</p>) : (
          <div className="subscription__bad-request">
          <p className="subscription__submit">Произошла ошибка, попробуйте позже</p>
          <button className="subscription__restart" onClick={() => setIsSubmit(false)}></button>
          </div>)}</>)}
          <span className="subscription__signature">
            Ещё больше предложений в нашем Instagram
          </span>
          <a className="subscription__link" href="#">
            Перейти к акаунту
          </a>
        </div>
        <div className="subscription__photo" />
      </div>
    </section>
  );
}
