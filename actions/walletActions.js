import Dispatcher from "../dispatcher";
class WalletAction{
  addItem(item){
    Dispatcher.dispatch({
      actionType:"addItem",
      payload:item
    })
  }
}
