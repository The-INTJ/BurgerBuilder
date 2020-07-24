import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import BorderBuilder from './containers/BorgerBuilder/BorgerBuilder';

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <BorderBuilder>Borger</BorderBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;
