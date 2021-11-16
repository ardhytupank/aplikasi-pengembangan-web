import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './App.css';
import logo from './logo.svg';
import Home from './views/Home/Home';
import About from './views/About/About';
import Help from './views/Help/Help';
import Card from './components/Card/Card';
import Input from './components/Input/Input';

export default class App extends Component {

  render() {
    return (

      <Card.Container>
        <Card.Header>My Card</Card.Header>
        <Card.Body>
          <p>Build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
        </Card.Body>
      </Card.Container>
    );
  }
}


//Props
// function Message(props) {
//   return <p>Hello {props.name},</p>;
// }

//Latihan 4.6
// class App extends Component {

//   render() {
//     return (
//       <Input>
//         Percobaan
//         {/* <--- Children dari component Card */}
//       </Input>
//     )
//   }
// }

// constructor() {
//   super();
//   //Inisial state view
//   this.state = {
//     view: 'home'
//   }
// }

// render() {
//   //Functional component view untuk mengatur component yang tampil
//   const View = () => {
//     if (this.state.view == 'home')
//       return <Home name="Eden Hazard" />
//     else if (this.state.view == 'about')
//       return <About />
//     else if (this.state.view == 'help')
//       return <Help />
//   }

//   return (
//     <div>
//       <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <a onClick={() => this.setState({ view: 'home' })} className="nav-link" href="#">Home</a>
//           </li>
//           <li className="nav-item">
//             <a onClick={() => this.setState({ view: 'about' })} className="nav-link" href="#">About</a>
//           </li>
//           <li className="nav-item">
//             <a onClick={() => this.setState({ view: 'help' })} className="nav-link" href="#">Help</a>
//           </li>
//         </ul>
//       </nav>

//       <View />
//     </div>
//   )

// }

// render() {
//   return (
//     <div>
//       <Message name="Ulrich" />
//       <Home name="Muhammad Salah" />
//     </div>
//   )
// }

// }


//Class Component
// function Message() {
//   return "Pesan didalam Component";
// }

// class App extends Component {

//   render() {
//     return (
//       <div>
//         <Message />
//         <Home />
//       </div>
//     );
//   }
// }

//FUNCTIONAL COMPONENTS
// function Message() {
//   return <p>Hello from message component</p>
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Message />
//       </div>
//     )
//   }
// }

//FUNCTION
// function sayHello() {
//   return "Hello World";
// }

// class App extends Component {
//   bilangHalo() {
//     return "Halo Dunia";
//   }

//   render() {
//     return (
//       <>
//         <p>sayHello : <b>{sayHello()}</b></p>
//         <p>bilangHalo : <b>{this.bilangHalo()}</b></p>
//       </>
//     )
//   }
// }

export default App
