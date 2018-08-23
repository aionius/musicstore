import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';

import { URL } from '../../../config';
import styles from './musicList.css';
import Button from '../Buttons/buttons';

class MusicList extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        this.request();
    }

    request = () => {
        axios.get(`${URL}/search?term=goodbye&country=us&limit=5`)
        .then(response => {
            this.setState({
                items: [...this.state.items, ...response.data.results]
            })
        })
        .catch(error => {
            console.log(error);
        });
    }

    loadMore = () => {
        this.request();
    }

    renderMusicList = (type) => {
        let template = null;

        switch(type) {
            case('card'):
                template = this.state.items.map((item, i) => {
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
                                        <img src={item.artworkUrl100} alt={item.trackName} />
                                        <span>
                                            Artist: {item.artistName}<br/>
                                            Song Title: {item.trackName} <FontAwesome name="play-circle"/><br/>
                                            Album: {item.collectionName}
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
        console.log(this.state.items);
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