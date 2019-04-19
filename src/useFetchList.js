import { useCallback, useReducer } from "react";

const actionTypes = {
  REQUEST: "REQUEST",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE"
};

const initialState = {
  data: [],
  error: null,
  hasNextPage: false,
  inFlight: false,
  isComplete: false
};

const listReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.REQUEST:
      return {
        ...state,
        error: null,
        inFlight: true,
        isComplete: false
      };
    case actionTypes.SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.data],
        hasNextPage: action.hasNextPage,
        inFlight: false,
        isComplete: true
      };
    case actionTypes.FAILURE:
      return {
        ...state,
        error: action.error,
        inFlight: false,
        isComplete: true
      };
    default:
      return {};
  }
};

const useFetchList = callback => {
  const [state, dispatch] = useReducer(listReducer, initialState);

  const fetchList = useCallback(
    async params => {
      try {
        dispatch({ type: actionTypes.REQUEST });
        const data = await callback(params);
        dispatch({
          data: data,
          hasNextPage: data.length !== 0,
          type: actionTypes.SUCCESS
        });
      } catch (error) {
        dispatch({ type: actionTypes.FAILURE, error });
      }
    },
    [callback]
  );

  return [state, fetchList];
};

export default useFetchList;
