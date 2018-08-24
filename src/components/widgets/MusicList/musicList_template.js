import React from 'react';

import styles from './musicList.css';

const MusicListTemplate = (props) => {
    return props.data.map((item, i) => (
        <div className={styles.musicListItem_wrapper} key={i}>
            <div className={styles.left}
                style={{
                    background: `url(${item.image[3]['#text']})`
                }}>
                <div></div>
            </div>
            <div className={styles.right}>
                {item.artist.name}<br/>
                "{item.name}"

            </div>
        </div>
    ));
}

export default MusicListTemplate;