import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../layouts/Headline";
import { useHistory } from "react-router";
import MessageModal from "./../layouts/MessageModal";
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
  Popup,
} from "semantic-ui-react";
import UserService from "../services/userService";
export default function ProductAdd() {
  const [open, setOpen] = useState(false);

  let authService = new UserService();

  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    id: "",
    password: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required Field"),
    description: Yup.string().required("Required Field"),
  });
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState('');
  const history = useHistory();

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    if ( values.name &&  values.lastName &&   values.email && values.id &&  values.password && values.password2  )
     {
      // Formu gönderme işlemlerini burada gerçekleştir
      if(values.password===values.password2){
        authService.addUser(values);
        handleModal(true);
        setTimeout(() => {
          handleModal(false);
          history.push("/");
          window.location.reload();
          localStorage.setItem("userInfo",values.email);
          localStorage.setItem("userVerified", true);
        }, 9000);
    } else {
      // Eksik alanları kullanıcıya bildir
      setPopupText("Şifreler eşleşmiyor");
      setShowPopup(true);
      
    }
  }
  else {
    setPopupText("Tüm alanları doldurun");
    setShowPopup(true);
  }
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

  return (
    <Container className="content">
      <Headline content="AX Campus  Sign Up" />

      <Grid>
        <Grid.Row>
          <Grid.Column
            width="8"
          ><img src={dashbordImg} style={{      objectFit: 'cover',
          objectPosition: 'center',height: '800px' }}/></Grid.Column>
          <Grid.Column width="8">
          <img src={loginImg} alt="Login" />
            <Formik>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Input
                  name="name"
                  label="Name"
                  onChange={(event, data) => handleChange("name", data.value)}
                  value={formik.values.name}
                />
                <Form.Input
                  name="lastName"
                  label="Last Name"
                  onChange={(event, data) =>
                    handleChange("lastName", data.value)
                  }
                  value={formik.values.lastName}
                />

                <Form.Input
                  name="email"
                  label="Email"
                  onChange={(event, data) => handleChange("email", data.value)}
                  value={formik.values.email}
                />
                <Form.Input
                  name="id"
                  label="TC No"
                  onChange={(event, data) => handleChange("id", data.value)}
                  value={formik.values.id}
                />
                <Form.Input
                  name="password"
                  label="Password"
                  onChange={(event, data) =>
                    handleChange("password", data.value)
                  }
                  value={formik.values.password}
                />
                <Form.Input
                  name="password2"
                  label="Repeat Password"
                  onChange={(event, data) =>
                    handleChange("password2", data.value)
                  }
                  value={formik.values.password2}
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
                  <Button.Content visible>Sign In</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>

                {showPopup && (
                  <Popup
                    content={popupText}
                    open={showPopup}
                    onClose={() => setShowPopup(false)}
                    position="top center"
                    inverted
                  />
                )}
              </Form>
            </Formik>
          </Grid.Column>
          <Grid.Column width="3" />
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
