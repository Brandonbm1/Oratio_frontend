import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import PageRoutes from "./routes/PageRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PageRoutes />
      <Footer />
    </div>
  );
}

export default App;
