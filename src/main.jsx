import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/global.scss';

import { RouterProvider } from 'react-router-dom';

import RouterDefault from './routers/app.router';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={RouterDefault} />
	</React.StrictMode>
)
