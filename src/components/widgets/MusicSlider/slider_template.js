import React from 'react';
import Slick from 'react-slick';

import styles from './slider.css';

const SliderTemplate = (props) => {
    let template = null;

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    template = props.musicData.map((item,i) => {
        return (
            <div key={i}>
                <div className={styles.featured_item}>
                    <div className={styles.featured_image}
                        style={{
                            background: `url(${item.artworkUrl100})`,
                        }}>
                        
                    </div>
                    <div className={styles.featured_caption}>
                            {item.artistName}<br/>
                            "{item.trackName}" 
                        </div>
                </div>
            </div>
        );
    })

    return (
        <Slick {...settings}>
            {template}
        </Slick>
    );
}

export default SliderTemplate;