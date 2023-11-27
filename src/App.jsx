import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MainBox from "./MainBox/MainBox";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#ffffff] to-[#81dff7] h-screen w-screen">
        <Header />
        <MainBox />
        <Footer />
      </div>
    </>
  );
}

export default App;
