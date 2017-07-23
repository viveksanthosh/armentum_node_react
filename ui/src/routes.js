import React from 'react';
import Layout from './components/Layout';
import NewsArticlePage from './components/NewsArticlePage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export default (
    < BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/Latest" component={NewsArticlePage} />
                <Route path="/Popular" component={NewsArticlePage} />
                <Redirect from="*" to="/Latest" />
            </Switch>
        </Layout>
    </BrowserRouter>

)
