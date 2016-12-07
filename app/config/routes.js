const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = ReactRouter.hashHistory;
const ObjectSorter = require('../components/ObjectSorter');

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={ObjectSorter} />
  </Router>
);

module.exports = routes;
