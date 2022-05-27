import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes";

const initialState: any = {
    ledger: { income: 0, expense: 0 },
    ledgerEntry: [],
    transactions: [],
};
const reducer = (state = initialState, action) => {

    console.log(action);
    switch (action.type) {
        case actionTypes.ADD_INCOME:
            state.ledger.income += action.ledgerEntry.amount
            return {
                ...state,
                ledgerEntry: [...state.ledgerEntry, action.ledgerEntry]
            };
        case actionTypes.ADD_EXPENSE:
            state.ledger.expense += action.ledgerEntry.amount
            return {
                ...state,
                ledgerEntry: [...state.ledgerEntry, action.ledgerEntry]
            };
        default: return state
        // case actionTypes.UPDATE_TRANSACTION:
        //     state.ledger.filter((action) => action.ledgerEntry.id['id'] !== state.ledger.id);
        //     return state
    }
    return state;
};

export default reducer;
// state.ledger.filter((action) => action.ledgerEntry.id['id'] !== state.ledger.id);