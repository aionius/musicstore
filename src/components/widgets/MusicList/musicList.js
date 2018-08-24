import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';

import {  LASTFM_URL, LASTFM_API_KEY } from '../../../config';
import styles from './musicList.css';
import Button from '../Buttons/buttons';

class MusicList extends Component {

    state = {
        items: [],
        musicItems: [],
        page: 1
    }

    componentDidMount() {
        this.request();
    }

    request = () => {
        console.log(this.state.page);
        axios.get(`${LASTFM_URL}method=track.search&track=Believe&limit=5&page=${this.state.page}&api_key=${LASTFM_API_KEY}&format=json`)
            .then(response => {
                this.setState({
                    musicItems: [...response.data.results.trackmatches.track]
                })
            })
            .catch(errors => {

            });
    }

    loadMore = () => {
        this.setState({
            page: this.state.page + 1
        })
        this.request();
    }

    renderMusicList = (type) => {
        let template = null;

        switch(type) {
            case('card'):
                template = this.state.musicItems.map((item, i) => {
                        return (
                            <CSSTransition
                                classNames={{
                                    enter: styles.musicList_wrapper,
                                    enterActive: styles.musicList_wrapper_active
                                }}
                                timeout={500}
                                key={i}>
                                <div>
                                    <div className={styles.musicList_item} >
                                        {/* <Link to={item.trackViewUrl}> */}
                                            <img src={item.image[0]['#text']} alt={item.trackName} />
                                            <span>
                                                Artist: {item.artist}<br/>
                                                Title: {item.name} <FontAwesome name="play-circle"/><br/>
                                            </span>
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </CSSTransition>
                        );
    
                });
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
                <TransitionGroup
                    component="div"
                    className="list">
                    { this.renderMusicList(this.props.type) }
                </TransitionGroup>
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