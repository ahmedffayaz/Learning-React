import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Github, { githubInfoLoader } from '../pages/Github/Github.jsx'
import Layout from '../Layout.jsx'
import App from '../App.jsx'
import CurrencyGenerator from '../pages/currencyGenerator.jsx'
import PasswordGenerator from '../pages/passwordGenerator.jsx'
import Login from '../components/Auth/login.jsx'
import { UserContextProvider } from '../context/userContext/UserContextProvider.jsx'
import { Profile } from '../components/Auth/profile.jsx'
import User from '../pages/paramRoute/User.jsx'
import ThemeSwitcher from '../pages/themeSwitcher.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <App />,
//       },
//       {
//         path: "currency-convertor",
//         element: <CurrencyGenerator />,
//       },
//       {
//         path: "password-generator",
//         element: <PasswordGenerator />,
//       },
//       {
//         path: "login",
//         element: (
//           <>
//             {/* Context API using UserContextProvider */}
//               <h1 className="text-center">
//                 This is the content of context api
//               </h1>
//               <Login />
//               <Profile />
//             {/* Theme Provider shorthand practice */}
//             <ThemeSwitcher />
//           </>
//         ),
//       },
//       {
//         path: "user/:userid",
//         element: <User />,
//       },
//       {
//         path: "github",
//         element: <Github />,
//         loader: githubInfoLoader,
//       },
//     ],
//   },
// ]);


const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<App />} />
      <Route path='currency-convertor' element={<CurrencyGenerator />} />
      <Route path="password-generator" element={<PasswordGenerator />} />
      <Route path="login" element={
        <>
          {/* Content Api using UserContextProvider */}
          {/* Here we are wrapping the components that need the user context with the UserContextProvider 
              so that they can access the user information and token through the context. */}
          <h1 className="text-center">This is the content of context api</h1>

          <div className="context flex gap-6 justify-center items-start">

            <div className="p-6 rounded-lg w-1/2">
              {/* <UserContextProvider> */}
                <Login />
                <Profile />
              {/* </UserContextProvider> */}
            </div>

            <div className="p-6 rounded-lg w-1/2">
              <ThemeSwitcher />
            </div>

          </div>
        </>
      }>
      </Route>
      <Route path='user/:userid' element={<User />} />
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />}
      />
    </Route>
  )
)

export default router