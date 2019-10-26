import React, { Component } from "react";

export class AddContact extends Component {
  render() {
    return (
      <div>
        <h1>Add User</h1>
        <button className="btn btn-danger">List Of Users</button>
        <br />
        <br />
        First Name <br />
        <input type="text" name="firstname" placeholder="John" />
        <br />
        Last Name <br />
        <input type="text" name="lastname" placeholder="Smith" />
        <br />
        Phone <br />
        <input type="text" name="Phone" placeholder="508-123-4567" />
        <br />
        Email <br />
        <input type="text" name="Email" placeholder="testemail@example.com" />
        <br />
        Address <br />
        <input type="text" name="Address" placeholder="123 Acorn St" />
        <br />
        <br />
        <button className="btn btn-primary">Submit</button>
        <button className="btn btn-primary">Cancel</button>
      </div>
    );
  }
}

export default AddContact;
