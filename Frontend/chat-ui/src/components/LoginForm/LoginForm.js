import React, { useState } from "react";

import loginImg from "../../images/loginImg.jpg";
import dashbordImg from '../../images/groupChat.jpg';
import { Link } from 'semantic-ui-react';

import {
  Container,
  Grid,
  Label,
  Button,
  Checkbox,
  Form,
  Icon,
} from "semantic-ui-react";
import Headline from "../../layouts/Headline";
import { Formik, useFormik } from "formik";

const LoginForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  let handleUserNameChange = (event) => setUsername(event.target.value);

  let handleSubmit = () => {
    onSubmit(username);
  };

  return (
    <div>
      <Container className="content">
        <Headline content="Netaş Chat Login" />

        <Grid>
          <Grid.Row>
          <Grid.Column width="8"  >
          <img src={dashbordImg} style={{      objectFit: 'cover',
          objectPosition: 'center',height: '800px' }}/>
          </Grid.Column>
            <Grid.Column width="8" className="middle aligned">
              <img src={loginImg} alt="Login" />
              <Formik>
                <Form>
                  <Form.Input
                    label="Nick Name"
                    placeholder="Nick Name"
                    onChange={handleUserNameChange}
                    margin="normal"
                    onKeyPress={(event) => {
                      if (event.key === "Enter") {
                        handleSubmit();
                      }
                    }}
                  />

                  <Button
                    class="submit"
                    color="silver"
                    positive
                    animated="vertical"
                    type="submit"
                    onClick={handleSubmit}
                    circular
                    fluid
                  >
                    <Button.Content visible>Login</Button.Content>
                    <Button.Content hidden>
                      <Icon name="arrow right" />
                    </Button.Content>
                  </Button>
                  <p>I accept the group chat rules</p> 
                </Form>
              </Formik>
            </Grid.Column>
            <Grid.Column width="3" />
          </Grid.Row>

          


        </Grid>
      </Container>
    </div>
  );
};

export default LoginForm;
