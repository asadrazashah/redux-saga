import React from "react";
import { connect } from "react-redux";
import { getTodos } from "../actions/index";

class Main extends React.Component {
  componentDidMount() {
    this.props.getTodos();
  }
  render() {
    console.log(this.props.todos);
    return (
      <div>
        <h3>I am Main</h3>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { todos: state.todos };
};

const Todos = connect(
  mapStateToProps,
  { getTodos }
)(Main);
export default Todos;
