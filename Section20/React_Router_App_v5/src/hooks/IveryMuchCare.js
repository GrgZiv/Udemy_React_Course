import { useCallback, useReducer } from "react";

const reducerFunction = (state, action) => {
  if (action.type === "success") {
    return {
      status: "completed",
      data: action.data,
      error: null,
    };
  }
  return state;
};
function useHttp(requestFunction, startWithPending = false) {
  const [httpState, dispatch] = useReducer(reducerFunction, {
    status: startWithPending ? true : false,
    error: null,
    data: null,
  });

  const sendRequest = useCallback(async function (requestData) {
    dispatch({ type: "SEND" });
    try {
      const response = await requestFunction(requestData);
      dispatch({ type: "SUCCESS", response });
    } catch (error) {
      dispatch({
        type: "error",
        errorMessage: error.message || "there has been an error",
      });
    }
  }, [requestFunction]);

  return {
    ...httpState,
    sendRequest,
  }
}
