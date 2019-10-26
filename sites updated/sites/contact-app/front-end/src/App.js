import React, { Component } from "react";
import "./App.css";
//import AddContact from "./components/AddContact.js";
import ContactList from "./components/ContactList.js";
//import EditContact from "./components/EditContact.js";

class App extends Component {
  state = {
    contact: [
      {
        id: "1",
        name: "Chris Smith",
        phone: "555-555-5555",
        email: "Chris@example.com",
        address: "123 State Rd",
        completed: false
      },
      {
        id: "2",
        name: "Mike Smith",
        phone: "555-555-5555",
        email: "Chris@example.com",
        address: "123 State Rd",
        completed: false
      },
      {
        id: "3",
        name: "Joe Smith",
        phone: "555-555-5555",
        email: "Chris@example.com",
        address: "123 State Rd",
        completed: false
      }
    ]
  };
  render() {
    //console.log(this.state.contact);
    return (
      <div className="App">
        <h1>Contact List</h1>
        <ContactList contact={this.state.contact} />
      </div>
    );
  }
}

export default App;
