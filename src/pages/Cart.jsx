import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart__top">
        <h2 className="content__title">
          <svg>
            <path />
          </svg>
          Корзина
        </h2>
        <div className="cart__clear">
          <svg>
            <path />
          </svg>
          <span>Очистить корзину</span>
        </div>
      </div>

      <div className="cart__item">
        <div className="cart__item-img">
          <img src="" alt="Product" />
        </div>
        <div className="cart__item-info">
          <h3>Название пиццы</h3>
          <p>Размер: средний</p>
        </div>
        <div className="cart__item-count">
          <button className="cart__item-count-minus">-</button>
          <b>1</b>
          <button className="cart__item-count-plus">+</button>
        </div>
        <div className="cart__item-price">
          <b>500 ₽</b>
        </div>
        <div className="cart__item-remove">
          <button className="button">Убрать с корзины</button>
        </div>
      </div>

      <div className="cart__bottom">
        <div className="cart__bottom-details">
          <span>
            Всего пицц: <b>3 шт.</b>
          </span>
          <span>
            Сумма заказа: <b>1500 ₽</b>
          </span>
        </div>
        <div className="cart__bottom-buttons">
          <Link to={"/"}>
            <button className="go-back-btn">
              <span>Вернуться назад</span>
            </button>
          </Link>
          <button className="pay-btn">Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
