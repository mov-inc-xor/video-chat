import React from 'react';
import CreateMeeting from "./pages/CreateMeeting";
import {Switch, Route} from 'react-router-dom';
import Meeting from "./pages/Meeting";
import {useVideoChat, VideoChatProvider} from "./contexts/VideoChatContext";

function App() {
  return (
    <Switch>
      <Route exact path={'/'}>
        <CreateMeeting/>
      </Route>

      <Route exact path={`/:room([a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4})`}>
        <VideoChatProvider>
          <Meeting/>
        </VideoChatProvider>
      </Route>
    </Switch>
  );
}

export default App;
