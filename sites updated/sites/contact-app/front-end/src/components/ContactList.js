import React, { Component } from "react";
import ContactItem from "./ContactItem";
import PropTypes from "prop-types";

export class ContactList extends Component {
  editContact = () => {
    console.log("Edit Hello");
  };
  deleteContact = () => {
    console.log("Delete Hello");
  };
  viewContact = () => {
    console.log("View Hello");
  };

  render() {
    return this.props.contact.map(contact => (
      <ContactItem
        key={contact.id}
        contact={contact}
        editContact={this.editContact}
        deleteContact={this.deleteContact}
        viewContact={this.viewContact}
      />
    ));
  }
}

//PropTypes
ContactList.propTypes = {
  contact: PropTypes.array.isRequired
};

export default ContactList;
/*<h1>Contact List</h1>
        <button>Add User </button>
        <br />
        <br />
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td>Jim</td>
              <td>777-777-7777</td>
              <td>testemail@yahoo.com</td>
              <td>123 acorn st</td>
              <td>
                <button className="btn btn-success">Edit</button>
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
              <td>
                <button className="btn btn-info">View</button>
              </td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>123-456-7890</td>
              <td>testemail@yahoo.com</td>
              <td>123 acorn st</td>
              <td>
                <button className="btn btn-success">Edit</button>
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
              <td>
                <button className="btn btn-info">View</button>
              </td>
            </tr>
            <tr>
              <td>John</td>
              <td>123-456-7890</td>
              <td>testemail@yahoo.com</td>
              <td>123 acorn st</td>
              <td>
                <button className="btn btn-success">Edit</button>
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
              <td>
                <button className="btn btn-info">View</button>
              </td>
            </tr>
          </tbody>
        </table>
*/
