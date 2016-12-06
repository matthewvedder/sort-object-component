const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = ReactRouter.hashHistory;
const Main = require('../components/Main');

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main} />
  </Router>
);

module.exports = routes;
