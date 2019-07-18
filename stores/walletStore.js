import {EventEmitter} from "events";
import Dispatcher from "../dispatcher";
const walletState=[];

class WalletStore extends EventEmitter{
  constructor(){
    super();
    Dispatcher.register(this.registerActions.bind(this));
  }

  registerActions(action){
    switch(action.type){
      case "addItem":this.addItem(action.payload)
                      break;
    }
  }
  addItem(item){
    walletState.push(item)
    this.emit("change")
  }
  getAllItems(){
    return _walletState;
  }
  addEventListener(callback){
    this.on("change",callback)
  }
  removeEventListener(callback){
    this.removeEventListener("change",callback)
  }

}