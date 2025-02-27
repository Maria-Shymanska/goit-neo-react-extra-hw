import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import { PrivateRoute } from "./components/PrivateRoute.jsx";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage.jsx")
);

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));
const ContactsPage = lazy(() =>
  import("./pages/ContactsPage/ContactsPage.jsx")
);

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<ErrorMessage />} />
      </Routes>
    </Layout>
  );
};

export default App;
