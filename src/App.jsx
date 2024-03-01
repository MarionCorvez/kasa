import './styles/main.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { useState } from 'react';

function App() {

  // react Hook For State Handler
  const [data , setData] = useState(null);

  // Fetch Function   
  fetch("./data.json").then(
    function(res){
    return res.json()
  }).then(function(data){
  // store Data in State Data Variable
    setData(data)
  }).catch(
    function(err){
      console.log(err, ' error')
    }
  )

  return (
    <Router>
      <Header />
      <MainContent />
      <div>
        {
          // use data State Variable For Get Data Use JavaScript Map Mathod
        data? data.map(
            function(data) {
              return (<div key={data.id}> 
                <h4>{data.id}</h4>
                <h2>{data.title}</h2>
                <img src={data.cover} alt={data.title} />
                <h3>{data.description}</h3>
              </div>)
            }
          ):""
        }
      </div>
      <Routes>
        <Route exact path="/" element={<div>Page d'accueil</div>} />
        <Route path="/a-propos" element={<div>Page A propos</div>} />
        <Route path="/404" element={<div>Fake 404</div>} />
      </Routes>
    <Footer />
    </Router>
  )
}

export default App;