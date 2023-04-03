import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ScheduleContainer from './pages/Schedule/ScheduleContainer';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import GroupSelection from './pages/GroupSelection/GroupSelection';

// import Snowflakes from 'magic-snowflakes';
// const snowflakes = new Snowflakes({ color: "#5ECDEF", container: document.querySelector("#snowflakes-container"), count: 25, minOpacity: .1, maxOpacity: .95, minSize: 10, maxSize: 25, rotation: false, speed: 1, wind: false, zIndex: 0 });

// snowflakes.start();

const router = createBrowserRouter([
  {
    path: "/VSUschedule",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/VSUschedule/schedule/:groupId",
        element: <ScheduleContainer />
      },
      {
        path: "/VSUschedule",
        element: <GroupSelection />
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