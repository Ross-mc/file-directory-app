import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainContainer from './components/UI/Layout/MainContainer';
import files from './data/files';
import Documents from './pages/Documents';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
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
            <Route path="/documents">
              <Documents />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </MainContainer>
      </Router>
    </fileContext.Provider>
  );
};

export default App;
