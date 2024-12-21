import { Route, Routes } from "react-router-dom";
import "./App.css";
import AnalaticsManagement from "./components/analaticsManagement/AnalaticsManagement.jsx";
import AddCategoryForm from "./components/categoryManagement/AddCategoryForm";
import AddSubCategoryForm from "./components/categoryManagement/AddSubCategoryForm";
import CategoryManager from "./components/categoryManagement/CategoryManager";
import SubCategoryListing from "./components/categoryManagement/SubCategoryListing.jsx";
import CommonLayout from "./components/commonLayout/CommonLayout.jsx";
import CouponForm from "./components/couponManagement/CouponForm.jsx";
import CouponList from "./components/couponManagement/CouponList.jsx";
import Finance from "./components/financeManagement/Finance.jsx";
import InventoryManagement from "./components/inventoryManagement/InventoryManagement.jsx";
import Login from "./components/Login.jsx";
import NewDashboard from "./components/NewDasboard.jsx";
import Orders from "./components/orderManagement/Orders.jsx";
import OrdersDetail from "./components/orderManagement/OrdersDetail.jsx";
import PaymentManagement from "./components/paymentManagement/PaymentManagement.jsx";
import AddProduct from "./components/productManagement/AddProduct.jsx";
import EditAllProducts from "./components/productManagement/EditAllProducts.jsx";
import PreviewAllProducts from "./components/productManagement/PreviewAllProducts.jsx";
import ProductList from "./components/productManagement/ProductList.jsx";
import Profile from "./components/profileManagement/Profile.jsx";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute.jsx";
import Purchase from "./components/purchase/Purchase.jsx";
import Referral from "./components/referralManagement/ReferralManagement.jsx";
import Register from "./components/Register.jsx";
import Settings from "./components/Settings";
import SignUp from "./components/SignUp.jsx";
import Support from "./components/supportManagement/Support.jsx";
import Teams from "./components/teamsManagement/Teams.jsx";
import Users from "./components/usersManagement/Users.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/register" element={<Register />} />
      <Route element={<CommonLayout />}>
        <Route
          path="/dashboard"
          element={<ProtectedRoute Component={NewDashboard} />}
        />

        <Route
          path="/referral"
          element={<ProtectedRoute Component={Referral} />}
        />
        <Route path="/users" element={<ProtectedRoute Component={Users} />} />

        <Route path="/orders" element={<ProtectedRoute Component={Orders} />} />
        <Route
          path="/orderDetail/:id"
          element={<ProtectedRoute Component={OrdersDetail} />}
        />
        <Route
          path="/products"
          element={<ProtectedRoute Component={ProductList} />}
        />
        <Route
          path="/purchase"
          element={<ProtectedRoute Component={Purchase} />}
        />
        <Route
          path="/payment"
          element={<ProtectedRoute Component={PaymentManagement} />}
        />
        <Route
          path="/add-product"
          element={<ProtectedRoute Component={AddProduct} />}
        />
        <Route
          path="/settings"
          element={<ProtectedRoute Component={Settings} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute Component={Profile} />}
        />
        <Route
          path="/analatics"
          element={<ProtectedRoute Component={AnalaticsManagement} />}
        />
        <Route
          path="/inventory"
          element={<ProtectedRoute Component={InventoryManagement} />}
        />
        <Route
          path="/support"
          element={<ProtectedRoute Component={Support} />}
        />
        <Route
          path="/category"
          element={<ProtectedRoute Component={CategoryManager} />}
        />
        <Route
          path="/add-product"
          element={<ProtectedRoute Component={AddProduct} />}
        />
        <Route
          path="/editProduct/:id"
          element={<ProtectedRoute Component={EditAllProducts} />}
        />
        <Route
          path="/viewProduct/:id"
          element={<ProtectedRoute Component={PreviewAllProducts} />}
        />
        <Route
          path="/addCategory"
          element={<ProtectedRoute Component={AddCategoryForm} />}
        />
        <Route
          path="/subcategory/:id"
          element={<ProtectedRoute Component={SubCategoryListing} />}
        />
        <Route
          path="/addSubCategory/:id"
          element={<ProtectedRoute Component={AddSubCategoryForm} />}
        />
        <Route
          path="/coupons"
          element={<ProtectedRoute Component={CouponList} />}
        />
        <Route path="/teams" element={<ProtectedRoute Component={Teams} />} />
        <Route
          path="/coupon-form"
          element={<ProtectedRoute Component={CouponForm} />}
        />
        <Route
          path="/finance"
          element={<ProtectedRoute Component={Finance} />}
        />
      </Route>
      <Route
        path="*"
        element={<p className="flex justify-center">404 Page</p>}
      />
    </Routes>
  );
};

export default App;
