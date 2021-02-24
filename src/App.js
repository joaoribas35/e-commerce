import "./App.css";
import MenuTopStyled from "./components/MenuTop";
import Routes from "./routes";

function App() {
  return (
    <>
      <MenuTopStyled />
      <div className="App-header">
        <Routes />
      </div>
    </>
  );
}

export default App;
