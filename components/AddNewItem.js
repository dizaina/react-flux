import React,{Component} from "react";
import walletActions from "../actions/walletActions"

class AddNewItem extends Component{
constructor(props){
  super(props);
  this.addItem=this.addItem.bind(this);
  this.updateState=this.updateState.bind(this);
  this.state={
    item:this.getFreshItems(),
    itemList:[],
  }
}
getFreshItems(){
  return{
    description:"",
    amount:""
  }
}
addItem(event){
event.preventDefault();
 walletActions.addItem(this.state.item);
}
updateState(event){
  const field=event.target.name;
  const value=event.target.value;
  this.state.item[field]=value;
  this.setState({item:this.state.item});
}
 render (){
   return(<div>
				<h3 className="total-budget"></h3>
				<form className="form-inline add-item">
					<input type="text" className="form-control description" name="description" value={this.state.item.description} 
          onChange={this.updateState} placeholder="Description"  />
					<div className="input-group amount">
						<div className="input-group-addon">$</div>
						<input type="text" className="form-control" name="amount" value={this.state.item.amount} onChange={this.updateState} placeholder="Amount" />
					</div>
				    <button type="submit" className="btn btn-primary add" onClick={this.addItem}>Add</button>
				</form>
			</div>)
 }
}
export default AddNewItem