import React, {createContext} from "react";
import {Home} from "./pages/home";
import {Login} from "./pages/login";
import {Photo} from "./pages/Photo";
import {Button} from "./ui/button";
import {Text} from "./ui/text";

function reducer(state, action) {
  console.log(action, "<-- action sendo disparada");
  switch (action.type) {
    case "change_current_page":
      return {
        ...state,
        currentPage: action.payload,
      };

    case "add_user":
      return {
        ...state,
        user: {
          ...state.user,
          username: action.payload.username,
        },
      };

    case "add_photos_user":
      return {
        ...state,
        user: {
          ...state.user,
          photos: action.payload,
        },
      };
    case "add_highligh_image":
      const currentImage = state.user.photos.find((img) => {
        return img.id === action.payload;
      });

      return {
        ...state,
        user: {
          ...state.user,
          highlightImage: currentImage,
        },
      };
    default:
      return state;
  }
}

const initialState = {
  currentPage: "login",
  user: {
    username: "@meuuseraquiaubla",
    photos: [],
    highlightImage: null,
  },
};

export const InstaContext = createContext(initialState);

function App() {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);
  console.log(globalState.currentPage);
  return (
    <>
      <InstaContext.Provider
        value={{meuState: globalState, meuDispatch: dispatch}}
      >
        {globalState.currentPage === "login" && <Login />}
        {globalState.currentPage === "home" && <Home />}
        {globalState.currentPage === "fullscreen" && <Photo />}
      </InstaContext.Provider>
    </>
  );
}

export default App;
