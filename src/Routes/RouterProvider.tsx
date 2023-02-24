import {Route, Routes} from 'react-router-dom';


import Home from '../Screens/Home';
import Cart from '../Screens/Cart';

const RouterProvider = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  )
}

export default RouterProvider