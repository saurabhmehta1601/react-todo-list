// import uuid from "uuid";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { v4 as uuid } from "uuid";

export default class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up " },
      { id: 2, title: "brush teeth" },
    ],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      title: this.state.item,
    };
    this.setState({
      items: [...this.state.items, newItem],
      item: "",
    });
  };
  handleDelete = (id) => {
    console.log(`handle delete ${id}`);
  };
  handleEdit = (id) => {
    console.log(`handle edit ${id}`);
  };
  clearList = (e) => {
    console.log("clearlist");
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto col-10 mt-5">
              <h3 className="text-capitalize text-center">Todo Input</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
