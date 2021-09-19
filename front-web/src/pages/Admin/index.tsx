import { Route, Switch } from 'react-router-dom';
import AdminNavBar from './components/AdminNavBar';
import Products from './components/Products';
import './styles.scss';

const Admin = () => {
    return(
        <div className="admin-container">
            <AdminNavBar />
            <div className="admin-content">
                <Switch>
                    <Route path="/admin/products">
                        <Products />
                    </Route>
                    <Route path="/admin/categories">
                        <h1>Categories</h1>
                    </Route>
                    <Route path="/admin/users">
                        <h1>Users</h1>
                    </Route>
                </Switch>
            </div>
        </div>
    );    
}

export default Admin;