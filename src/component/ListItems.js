import React, { Component } from "react";

class ListItems extends Component {
  render() {
    const { items } = this.state;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item}</td>
                <td>
                  <button onClick={() => this.handleEdit(item, i)}>
                    <i className="fas fa-edit" />
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => this.removeItem(i)}
                  >
                    <i className="fas fa-trash-alt" />
                  </button>
                </td>
              </tr>
            ))}
            ;
          </tbody>
        </table>
      </div>
    );
  }
}
export default ListItems;
