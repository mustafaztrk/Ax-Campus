import React from "react";
import { Form, Input, TextArea, Button, Select,Image } from "semantic-ui-react";

const genderOptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const onSubmit = (event) => {
  event.preventDefault(); // Form gönderimini engelle

  const formData = new FormData(event.target);
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const gender = formData.get('gender');

  // Form verileriyle ilgili daha fazla işlem veya API çağrıları yapabilirsiniz
  console.log('First Name:', firstName);
  console.log('Last Name:', lastName);
  console.log('Gender:', gender);
};

export default function Search() {
  return (
    <div style={{marginLeft:"300px",marginRight:"200px"}}>
    <Form onSubmit={onSubmit}>
      <Form.Group widths="equal">
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          name="firstName"
          label="First name"
          placeholder="First name"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          name="lastName"
          label="Last name"
          placeholder="Last name"
        />
        <Form.Field
          control={Select}
          name="gender"
          options={genderOptions}
          label={{
            children: 'Gender',
            htmlFor: 'form-select-control-gender',
          }}
          placeholder="Gender"
          search
          searchInput={{ id: 'form-select-control-gender' }}
        />
      </Form.Group>

      <Form.Field
        id="form-button-control-public"
        control={Button}
        content="Search"
        type="submit"
      />
    </Form>
    </div>
  );
}
