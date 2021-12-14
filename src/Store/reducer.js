
const custData = require("./json.js")
//import { SEND_REQUEST_HISTORY, SAVE_REQUEST, SENT_HISTORY_ACTIVE, DELETE_SAVE_REQEST, DELETE_HISTORY } from "../actions/type"
const initialState = {
    customerData:custData
}
const reducer = (state = initialState, action) => {
    console.log(state)
    const customerData = state.customerData
    return state
}

export default reducer;