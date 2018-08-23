import React, { Component } from 'react';
import axios from 'axios'

import SliderTemplate from './slider_template';
import { URL, LASTFM_API_KEY, LASTFM_URL } from '../../../config';

class MusicSlider extends Component {
    state = {
        music: []
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
        
            
        console.log(LASTFM_URL);
        console.log(LASTFM_API_KEY);
        axios.get(`${LASTFM_URL}method=track.search&track=Believe&api_key=${LASTFM_API_KEY}&format=json`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return(
            <SliderTemplate musicData={this.state.music}/>
        );
    }
} 

export default MusicSlider;