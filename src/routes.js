import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/home';
import Artists from './components/Artists/artists';
import Layout from './hoc/Layout/layout';

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/artists" component={Artists}/>
                </Switch>
            </Layout>
        );
    }
}

export default Routes;
