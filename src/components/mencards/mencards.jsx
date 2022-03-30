import React, { useState } from 'react';
import './mencards.css';
import Card from '../card/card';

import mensCard1 from '../../images/mensCard-1.jpg';
import mensCard2 from '../../images/mensCard-2.jpg';
import mensCard3 from '../../images/mensCard-3.jpg';
import mensCard4 from '../../images/mensCard-4.jpg';
import mensCard5 from '../../images/mensCard-5.jpg';
import mensCard6 from '../../images/mensCard-6.jpg';
import mensCard7 from '../../images/mensCard-7.jpg';
import mensCard8 from '../../images/mensCard-8.jpg';

const Mencards = function () {
    const [cards] = useState([
        {id: 1, image: mensCard1, price: '$ 30.00', title: "Women's tracksuit Q109"},
        {id: 2, image: mensCard2, price: '$ 30.00', title: "Women's tracksuit Q109"},
        {id: 3, image: mensCard3, price: '$ 30.00', title: "Women's tracksuit Q109"},
        {id: 4, image: mensCard4, price: '$ 30.00', title: "Women's tracksuit Q109"},
        {id: 5, image: mensCard5, price: '$ 30.00', title: "Women's tracksuit Q109"},
        {id: 6, image: mensCard6, price: '$ 30.00', title: "Women's tracksuit Q109"},
        {id: 7, image: mensCard7, price: '$ 30.00', title: "Women's tracksuit Q109"},
        {id: 8, image: mensCard8, price: '$ 30.00', title: "Women's tracksuit Q109"},
    ]);

    return (    
        <div className="men__products">
            {cards.map((card) =>
              <Card card={card} key={card.id} />
            )}
        </div>
    );    
}

export default Mencards;