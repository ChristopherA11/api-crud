import { ADD_MOBILE_SUCCESS, DELETE_MOBILE_SUCCESS, FETCH_MOBILE_SUCCESS, UPDATE_MOBILE_SUCCESS } from "../mobiles/mobileActionTypes";

  
  const initialState = {
    mobiles: [],
  };
  
  const mobilesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MOBILE_SUCCESS:
        return {
          mobiles: action.payload,
        };
      case DELETE_MOBILE_SUCCESS:
        return {
          mobiles: state.mobiles.filter((mobile) => mobile.id !== action.payload),
        };
      case ADD_MOBILE_SUCCESS:
        return {
          mobiles: [...state.mobiles, action.payload],
        };
      case UPDATE_MOBILE_SUCCESS:
        return {
          mobiles: state.mobiles.map((mobile) =>
            mobile.id === action.payload.id ? action.payload : mobile)
        };
      default:
        return state;
    }
  };
  
  export default mobilesReducer;
  