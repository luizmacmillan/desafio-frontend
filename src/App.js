import React, { Route, Switch } from 'react-router-dom';

import MainPage from './Pages/MainPage';
import Login from './Pages/Login';

function App() {
  return (
    <Switch>
      <Route path="/main-page" component={ MainPage } />
      <Route path="/" component={ Login } />
    </Switch>
  );
};

export default App;
