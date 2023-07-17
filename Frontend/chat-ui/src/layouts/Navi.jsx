import React, { useState } from "react";
import CartSummary from "./CartSummary";
import Language from "./Language";

import { Button, Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

import { useHistory } from "react-router";

import { useSelector } from "react-redux";
import DateLabel from "./DateLabel";
import test from "../pages/UserAdd";
export default function Navi({
  UserRegistration,
  signIn,
  home,
  users,
  activiti,
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory();
  const { cartItems } = useSelector((state) => state.cart);

  const customColor = {
    backgroundColor: "#A6ACAF",
    background:"#A6ACAF",
    color: "white",
  };

  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }
  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div style={customColor}>
      <Menu inverted fixed="top" >
        <Container>
          <Menu.Menu position="left">
            <Menu.Item />

            <Menu.Item onClick={home} name="home" />
            <Menu.Item onClick={signIn} name="messages" />
            <Menu.Item onClick={users} name="Users" />
            <Menu.Item onClick={activiti} name="Activities" />
          </Menu.Menu>

          <Menu.Menu position="right">
            <Language></Language>
            {cartItems.length > 0 && <CartSummary />}
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} bisey="1" />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
