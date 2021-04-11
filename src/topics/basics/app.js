import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';


//Components
import Home from './pages/home';
import NewsList from '../basics/pages/NewsList';
import HeaderNewslist from './pages/header_newslist';

//Routing 
class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>

                    <Link to={{ pathname: '/' }}>Home</Link> <br/>
                    <Link to={{ pathname: '/newslist' }}>News List</Link>

                    <HeaderNewslist/>



                    <Switch>
                        <Route path="/newslist" exact component={NewsList} />
                        <Route path="/" component={Home} />
                    </Switch>


                </div>

            </BrowserRouter>
        );
    }
}

export default App;

