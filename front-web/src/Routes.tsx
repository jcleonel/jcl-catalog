import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Admin from './pages/Admin';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/Catalog/components/ProductDetails';
import Home from './pages/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Catalog} />
                <Route exact path="/products/:productId" component={ProductDetails} />
                <Route exact path="/admin" component={Admin} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;