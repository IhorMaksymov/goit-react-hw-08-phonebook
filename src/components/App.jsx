import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import GlobalStyle from "./GlobalStyle";

import Layout from "./Layout";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";

import { refreshUser } from "redux/auth/authOperation";
import { selectIsRefreshing } from "redux/auth/authSelectors";

const HomePages = lazy(() => import('../pages/HomePages'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

const App = () => {

  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    !isRefreshing && (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePages />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
              } />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
              } />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
              } />
          </Route>
        </Routes>
        <GlobalStyle />
      </>
    )
  );
};

export default App;