import {EventEmitter} from "events";
import Dispatcher from "../dispatcher";
const walletState=[];

class WalletStore extends EventEmitter{
  constructor(){
    super();
    this.addItem=this.addItem.bind(this);
    Dispatcher.register(this.registerActions.bind(this));
  }

  registerActions(action){
    switch(action.actionType){
      case "addItem":this.addItem(action.payload)
                      break;
    }
  }
  addItem(item){
    walletState.push(item)
    this.emit("change")
  }
  getAllItems(){
    return walletState;
  }
  addEventListener(callback){
    this.on("change",callback)
  }
  removeEventListener(callback){
    this.removeEventListener("change",callback)
  }

}
export default new WalletStore();