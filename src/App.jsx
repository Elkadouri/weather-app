import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";

import { createContext, useState } from "react";

export const SearchContext = createContext(); 

function App() {

  const [click, setClick] = useState("");

  return (
    <SearchContext.Provider value={[click , setClick]}>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </SearchContext.Provider>
  );
}

export default App;
