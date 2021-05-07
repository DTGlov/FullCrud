import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import dashboard from './pages/dashboard';

export const CurrentContext = React.createContext();
export const SetContext = React.createContext();

function App() {
  const [currentId,setCurrentId] = useState(null)
  const dispatch = useDispatch();
  useEffect(() => {
dispatch(getPosts())
  }, [currentId,dispatch]);

  return (
    <Router>
      <Switch>
        <CurrentContext.Provider value={currentId}>
          <SetContext.Provider value={setCurrentId}>
            <Route exact path="/" component={dashboard} />
          </SetContext.Provider>
        </CurrentContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
