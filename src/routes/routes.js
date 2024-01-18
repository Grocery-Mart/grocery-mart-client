import config from '~/config';
import { ProductLayout, AuthLayout } from '~/Layouts';

import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Cart from '~/pages/Cart';
import Profile from '~/pages/Profile';
import LogIn from '~/pages/LogIn';
import SignUp from '~/pages/SignUp';

const publicRoutes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.product, component: Product, layout: ProductLayout},
    {path: config.routes.cart, component: Cart},
    {path: config.routes.profile, component: Profile},
    {path: config.routes.login, component: LogIn, layout: AuthLayout},
    {path: config.routes.signup, component: SignUp, layout: AuthLayout},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
