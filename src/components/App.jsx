import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrentUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
// import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { AppBar } from './AppBar/AppBar';
// import { LoaderApp } from 'components/Loader/Loader'
// import { Container, LoaderContainer } from './App.styled';


const Home = lazy(() => import('pages/HomePage/HomePage'));
const Register = lazy(() => import('pages/Register/Register'));
// const SignIn = lazy(() => import('pages/SignIn/SignIn'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Suspense>
        <Routes>

          <Route
            path="register"
            element={
              <PublicRoute redirectTo="/">
                <Register />
              </PublicRoute>
            }
          />

          {/* <Route
                path="signIn"
                element={
                  <PublicRoute redirectTo="/">
                    <SignIn />
                  </PublicRoute>
                }
              /> */}

          <Route path="/" element={<AppBar />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    )
  );
}

export default App;
