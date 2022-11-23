import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import PageRoutes from "./routes/PageRoutes";
import { UserContextProvider } from "./context/userContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Navbar />
        <PageRoutes />
        <Footer />
      </UserContextProvider>
    </div>
  );
}

export default App;
