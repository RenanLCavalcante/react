import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Localizar from './components/Localizar';
import './index.css';
import { Router,	Route, IndexRoute, browserHistory } from 'react-router';
import TodoGrid from './components/TodoGrid';

ReactDOM.render(
  <Router history={browserHistory} >
	<Route path="/" component={App}>
		<IndexRoute component={TodoGrid}/>
		<Route path="localizar" component={Localizar}/>
	</Route>
  </Router>,
  document.getElementById('root')
);
