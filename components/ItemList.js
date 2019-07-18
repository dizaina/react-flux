import React,{Component} from "react";
import walletStore from "../stores/walletStore"

class ItemList extends Component{
constructor(props){
  super(props)
  this.updateState=this.updateState.bind(this);
  this.state={
    itemsList:walletStore.getAllItems()
  }
}
componentWillMount(){
  walletStore.addEventListener(this.updateState)
}
componentWillUnMount(){
  walletStore.removeEventListener(this.updateState)
}
updateState(){
  this.setState({itemsList:walletStore.getAllItems()});
}
render(){
return (
  <div>
  {this.state.itemsList.map((v)=><h1>{v}</h1>)}
</div>)
}
}
export default ItemList;