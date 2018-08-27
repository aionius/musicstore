import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

import {  LASTFM_URL, LASTFM_API_KEY } from '../../../config';
import Button from '../Buttons/buttons';
import MusicListTemplate from '../MusicList/musicList_template';

class MusicList extends Component {

    state = {
        items: [],
        musicItems: [],
        page: this.props.page
    }

    componentDidMount() {
        this.request();
    }

    request = () => {
        console.log(this.state)
        axios.get(`${LASTFM_URL}method=chart.gettoptracks&limit=${this.props.limit}&page=${this.state.page}&api_key=${LASTFM_API_KEY}&format=json`)
            .then(response => {
                this.setState({
                    musicItems: response.data.tracks.track,
                    page: this.state.page + 1
                })
            })
            .catch(errors => {
                console.log(errors);
            });
    }

    loadMore = () => {
        this.request();
    }

    renderMusicList = (type) => {
        let template = null;
        switch(type) {
            case('card'):
                template = <MusicListTemplate data={this.state.musicItems} />
                break;
            default:
                template = null;
                break;
        }

        return template;
    }

    render() {
        return(
            <div>
                { this.renderMusicList(this.props.type) }
                <Button 
                    type="loadmore"
                    loadMore={() => this.loadMore()}
                    cta="Load More Music"
                />
            </div>
        );

    }
}

export default MusicList;