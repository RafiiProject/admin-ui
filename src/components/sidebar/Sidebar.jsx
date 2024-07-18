import "./sidebar.scss";
import { Link ,useNavigate} from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PaymentIcon from '@mui/icons-material/Payment';
import StoreIcon from '@mui/icons-material/Store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import {DarkModeContext} from "../../context/darkModeContext";
import { useContext } from "react";
import {signOut} from "firebase/auth";
import {auth} from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import ExitToAppIcon from "@mui/icons-material/ExitToApp"

const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext);

    const {dispatch: authDispatch}= useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                authDispatch({type: "LOGOUT"});
                navigate("/login");
            })
            .catch((error) => {
                console.error("Logout error: ", error);
            })
    }
    
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/">
                    <span className="logo">Store</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LIST</p>
                    <Link to="/users">
                        <li data-testid="users">
                            <PersonOutlineIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products">
                        <li>
                            <PaymentIcon className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <ShoppingCartIcon className="icon"/>
                        <span>Orders</span>
                    </li>
                    <Link to="/categories">
                        <li data-testid="category">
                            <CategoryIcon className="icon"/>
                            <span>Categories</span>
                        </li>
                    </Link>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li onClick={handleLogout}>
                        <ExitToAppIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>
            </div>
        </div>
    );
};

export default Sidebar;
