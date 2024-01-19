// import Components
import CompRegister from './components/Register/Register';
import CompLogin from './components/Login/Login';

// import React router dom
import { CreateBrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';

// create a router
const router = createBrowserRouter([
  {
    path:'/',
    element: <div><CompHome /></div>
  },
  {
    path:'/register',
    element: <div><CompRegister /></div>
  },
  {
    path:'/login',
    element: <div><CompLogin /></div>
  },
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
