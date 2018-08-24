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
    template = props.topTracksData.map((item, i) => {
        return (
            <div key={i}>
                <div className={styles.featured_item}>
                    <div className={styles.featured_image}
                        style={{
                            background: `url(${item.image[3]['#text']})`,
                        }}>
                    </div>
                    <div className={styles.featured_caption}>
                        {item.artist.name}<br/>
                        "{item.name}"
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div>
        <div className={styles.todayhits}>Today's Top Hits</div>
        <Slick {...settings}>
            
            {template}
        </Slick>
        </div>
    );
}

export default SliderTemplate;