/**React Router Code Splitting **/
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';
import ArtistMain from './components/artists/ArtistMain';

//code splitting for react router
const componentRoutes = {
	component: Home,
	path: '/',
	IndexRoute: { component: ArtistMain },
	childRoutes: [
		{
			path: 'artist/new',
			getComponent(location, cb) {
				//async call
				System.import('./components/artists/ArtistCreate').then(module =>
					cb(null, module.default)
				); //err,module.default is what we are concerned with
			}
		},
		{
			path: 'artist/detail',
			getComponent(location, cb) {
				//async call
				System.import('./components/artists/ArtistDetail').then(module =>
					cb(null, module.default)
				); //err,module.default is what we are concerned with
			}
		},
		{
			path: 'artist/:id/edit',
			getComponent(location, cb) {
				//async call
				System.import('./components/artists/ArtistEdit').then(module =>
					cb(null, module.default)
				); //err,module.default is what we are concerned with
			}
		}
	]
};
const Routes = () => {
	return <Router history={hashHistory} routes={componentRoutes} />;
};

export default Routes;
