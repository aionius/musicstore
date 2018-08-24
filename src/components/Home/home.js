import React from 'react';

import MusicSlider from '../widgets/MusicSlider/slider';
import MusicList from '../widgets/MusicList/musicList';

const Home = () => {
    return (
        <div>
            <MusicSlider />
            <MusicList 
                type="card"
                loadmore={true}
                limit={5}
                page={1}/>
        </div>
    );
}

export default Home;