import config from '~/config';

import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Cart from '~/pages/Cart';
import Profile from '~/pages/Profile';
import { ProductLayout } from '~/Layouts';

const publicRoutes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.product, component: Product, layout: ProductLayout},
    {path: config.routes.cart, component: Cart},
    {path: config.routes.profile, component: Profile},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
