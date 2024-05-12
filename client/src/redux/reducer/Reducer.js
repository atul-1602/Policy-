import { LOAD_DATA_SUCCESS } from "../action/Action";
import data from '../../Policies.json';

const initialState = {
  data: data
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
