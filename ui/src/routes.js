import React from 'react';
import Layout from './components/Layout';
import NewsArticlePage from './components/NewsArticlePage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export default (
    < BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/latest" component={NewsArticlePage} />
                <Route path="/popular" component={NewsArticlePage} />
                <Redirect from="*" to="/latest" />
            </Switch>
        </Layout>
    </BrowserRouter>

)
