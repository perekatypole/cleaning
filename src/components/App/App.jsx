import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "../../styles/main.sass";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/main.sass"


const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
export default App;
