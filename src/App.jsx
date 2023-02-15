import React from "react";
import {Home} from "./pages/home";
import {Login} from "./pages/login";
import {Button} from "./ui/button";
import {Text} from "./ui/text";

function reducer(state, action) {
  console.log(action, "<-- action sendo disparada");
  switch (action.type) {
    case "change_current_page":
      return {
        currentPage: action.payload,
      };
  }
}

const initialState = {
  currentPage: "login",
};

function App() {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  const handleNavigate = (page) => {
    dispatch({type: "change_current_page", payload: page});
  };

  return (
    <>
      {globalState.currentPage === "login" && (
        <Login onClickHomeButton={handleNavigate} />
      )}
      {globalState.currentPage === "home" && (
        <Home onClickLoginButton={handleNavigate} />
      )}
    </>
  );
}

export default App;
