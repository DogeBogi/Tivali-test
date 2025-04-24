import './App.css'
import { Component } from "react";
import CountrySelect from './container/CountrySelect';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';


class App extends Component {


  render() {
    return (
      <ErrorBoundary>
      <div className="App">
        <h1>Countries List</h1>
        <CountrySelect/>
      </div>
      </ErrorBoundary>
    );
  }
}


export default App
