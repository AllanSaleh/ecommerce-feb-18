import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { ProductProvider } from './context/ProductContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  const queryClient = new QueryClient();

  return (
    <ProductProvider>
      <CartProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/logout' element={<Logout />} />
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
        </AuthProvider>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
