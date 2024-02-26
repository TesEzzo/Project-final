import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import WhoAreWe from "./pages/WhoAreWe";
import ClubLayout from "./layout/ClubLayout";
import HomeClub from "./pages/home/HomeClub";

const ProtectedRoute = ({ children, identity }) => {
  const auth = useSelector((state) => state.auth);

  if (auth.token === null || auth.identity !== identity) {
    return <Navigate to="/login" />;
  }

  return children;
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClubLayout />}>
          <Route path="" element={<HomeClub />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/whoAreWe" element={<WhoAreWe />} />
        </Route>
        <Route
          path="/services"
          element={
            <ProtectedRoute identity="user">
              {/* <DefaultLayout /> */}
            </ProtectedRoute>
          }
        >
          <Route path="" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          {/* <Route path="/whoAreWe" element={<WhoAreWe />} /> */}
        </Route>
        <Route
          path="/club"
          element={
            <ProtectedRoute identity="club">
              <ClubLayout />
            </ProtectedRoute>
          }
        >
          <Route path="" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          {/* <Route path="/whoAreWe" element={<WhoAreWe />} /> */}
          {/* <Route path="/subCheckoutSilver" element={<SubCheckoutSilver />} />
          <Route path="/subCheckoutGold" element={<SubCheckoutGold />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
