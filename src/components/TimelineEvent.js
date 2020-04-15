import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import { render } from '@testing-library/react';

// //This is a Funtional Component 
// // - simple function
// // - recieving props and returning a declaration
// // - always use Functional Components whenever possible 
// // - absence of "This" keyword 
// // -- forced to think of solution without having to use State
// // - mainly responsible for UI 

const TimelineEvent = (props) => {
  // console.log(props)
  // return <h1>Hello {props.name}</h1>;
  return(
    <div>
      <h1>{props.person}</h1>
      <p><Timestamp time={props.timestamp}/></p>
      <h3>{props.status}</h3>
    </div>
  );


  
}

// // This is a Class Component 
// // - more feature rich 
// // - can maintain their own private data - "State"
// // - can contain complex UI logic 
// // - provide lifecycle hooks 


// Class TimelineEventClass extends Component {
//   render(){
//     return <h1>Class Component Texts</h1>
//   }
// }

export default TimelineEvent;
// export default TimelineEventClass;
// // would also nn to import on APP.js 