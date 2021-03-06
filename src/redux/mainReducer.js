import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn274234Reducer from '../features/SignIn274234/redux/reducers'
import SignIn274220Reducer from '../features/SignIn274220/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn274234: SignIn274234Reducer,
SignIn274220: SignIn274220Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});