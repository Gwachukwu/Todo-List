import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask, removeTask } from "../Reducers/actions";

class Todo extends Component {
  state = {
    input: "",
    warning: "",
  };
  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };
  handleClick = () => {
    this.state.input === ""
      ? this.setState({ input: "" })
      : this.props.submitTask(this.state.input);
    this.setState({
      input: "",
    });
  };
  handleDelete = (task) => {
    this.props.deleteTask(task);
  };
  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <div className="form">
          <input
            type="text"
            placeholder="New task..."
            onChange={this.handleInput}
            value={this.state.input}
          />
          <p>{this.state.warning}</p>
          <button onClick={this.handleClick}>Add Task</button>
        </div>
        <hr />
        <div>
          <ol className="list">
            {this.props.tasks.map((task, index) => {
              return (
                <div className="todo" key={index}>
                  <li>{task}</li>
                  <span onClick={() => this.handleDelete(task)}>&#10006;</span>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    submitTask: (task) => {
      dispatch(addTask(task));
    },
    deleteTask: (task) => {
      dispatch(removeTask(task));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
