import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/products" component={ProductList} exact />
            </Switch>
        </Router>
    );
}

export default App;
