import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from 'Loader/Loader';

const HomePage = lazy(() => import('Pages/HomePage'));
const ContactsPage = lazy(() => import('Pages/PhoneBookPage'));
const SignInPage = lazy(() => import('Pages/SignInPage'));
const SignUpPage = lazy(() => import('Pages/SignUpPage'));
const NotFoundPage = lazy(() => import('Pages/NotFoundPage'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="sign-in"
            element={
              <Suspense fallback={<Loader />}>
                <SignInPage />
              </Suspense>
            }
          />
          <Route
            path="sign-up"
            element={
              <Suspense fallback={<Loader />}>
                <SignUpPage />
              </Suspense>
            }
          />
          <Route
            path="phone-book"
            element={
              <Suspense fallback={<Loader />}>
                <ContactsPage />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
