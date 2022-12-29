import { Routes, Route } from "react-router-dom";
import { DynamicItem, Sidebar, dummyData } from "./components";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Home from "./pages/Home";



function App() {
  return (
    <div id="main">
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home/>} />
          {dummyData &&
            dummyData.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={<DynamicItem name={item.name} inst={item.instruction} input={item.input}/>}
              />
            ))}
        </Routes>
      </Sidebar>
      <Footer/>
    </div>
  
    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
  );
}


export default App;
