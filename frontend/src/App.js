import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="contents">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
