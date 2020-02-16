import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Card from './Components/Card/Card';
import Nav from './Components/Nav/Nav';
import data from './data/data.json';

const particleOptions = {
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 60
      }
    },
    size: {
      value: 8
    }
  }
}

function App() {
  return (
    <div className="App">

        <Nav />

        <Particles params={particleOptions} style={{backgroundColor: "navy", position: "absolute", width: '100%', height: "10px"}}/>

        <div className="Intro">
            <div className="search">
              <input></input>
            </div>
        </div>

        <h1 className="cardsTitle">Browse Offerings</h1>
        <p className="cardsDescription">This is a platform designed to find housing information for students to find apartment housing
          offered by people like students who are leaving for co-op and would have to continue paying while
          not living at their residence. It provides simple way to see options posted on facebook kijiji etc.
          and for people to find the original webpage the information was scraped from.
        </p>
        <div className="Cards">
            {data.kijiji.map(item => {
              return <Card link={item.URL} price={item.price} location={item.Location}/>
            })}
        </div>
        
    </div>
  );
}

export default App;
