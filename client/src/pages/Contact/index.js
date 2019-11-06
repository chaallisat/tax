import React, { Component } from "react";
import Nav from "../../components/Nav";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./contact.css";

// function App() {
class Contact extends Component {


  render() {
    return (
        <div>
          <Nav />
            <h1>Hello World!</h1>
            <h5>This is the Contact page.</h5>

            <form>
              <Input />
              <TextArea />
              <FormBtn  />
            </form>
        </div>

    );
  }
}

export default Contact;
