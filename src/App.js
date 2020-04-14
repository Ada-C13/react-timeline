import React from 'react';
import logo from './logo.svg';
import './App.css';
import timelineData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';


// to test out that we can read from a list within this file:
const timelineEventList = [
  {
    "person": "Adele Goldberg",
    "status": "In Smalltalk, everything happens somewhere else.",
    "timeStamp": "2018-05-18T22:12:03Z"
  },
  {
    "person": "Erica Baker",
    "status": "Every once in a while, life affords you the opportunity to have real, authentic, genuine happiness. It's up to you to see it. Pay attention.",
    "timeStamp": "2018-05-18T22:19:40Z"
  },
  {
    "person": "Aubrey Tang",
    "status": "The art of computer programming is a blend of mathematics and poetry.",
    "timeStamp": "2018-05-18T22:41:19Z"
  },
  {
    "person": "Julia Evans",
    "status": "no seriously what if we replaced tech books with informative concise 30 page zines though",
    "timeStamp": "2018-05-18T23:02:44Z"
  },
  {
    "person": "Stephanie Hurlburt",
    "status": "I don’t think you can do good work if you’re not at least occasionally talking to a person you’re building for.",
    "timeStamp": "2018-05-18T23:09:38Z"
  },
  {
    "person": "Yan Zhu",
    "status": "//for a good time, paste this into twitter page console: c=new AudioContext;n=setInterval(\"for(n+=7,i=k,P='▲.\\\n';i-=1/k;P+=P[i%2?(i%2*j-j+n/k^j)&1:2])j=k/i;doc.innerHTML=P;with(c.createOscillator())frequency.value=200*(j+n/k^j),connect(c.destination),start(),stop(n/k)\",k=64)",
    "timeStamp": "2018-05-18T23:51:01Z"
  }, 
  {
    "person": "Becca Roach",
    "status": "//for a GREAT time, paste this into twitter page console: c=new AudioContext;n=setInterval(\"for(n+=7,i=k,P='▲.\\\n';i-=1/k;P+=P[i%2?(i%2*j-j+n/k^j)&1:2])j=k/i;doc.innerHTML=P;with(c.createOscillator())frequency.value=200*(j+n/k^j),connect(c.destination),start(),stop(n/k)\",k=64)",
    "timeStamp": "2018-05-18T23:51:01Z"
  }, 
];

function App() {
  console.log(timelineData);
  console.log("hello!");
  console.log(timelineData.events);


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{timelineData.person}'s Social Media Feed</h1>
      </header>
      <main className="App-main">
        {/* <Timeline events={timelineData.events}/> */}
        <Timeline events={timelineEventList}/>
      </main>
    </div>
  );
}

export default App;
