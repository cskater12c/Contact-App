import React, { Component } from "react";

export class EditContact extends Component {
  render() {
    return (
      <div>
        <h1>Edit User</h1>
        <button>List Of Users</button>
        <br />
        <br />
        Name <br />
        <input type="text" name="Name" value="John" />
        <br />
        Phone <br />
        <input type="text" name="Phone" value="508-123-4567" />
        <br />
        Email <br />
        <input type="text" name="Email" value="testemail@example.com" />
        <br />
        Address <br />
        <input type="text" name="Address" value="123 Acorn St" />
        <br />
        <br />
        <button className="btn btn-primary">Update</button>
        <button className="btn btn-primary">Cancel</button>
      </div>
    );
  }
}

export default EditContact;
