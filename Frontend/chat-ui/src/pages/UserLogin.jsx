import React, { useState, useEffect } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../layouts/Headline";
import { useHistory } from "react-router";
import MessageModal from "./../layouts/MessageModal";
import { useParams } from "react-router";
import loginImg from '../images/loginImg.jpg';
import dashbordImg from '../images/bestDashbord.png';

import {
  Container,
  Grid,
  Label,
  Button,
  Checkbox,
  Form,
  Icon,
  GridColumn,
} from "semantic-ui-react";
import UserService from "../services/userService";

export default function UserLogin() {
  const [open, setOpen] = useState(false);

  let authService = new UserService();

  const initialValues = {
    name: "",
    password: "",
  };

  const history = useHistory();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  var msj = "asd";
  const validationSchema = Yup.object({
    name: Yup.string().required("Required Field"),
    description: Yup.string().required("Required Field"),
  });
  function home() {}
  const onSubmit = async (values, { resetForm }) => {
    try {
      console.log(values);
      var tempUser = "";
      var respone = await authService.getByUserName(values.name);
      tempUser = (await authService.getByUserName(values.name)).data.data;
      console.log(tempUser);
      console.log(values.password);
      if (tempUser.password == values.password) {
        localStorage.setItem("userInfo",tempUser.email);
        localStorage.setItem("userVerified", true);
        handleModal(true);
        setTimeout(() => {
          handleModal(false);
          setIsAuthenticated(false);
          history.push("/");
          window.location.reload();
        
        }, 900);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      resetForm();
    }, 100);
  };

  const formik = useFormik({
    initialValues: initialValues,
    // validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  const handleModal = (value) => {
    setOpen(value);
  };

  const handleChange = (fieldName, value) => {
    formik.setFieldValue(fieldName, value);
  };
  const Test = () => {
    console.log("dhjhjasda");
    history.push("/user/add");
  };

  const [user, setUser] = useState({});
  let { name } = useParams();

  useEffect(() => {
    let userService = new UserService();
    userService.getByUserName(name).then((result) => setUser(result.data));
  }, []);

  return (
    <Container className="content">
      <Headline content="AX Campus Login" />

      <Grid>
        <Grid.Row >
          <Grid.Column width="8"  >
          <img src={dashbordImg} style={{      objectFit: 'cover',
          objectPosition: 'center',height: '800px' }}/>
          </Grid.Column>
          <Grid.Column width="8" className="middle aligned" >
          <img src={loginImg} alt="Login" />
            <Formik >
              <Form onSubmit={formik.handleSubmit}>
                <Form.Input
                  name="name"
                  label="Name"
                  onChange={(event, data) => handleChange("name", data.value)}
                  value={formik.values.name}
                />

                <Form.Input
                  name="password"
                  label="Password"
                  onChange={(event, data) =>
                    handleChange("password", data.value)
                  }
                  value={formik.values.password}
                />

                <Button
                  class="submit"
                  positive
                  animated="vertical"
                  type="submit"
                  onClick={onSubmit}
                  circular
                  fluid
                >
                  <Button.Content visible>Login</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Form>
            </Formik>
            <Button positive animated type="register"  circular
                  fluid onClick={Test} style={{ marginTop: '5px'  }}>
              <Button.Content visible>Sing In</Button.Content>
              <Button.Content hidden>
                <Icon name="address card" />
              </Button.Content>
            </Button>
          </Grid.Column>
 
        </Grid.Row>
      </Grid>

      <MessageModal
        onClose={() => handleModal(false)}
        onOpen={() => handleModal(true)}
        open={open}
        content="Loading..."
      />
    </Container>
  );
}
