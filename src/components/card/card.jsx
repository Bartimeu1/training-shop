import React from 'react';
import './card.css';
import { Routes, Route, Link } from 'react-router-dom';

import star from '../../images/star.png';
import starHollow from '../../images/starHollow.png';

const Card = (props) => {
  return (
    <a href='#' className="card">
        <img src={props.card.image} alt="" className="card-image" />
        <div className="card__info">
          <h4 className="card-title">{props.card.title}</h4>
          <div className="card__info--bottom">
            <p className="card-price">{props.card.price}</p>
            <div className="card__info__stars">
              <img src={star} alt="" className='card__info-star'/>
              <img src={star} alt="" className='card__info-star'/>
              <img src={star} alt="" className='card__info-star'/>
              <img src={star} alt="" className='card__info-star'/>
              <img src={starHollow} alt="" className='card__info-star' />
            </div>
          </div>
        </div>
    </a>
  );
}

export default Card;