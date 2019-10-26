import React, { Component } from "react";
import PropTypes from "prop-types";

export class ContactItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.contact.completed ? "line-through" : "none"
    };
  };
  editContact = e => {};
  deleteContact = e => {};
  viewContact = e => {};

  render() {
    return (
      <div style={this.getStyle()}>
        <table>
          <br />
          <br />
          <tbody>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
            <tr>
              <td>{this.props.contact.name}</td>
              <td>{this.props.contact.phone}</td>
              <td>{this.props.contact.email}</td>
              <td>{this.props.contact.address}</td>
              <td>
                <input
                  //was onchange
                  type="button"
                  onClick={this.props.editContact}
                  className="btn btn-success"
                  value="Edit"
                />
              </td>
              <td>
                <input
                  type="button"
                  onClick={this.props.deleteContact}
                  className="btn btn-danger"
                  value="Delete"
                />
              </td>
              <td>
                <input
                  type="button"
                  onClick={this.props.viewContact}
                  className="btn btn-info"
                  value="View"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

//PropTypes
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
