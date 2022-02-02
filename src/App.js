import './App.css';
import { Route, Routes } from "react-router-dom"
import Guest from './components/guests/Guest';
import GuestModal from './components/guests/GuestModal';
import Categories from './components/guests/Categories';
import Nigerian from './components/guests/Nigerian/Nigerian';
import Continental from './components/guests/Continental/Continental';
import Order from './components/guests/Nigerian/Order';
import Update from './components/guests/Nigerian/Update';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import Add from './components/admin/Add';
import NewMeal from './components/admin/New Meal/NewMeal';
import NewCaterer from './components/admin/New Caterer/NewCaterer';
import MealForm from './components/admin/New Meal/MealForm';
import ContinentalForm from './components/admin/New Meal/ContinentalForm';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path = "/" element = { <Guest /> } />
            <Route path = "/modal" element = { <GuestModal /> } />
            <Route path = "/category" element = { <Categories /> } />
            <Route path = "/category/nigerian" element = { <Nigerian /> } />
            <Route path = "/category/continental" element = { <Continental /> } />
            <Route path = "/category/nigerian/order" element = { <Order /> } />
            <Route path = "/category/nigerian/order/update" element = { <Update /> } />
            <Route path = "/admin" element = { <AdminLogin /> } />
            <Route path = "/dashboard" element = { <AdminDashboard /> } />
            <Route path = "/create" element = { <Add /> } />
            <Route path = "/create/meal" element = { <NewMeal /> } />
            <Route path = "/create/meal/form" element = { <MealForm /> } />
            <Route path = "/create/continental/form" element = { <ContinentalForm /> } />
            <Route path = "/create/caterer" element = { <NewCaterer /> } />
        </Routes>
    </div>
  );
}

export default App;
