import "./CSS/index.css";
import MainRoute from "./Route";
import {MainContextProvider} from "./context/context";
function App() {
  return (
    <MainContextProvider>
      <MainRoute />
    </MainContextProvider>
  );
}

export default App;
  