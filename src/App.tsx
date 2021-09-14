import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import files from './data/files';
import Documents from './pages/Documents';
import Home from './pages/Home';
import fileContext from './store/fileContext';

const App: React.FC = () => {
  return (
    <fileContext.Provider
      value={{
        fileData: files
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/documents">
            <Documents />
          </Route>
        </Switch>
      </Router>
    </fileContext.Provider>
  );
};

export default App;
