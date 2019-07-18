import Dispatcher from "../dispatcher";
class WalletActions{
  addItem(item){
    Dispatcher.dispatch({
      actionType:"addItem",
      payload:item
    })
  }
}
export default new WalletActions()