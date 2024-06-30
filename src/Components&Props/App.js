import "./App.css";
import Salary from "./Salary";

function App() {
  return (
    <div className="App">
      <Salary salary={90000} position="Senior SDE" company="Amazon" />
      <Salary salary={12000} position="Junior SDE" company="Google" />
      <Salary salary={10000} position="Project Manager" company="Netflix" />
    </div>
  );
}

export default App;