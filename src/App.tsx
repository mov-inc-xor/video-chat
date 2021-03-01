import React from 'react';
import CreateMeeting from "./pages/CreateMeeting";
import {Switch, Route} from 'react-router-dom';
import DeviceCheck from "./pages/DeviceCheck";

function App() {
  return (
    <Switch>
      <Route exact path={'/'}>
        <CreateMeeting/>
      </Route>

      <Route exact path={`/:room([a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4})`}>
        <DeviceCheck/>
      </Route>
    </Switch>
  );
}

export default App;
