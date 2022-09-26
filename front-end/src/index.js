import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ScheduleContainer from './pages/Schedule/ScheduleContainer';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import GroupSelection from './pages/GroupSelection/GroupSelection';

const router = createBrowserRouter([
  {
  path: "/undefined",
  element: <App/>,
  errorElement: <ErrorPage/>,
  children: [
    {
      path: "/undefined/schedule/:groupId",
      element: <ScheduleContainer/>
    },
    {
      path: "/undefined",
      element: <GroupSelection/>
    },
  ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();