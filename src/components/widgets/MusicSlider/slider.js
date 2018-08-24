import React, { Component } from 'react';
import axios from 'axios'

import SliderTemplate from './slider_template';
import { LASTFM_API_KEY, LASTFM_URL } from '../../../config';

class MusicSlider extends Component {
    state = {
        topTracks: []
    }

    componentWillMount() {
        axios.get(`${LASTFM_URL}method=chart.gettoptracks&limit=5&api_key=${LASTFM_API_KEY}&format=json`)
            .then(response => {
                this.setState({
                    topTracks: response.data.tracks.track
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return(
            <div>
                <SliderTemplate topTracksData={this.state.topTracks}/>
            </div>
        );
    }
} 

export default MusicSlider;