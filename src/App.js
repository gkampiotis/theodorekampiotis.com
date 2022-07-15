// photo gallery component - https://www.npmjs.com/package/react-photo-gallery

import "nes.css/css/nes.min.css";
import './App.css';

import { useEffect, useState } from "react";
import Intro from './components/Intro'
import Nav from "./components/Nav";
import { projectStorage, projectFirestore } from './firebase/firebase';
import { ref, listAll, getDownloadURL } from "firebase/storage";

function App() {
  const [filesList, setFilesList] = useState([]);

  // Talking to Firestore Storage
  const listRef = ref(projectStorage, 'dig-painting/');
  const listAllFiles = () => {
    listAll(listRef)
      .then(response => {
        response.items.forEach(item => getDownloadURL(item)
          .then(url => setFilesList(prev => [...prev, url])))
      });
  };


  useEffect(() => {
    listAllFiles();
  }, []);

  return (
    <div className='theodorePortfolio'>
      <Nav />
      <Intro />
      {filesList.map(url => {
        return (
          <div>
           <img src={url}/>
          </div>
        )
      })}
    </div>
  );
}

export default App;
