import React, { Component, Fragment } from "react";
import Item from "./Item";

class ListItems extends Component {
  state = {
    items: [],
    message: "",
    displayItem: "",
    edit: false,
    current: null
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.edit) {
      const items = this.state.items.map((item, i) =>
        i === this.state.current ? this.state.displayItem : item
      );
      this.setState({
        items: items,
        current: null,
        edit: false,
        displayItem: ""
      });
    } else {
      const newItem = this.refs.item.value;
      const isThere = this.state.items.includes(newItem);
      if (isThere) {
        this.setState({ message: "Item is in the list" });
      } else {
        this.setState({
          items: [...this.state.items, newItem],
          message: "",
          displayItem: ""
        });
      }
    }
  };

  removeItem = deleteItemIndex => {
    this.setState({
      items: this.state.items.filter((item, i) => i !== deleteItemIndex)
    });
  };

  clearItems = () => {
    this.setState({
      items: [],
      message: "",
      edit: false,
      displayItem: "",
      current: null
    });
  };

  onChange = e => {
    this.setState({ displayItem: this.refs.item.value });
  };

  handleEdit = (item, i) => {
    this.setState({ displayItem: item, edit: true, current: i });
  };

  render() {
    const { items, message, displayItem, edit } = this.state;
    return (
      <div className="container">
        <br />
        <h1 align="center" className="text-primary">
          Shopping List
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="item">Enter the item</label>
            <input
              type="text"
              ref="item"
              name="item"
              value={displayItem}
              onChange={this.onChange}
              required
            />
          </div>
          <input
            type="submit"
            value={edit ? "Update Item" : "Add Item"}
            className="btn btn-primary btn-sm"
          />
        </form>
        <div>
          {items.length > 0 ? (
            <Fragment>
              {message && <p>{message}</p>}
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>edit</th>
                    <th>delete</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, i) => (
                    <Item
                      key={i}
                      item={item}
                      i={i}
                      removeItem={this.removeItem}
                      handleEdit={this.handleEdit}
                    />
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="4">
                      <button
                        className="btn btn-dark btn-block"
                        onClick={this.clearItems}
                      >
                        Clear Items
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </Fragment>
          ) : (
            <Fragment>
              <p>No items in the list!!! Add Some..</p>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default ListItems;
