//css
import './App.css';
// context
import { useAlbumContext } from './context/albumContext';
// router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import DetailPhotoPage from './pages/DetailPhotoPage/DetailPhotoPage';
import AddPhotoPage from './pages/AddPhotoPage/AddPhotoPage';
import Nav from './components/Nav/Nav';

function App() {
  const {albums} = useAlbumContext()
  console.log(albums)


  return (
    <Router className="App">
    <Nav />
      <Switch>
        <Route path="/detail/:photoId" render={() => <DetailPhotoPage/>}/>
        <Route path="/add" render={() => <AddPhotoPage/>}/>
        <Route path="/" render={() => <HomePage/>}/>
      </Switch>
    </Router>
  );
}

export default App;
