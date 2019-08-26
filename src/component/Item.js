import React from "react";

const Item = ({ i, item, handleEdit, removeItem }) => {
  return (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>{item}</td>
      <td>
        <button onClick={() => handleEdit(item, i)}>
          <i className="fas fa-edit" />
        </button>
      </td>
      <td>
        <button className="btn btn-sm btn-danger" onClick={() => removeItem(i)}>
          <i className="fas fa-trash-alt" />
        </button>
      </td>
    </tr>
  );
};

export default Item;
