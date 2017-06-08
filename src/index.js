import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise';

import reducers from './reducers';
import ExpensesIndex from './components/expenses_index';
import ExpensesNew from './components/expenses_new';
import ExpensesShow from './components/expenses_show';
// import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';
import './style/index.css';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/expenses/new' component={ExpensesNew}/>
                    <Route path='/expenses/:id' component={ExpensesShow}/>
                    <Route path='/' component={ExpensesIndex}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
// registerServiceWorker();
