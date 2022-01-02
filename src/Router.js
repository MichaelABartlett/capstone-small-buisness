import React from 'react'
import { Switch, Route } from 'react-router'
import Listing from './containers/Listing'
import SignIn from './components/Sign-In'
import AddNewListing from './components/AddNewListing'
import AdminView from './containers/AdminView'
import BizDetails from './containers/BizDetails'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listing} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/add-new-listing" component={AddNewListing} />
            <Route path="/admin-view" component={AdminView} />
            <Route path="/singleListing/:id" component={BizDetails} />
        </Switch>
    );
};

export default Router;