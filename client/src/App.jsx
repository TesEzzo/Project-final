import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import WhoAreWe from "./pages/WhoAreWe";
import DefaultLayout from "./layout/DefaultLayout";
import ClubLayout from "./layout/ClubLayout";
import ProfileClub from "./pages/profiles/ProfileClub";
import ProfileUser from "./pages/profiles/ProfileUser";
import LoginUser from "./pages/Login/LoginUser";
import LoginClub from "./pages/Login/LoginClub";
import HomeNotLogged from "./pages/home/HomeNotLogged";
import HomeClub from "./pages/home/HomeClub";
import RegReservation from "./pages/tycoon/RegReservation";
import UserLayout from "./layout/UserLayout";
import RegistrationUser from "./pages/RegistrationForm/RegistrationUser";
import RegistrationClub from "./pages/RegistrationForm/RegistrationClub";
import HomeUser from "./pages/home/HomeUser";
import SubCheckoutGold from "./pages/Subscriptions/SubCheckoutGold";
import SubCheckoutSilver from "./pages/Subscriptions/SubCheckoutSilver";

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
        <Route path="/" element={
        <DefaultLayout />}>
          <Route path="" element={<HomeNotLogged />} />
          <Route path="login" element={<LoginUser />} />
          <Route path="loginClub" element={<LoginClub />} />
          <Route path="registrationClub" element={<RegistrationClub />} />
          <Route path="registration" element={<RegistrationUser />} />
          <Route path="whoAreWe" element={<WhoAreWe />} />
        </Route>
        <Route
          path="/services"
          element={
            <ProtectedRoute identity="user">
            <UserLayout />
            </ProtectedRoute>
          }
        >
          <Route path="" element={<HomeUser />} />
          <Route path="profile" element={<ProfileUser />} />
          <Route path="whoAreWe" element={<WhoAreWe />} />
        </Route>
        <Route
          path="/clubs"
          element={
            <ProtectedRoute identity="club">
              <ClubLayout />
            </ProtectedRoute>
          }
        >
          <Route path="" element={<HomeClub />} />
          <Route path="profile" element={<ProfileClub />} />
          <Route path="whoAreWe" element={<WhoAreWe />} />
          <Route path="subCheckoutSilver" element={<SubCheckoutSilver />} />
          <Route path="subCheckoutGold" element={<SubCheckoutGold />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;