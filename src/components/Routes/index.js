import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Home } from "../Home";
import Chats from "../Chats";
import './styles.css';
import { Profile } from "../Profile";
import { News } from "../News";


export const Routes = () => {
  return (
    <BrowserRouter>
      
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/chats/:chatId?" component={Chats}>
        </Route>
        <Route path="/news" component={News}>
        </Route>
        <Route path="/profile" component={Profile}>
        </Route>
        <Route>
          <h4>Error 404! Page not found!</h4>
        </Route>
      </Switch>
      <Link to="/chats">CHATS</Link> <br />
      <Link to="/profile">Profile</Link> <br />
      <Link to="/">Home</Link> <br />
      <Link to="/news">News</Link>
    </BrowserRouter>
  );
};
