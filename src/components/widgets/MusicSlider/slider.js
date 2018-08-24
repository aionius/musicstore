import React, { Component } from 'react';
import axios from 'axios'

import SliderTemplate from './slider_template';
import { URL, LASTFM_API_KEY, LASTFM_URL } from '../../../config';

class MusicSlider extends Component {
    state = {
        music: [],
        musicList: []
    }

    componentWillMount() {
        axios.get(`${URL}/search?term=goodbye&country=us&limit=5`)
            .then(response => {
                // console.log(response.data.results);
                this.setState({
                    music: response.data.results
                })
            })
            .catch(error => {
                console.log("Error: " + error);
            })
            
        axios.get(`${LASTFM_URL}method=track.search&track=Believe&limit=5&api_key=${LASTFM_API_KEY}&format=json`)
            .then(response => {
                this.setState({
                    musicList: response.data.results.trackmatches.track
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return(
            <div>
                {/* <SliderTemplate musicData={this.state.music}/> */}
                <SliderTemplate musicData={this.state.musicList}/>
            </div>
        );
    }
} 

export default MusicSlider;