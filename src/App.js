import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul style={{ listStyle: 'none' }}></ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/news'>News</Link></li>
        </div>

        <Switch>
          <Route path='/' exact render={() => <div>Ini halaman Home</div>}></Route>
          <Route path='/news' render={() => <div>Ini halaman News</div>}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
