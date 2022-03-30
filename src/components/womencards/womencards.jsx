import React, { useState } from 'react';
import './womencards.css';
import Card from '../card/card';

import womensCard1 from '../../images/womensCard-1.jpg';
import womensCard2 from '../../images/womensCard-2.jpg';
import womensCard3 from '../../images/womensCard-3.jpg';
import womensCard4 from '../../images/womensCard-4.jpg';
import womensCard5 from '../../images/womensCard-5.jpg';
import womensCard6 from '../../images/womensCard-6.jpg';
import womensCard7 from '../../images/womensCard-7.jpg';
import womensCard8 from '../../images/womensCard-8.jpg';

const Womencards = function () {
    const [cards] = useState([
        {id: 1, image: womensCard1, price: '$ 30.00', title: "Women's tracksuit Q109"},
        {id: 2, image: womensCard2, price: '$ 30.00', title: "Women's tracksuit Q109"},
        {id: 3, image: womensCard3, price: '$ 30.00', title: "Women's tracksuit Q109"},
        {id: 4, image: womensCard4, price: '$ 30.00', title: "Women's tracksuit Q109"},
        {id: 5, image: womensCard5, price: '$ 30.00', title: "Women's tracksuit Q109"},
        {id: 6, image: womensCard6, price: '$ 30.00', title: "Women's tracksuit Q109"},
        {id: 7, image: womensCard7, price: '$ 30.00', title: "Women's tracksuit Q109"},
        {id: 8, image: womensCard8, price: '$ 30.00', title: "Women's tracksuit Q109"},
    ]);

    return (    
        <div className="women__products">
            {cards.map((card) =>
              <Card card={card} key={card.id} />
            )}
        </div>
    );    
}

export default Womencards;