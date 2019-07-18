import React,{Component,Fragment} from "react";
import  './../style.css';
import AddNewItem from "./AddNewItem"
import ItemList from "./ItemList"

export default class App extends Component {
  render() {
    return (
      <Fragment>
      <h1>Repo</h1>
      <AddNewItem/>
      </Fragment>
    );
  }
}