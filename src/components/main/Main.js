import React, { Component } from "react";
import "../../index.css";
import Contacts from "../contacts/Contacts";
import Form from "../form/Form";
import Section from "../section/Section";
// import { v4 as uuidv4 } from "uuid";

// const { v4: uuidv4 } = require("uuid");
// uuidv4();

class Main extends Component {
  state = {
    contacts: [],
    name: "",
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Contacts />
        </Section>
      </>
    );
  }
}

export default Main;
