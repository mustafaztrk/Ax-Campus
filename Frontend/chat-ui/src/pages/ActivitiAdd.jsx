import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Headline from "./../layouts/Headline";
import { useHistory } from "react-router";
import MessageModal from "./../layouts/MessageModal";
import loginImg from "../images/loginImg.jpg";
import dashbordImg from "../images/bestDashbord.png";

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
import ActivityService from "../services/activitiService";

export default function ActivitiAdd() {
  const [open, setOpen] = useState(false);

  let authService = new ActivityService();

  const initialValues = {
    activityType: "",
    creativeId: 0,
    endDate: "",
    id: "",
    name: "",
    quota: 0,
    strDate: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required Field"),
    description: Yup.string().required("Required Field"),
  });
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const history = useHistory();

  const onSubmit = (values, { resetForm }) => {
    console.log(new Date().toLocaleDateString('tr-TR'));
    console.log(values);
    if ( values.name) {
      values.creativeId = localStorage.getItem("userInfo");
      console.log(values);
      authService.addActivities(values);
      history.push("/");
      window.location.reload();
    } else {
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

  const options = [
    { key: "5", text: "Other", value: "-1" },
    { key: "1", text: "Camp", value: "1" },
    { key: "2", text: "Tourist & Historical", value: "2" },
    { key: "3", text: "sport", value: "3" },
    { key: "4", text: "Table Games", value: "4" },
    { key: "5", text: "Academic", value: "5" },
  ];

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);


  return (
    <Container className="content" style={{marginTop:"100px"}}>
      <Grid>
        <Grid.Row>
          <Grid.Column width="8">
            <img
              src={dashbordImg}
              style={{
                objectFit: "cover",
                objectPosition: "center",
                height: "800px",
              }}
            />
          </Grid.Column>
          <Grid.Column width="8">
            <img src={loginImg} alt="Login" />
            <Formik>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Select
                  name="activityType"
                  label="Choose an activity type"
                  options={options}
                  onChange={(event, data) =>
                    handleChange("activityType", data.value)
                  }
                  value={formik.values.activityType}
                />
                <Form.Input
                  name="strDate"
                  label="Starting Date "
                  onChange={(event, data) =>
                    handleChange("strDate", data.value)
                  }
                  value={formik.values.strDate || new Date().toLocaleDateString('tr-TR')}
                />
                <Form.Input
                  name="endDate"
                  label="End Date "
                  onChange={(event, data) =>
                    handleChange("endDate", data.value)
                  }
                  value={formik.values.endDate || tomorrow.toLocaleDateString('tr-TR')}
                />

                <Form.Input
                  name="name"
                  label="Activity Name"
                  onChange={(event, data) => handleChange("name", data.value)}
                  value={formik.values.name}
                />
                <Form.Input
                  name="quota"
                  label="Activity Quota"
                  onChange={(event, data) => handleChange("quota", data.value)}
                  value={formik.values.quota}
                />
              
                <Form.Field
                  control={Checkbox}
                  label={{ children: "I agree to the Terms and Conditions" }}
                />

                <Button
                  class="submit"
                  positive
                  animated="vertical"
                  type="submit"
                  onClick={onSubmit}
                  circular
                  fluid
                  onChange={()=> handleChange("creativeId", localStorage.setItem("userInfo"))}
                >
                  <Button.Content visible>Save Activity</Button.Content>
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
