// import { ref, get } from 'firebase/database';
// import { db } from './firebase/firebase';
// import SignIn from './components/SignUpForm/SignUpForm';
// import SignUp from './components/SignInForm/SignInForm';
// import AuthDetails from './components/AuthDetails/AuthDetails';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
// import { routes } from './constants/routes';
import PublicRoute from './components/Routes/PublicRoute';
import Home from './pages/Home/Home';

// Створення посилання на кореневий об'єкт бази даних
// const rootRef = ref(db);

// Виконання запиту та отримання даних
// get(rootRef)
//   .then(snapshot => {
//     if (snapshot.exists()) {
//       const data = snapshot.val();
//       console.log('Дані з бази даних:', data);
//     } else {
//       console.log('Дані не знайдені.');
//     }
//   })
//   .catch(error => {
//     console.error('Помилка при виконанні запиту:', error);
//   });

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
        </Route>
      </Routes>
    </>
    // <div>
    //   <SignIn />
    //   <SignUp />
    //   <AuthDetails />
    // </div>
  );
};

export default App;
