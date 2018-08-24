import React from 'react';

import style from './sidenav.css';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

const SiteNavItems = () => {

    const items = [
        {
            type: style.option,
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: style.option,
            icon: 'user',
            text: 'Artists',
            link: '/artists'
        }
    ];

    const showItems = () => {
        return items.map((item, i) => {
            return (
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon}/>
                         {item.text}
                    </Link>
                </div>
            );
        });
    }
    return (
        <div>
            {showItems()}      
        </div>
    );
}

export default SiteNavItems;