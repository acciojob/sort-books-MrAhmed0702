import React from "react";
import './../styles/App.css';
import BooksList from "./BooksList";
import { Provider } from "react-redux";
import store from "../redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* Do not remove the main div */}
        <BooksList />
      </div>
    </Provider>
  )
}

export default App;
