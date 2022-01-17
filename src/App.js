//css
import './App.css';
// router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// components
import DetailPhotoPage from './pages/DetailPhotoPage/DetailPhotoPage';
import AddPhotoPage from './pages/AddPhotoPage/AddPhotoPage';
import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage/HomePage';
import EditPhotoPage from './pages/EditPhotoPage/EditPhotoPage';



function App() {
  
  return (
    <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route path="/detail/:photoId" render={() => <DetailPhotoPage/>}/>
            <Route path="/edit/:photoId" render={() => <EditPhotoPage/>}/>
            <Route path="/add" render={() => <AddPhotoPage/>}/>
            <Route path="/" render={() => <HomePage/>}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
