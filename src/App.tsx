import ToDOs from "./component/ToDos";
import NewToDO from "./component/NewToDo";
import TodoContextProvider from "./store/todo-context";

function App() {
  return (
    <TodoContextProvider>
      <NewToDO />
      <ToDOs />
    </TodoContextProvider>
  );
}

export default App;
