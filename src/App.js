// import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <TodoInput />
          <TodoList />
          <h5 style='color:red;'>Power of continuous deployment</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
