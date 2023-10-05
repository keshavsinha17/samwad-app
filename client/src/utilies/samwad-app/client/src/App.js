import "./App.css";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Login } from "./components/Login";
import { Navbar2 } from "./components/Navbar2";
import { ForgetPass } from "./components/ForgetPass";
import { Loader } from "./components/Loader";
import { AvatarPicker } from "./components/AvatarPicker";
// import { Chat } from "./components/chat";
import { Chat1 } from "./components/Chat1";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Result } from "./components/Result";
// import { UserCard } from "./components/UserCard";
import { Contact } from "./components/Contact";
import { Contacts } from "./components/Contacts";
import { Team } from "./components/Team";
import { Particle } from "./components/Particle";

function App() {
  return (
    <>
      <Router>
        <Navbar2 />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Hero />
                <Particle />
                <Team />
                <Contact/>
              </>
            }
          ></Route>
          <Route
            exact
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          ></Route>
          {/* <Route
            exact
            path="/nearbyuser"
            element={
              <>
                <UserCard />
              </>
            }
          ></Route> */}
          <Route
            exact
            path="/forgetpassword"
            element={
              <>
                <ForgetPass />
              </>
            }
          ></Route>
          <Route
            exact
            path="/search"
            element={
              <>
                <Loader />
              </>
            }
          ></Route>
          <Route
            exact
            path="/contact"
            element={
              <>
                <Contacts/>
              </>
            }
          ></Route>
          <Route
            exact
            path="/avatar"
            element={
              <>
                <AvatarPicker />
              </>
            }
          ></Route>
          <Route
            exact
            path="/chat"
            element={
              <>
                <Chat1 />
              </>
            }
          ></Route>
          <Route
            exact
            path="/result"
            element={
              <>
                <Result />
              </>
            }
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
