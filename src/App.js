
import './App.css';

import { useAlbumContext } from './context/albumContext';


function App() {
  const {albums} = useAlbumContext()

  console.log(albums)


  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
