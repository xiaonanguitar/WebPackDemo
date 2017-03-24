import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Frame from '../layouts/Frame';
import Home from '../views/Home';
import Detail from '../views/Detail';

const Routes = (
    <HashRouter>
        <div>
            <Route exact path='/'  component={Frame}>
                <Route path='/' component={Home}/>
                <Route path='/detail/:id'  component={Detail}/>
            </Route>
            >
        </div>
    </HashRouter>
)

export default Routes


