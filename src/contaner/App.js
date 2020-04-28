import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../component/Persons/Persons';
import withClass from '../component/hoc/withClass';

class App extends Component {
  state  = { 
    showPersonDetails : true ,
    persons : [
      {name : "Eric",age:"79"} ,
      {name : "Krist",age:"89"} ,
    ]
  }
  
  // Life cycle method 1
  constructor() {
    super();
    console.log("I am from constructor") ;
  }

  static getDerivedStateFromProps() {
    console.log("I am from getDerivedStateFromProps") ;
    return {};
  }
  
  render() {
    console.log("I am from React render method ");
    let personList ;
    return(<div>
      <h1 className={classes.heading}>This is the App for react project .....</h1>
      <Persons showPersonDetails ={this.state.showPersonDetails} 
        persons = {this.state.persons}></Persons>
    </div>) ;
  }


componentDidMount() {
  console.log("I am from component Did mount") ;
}
}
export default withClass(App,classes.App);
