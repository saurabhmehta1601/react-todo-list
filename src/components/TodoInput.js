import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, editItem, handleChange, handleSubmit } = this.props;
    return (
      <div>
        <div className="card card-body my-3">
          <form action="" onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text bg-primary text-white">
                  <i className="fas fa-book"></i>
                </div>
              </div>
              <input
                type="text"
                placeholder="add todo item"
                className="form-control text-capitalize"
                value={item}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              disabled={item?false:true}
              className={
                editItem
                  ? "btn btn-block btn-success mt-3 text-uppercase"
                  : "btn btn-block btn-primary mt-3 text-uppercase"
              }
            >
              {editItem ? "edit item" : "add item"}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
