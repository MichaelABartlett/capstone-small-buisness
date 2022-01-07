import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Listing from './containers/Listing'
import SignIn from './containers/SignIn'
import AddNewListing from './containers/AddNewListing'
import AdminView from './containers/AdminView'
import BizDetails from './containers/BizDetails'
import cookie from 'cookie'
import LoggedUser from './containers/LoggedUser'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
      return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
      <Route
      {...rest}
      render={(props) => checkAuth()
          ? <Component {...props} />
          : <Redirect to="/sign-in" />}
      />
    )
  }


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listing} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/add-new-listing" component={AddNewListing} />
            <ProtectedRoute path="/admin-view" component={AdminView} />
            <Route path="/singleListing/:id" component={BizDetails} />
            <Route path="/LoggedUser" component={LoggedUser} />
        </Switch>
    );
};

export default Router;