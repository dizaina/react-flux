import React,{Component,Fragment} from "react";
import  './../style.css'
import AddNewItem from "./AddNewItem"

export default class App extends Component {
  render() {
    return (
      <Fragment>
      <h1>Sathya</h1>
      <AddNewItem/>
      </Fragment>
    );
  }
}