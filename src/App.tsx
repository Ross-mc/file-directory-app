import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainContainer from './components/UI/Layout/MainContainer';
import files from './data/files';
import Documents from './pages/Documents';
import Home from './pages/Home';
import Search from './pages/Search';
import fileContext from './store/fileContext';
import createFlatArray from './utils/createFlatArray';

const App: React.FC = () => {
  return (
    <fileContext.Provider
      value={{
        fileData: files,
        flattenedFileData: createFlatArray(files)
      }}
    >
      <Router>
        <MainContainer>
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
          <Switch>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
        </MainContainer>
      </Router>
    </fileContext.Provider>
  );
};

export default App;
