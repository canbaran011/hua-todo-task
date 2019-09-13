import React , { Component } from 'react';
import './App.css';
import './bootstrap.css';
import HuaTodoApp from './components/huatodo/HuaTodoApp'

//import { runInThisContext } from 'vm';

//import First  from './components/learningExamples/FirstComponent';
//import Second from './components/learningExamples/SecondComponent';
//import Third from './components/learningExamples/ThirdComponent';

//import Counter from './components/counter/Counter';


// import logo from './logo.svg';


// function App() {
//   return (
//     <div className="App">
//       Can Baran GÜNDÜZ
//       <div className="first"></div>
//     </div>
  
//   );
// }

class App extends Component{
  render(){
    return(
      <div className="App">
       <HuaTodoApp/>


{/* <Counter by={1} />
        <Counter by={5}/>
        <Counter by={10}/> */}
        {/* <LearningComponents></LearningComponents> */}
        {/* <First></First>
        <Second></Second>
        <Third></Third> */}
 {/* Hello Brothers */}

      </div>
    )
  }
}


// class LearningComponents extends Component{
//   render(){
//     return(
//       <div className="learningCOmponents">
//         Hello LEARNERS.
//         <First></First>
//         <Second></Second>
//         <Third></Third> 
//       </div>
//     )
//   }
// }


export default App;
