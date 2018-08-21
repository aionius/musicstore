import React, { Component } from 'react';
import axios from 'axios'

import SliderTemplate from './slider_template';

class MusicSlider extends Component {
    state = {
        music: []
    }

    componentWillMount() {
        axios.get(`https://itunes.apple.com/search?term=goodbye&country=us`)
            .then(response => {
                console.log(response.data.results);
                this.setState({
                    music: response.data.results
                })
            })
            .catch(error => {
                console.log("Error: " + error);
            })
    }

    render() {
        return(
            <SliderTemplate musicData={this.state.music}/>
        );
    }
} 

export default MusicSlider;