import React from "react";

import TodoList from "./components/TodoList/TodoList";
import TodoFilter from "./components/TodoFilter/TodoFilter";
import { TodoProvider } from "./context/TodoProvider"; // Correctly import TodoProvider
import TodoForm from "./components/TodoForm/TodoForm";

function App() {
  return (
    <TodoProvider> {/* Use TodoProvider here */}
      <div className="max-w-lg mx-auto mt-8"> {/* Move className to a div inside */}
        <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>
        <TodoForm />
        <TodoFilter />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
