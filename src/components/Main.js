import React from "react";
import { connect } from "react-redux";
import { getTodos } from "../actions/index";
import { Container } from "reactstrap";

class Main extends React.Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    console.log(this.props.todos);
    return (
      <Container>
        <div className="text-center">
          <h3>Todo List</h3>
          {this.props.todos &&
            this.props.todos.map(todo => (
              <div key={todo.id}>
                <h5>{todo.title}</h5>
              </div>
            ))}
        </div>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return { todos: state.todos };
};

const mapDispatchToProps = {
  getTodos: getTodos
};

const Todos = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
export default Todos;
