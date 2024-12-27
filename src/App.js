import UserProfile from "./component/userProfile";


import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container parentBox">
        <div className="row">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}

export default App;
