import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import { PageSite, PostSite, PostsSite, TopNav } from './components';
import Navbar from './components/Navbar';

function App() {
    return (
        <Router>
            <nav className='navbar fixed-top navbar-dark bg-primary navbar-expand-sm'>
                <div className='container'>
                    <Navbar />

                    <TopNav />
                </div>
            </nav>

            <div className='container body-content'>
                <Switch>
                    <Route path='/' exact>
                        <PostsSite />
                    </Route>
                    <Route path='/blog' exact>
                        <PostsSite />
                    </Route>
                    <Route path='/blog/:id/:slug/'>
                        <PostSite />
                    </Route>
                    <Route path='/pages/:slug/'>
                        <PageSite />
                    </Route>
                    <Route render={_ =>
                        <Redirect to='/blog' />
                    } />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
