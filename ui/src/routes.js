import Layout from './components/Layout';
import Layout from './components/NewsArticlePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default (
<Layout>
    <Switch>
            <Route path="/latest" render={NewsArticlePage}/>
            <Redirect from="/invoices" to="/invoices/dashboard"/>
          </Switch>
</Layout>
)
