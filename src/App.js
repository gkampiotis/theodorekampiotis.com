import "nes.css/css/nes.min.css";
import './App.css';
//
import Intro from './components/Intro'
import Nav from "./components/Nav";
import WSPGallery from './components/WSPGallery';
// 
import { useEffect, useState } from "react";
import { projectStorage, projectFirestore } from './firebase/firebase';
import { ref, listAll, getDownloadURL } from "firebase/storage";
//

function App() {
  const [filesList, setFilesList] = useState([]);

  // Talking to Firestore Storage
  const listRef = ref(projectStorage, 'images/');
  const listAllFiles = () => {
    listAll(listRef)
      .then(response => {
        response.items.forEach(item => getDownloadURL(item)
          .then(url => setFilesList(prev => [...prev, {'img': url }])))
      }).then(console.log(filesList))
  };


  useEffect(() => {
    listAllFiles();
  }, []);

  return (
    <div className='theodorePortfolio'>
      <Nav />
      <Intro />
          {/* {filesList.map(url => {
            return (
                <img src={url} />
            )
          })} */}
          <WSPGallery galleryImages={filesList} />
    </div>
  );
}

export default App;
