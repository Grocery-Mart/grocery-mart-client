import config from '~/config';
import { ProductLayout, AuthLayout } from '~/Layouts';

import Home from '~/pages/Home';
import Grocery from '~/pages/Grocery';
import Furniture from '~/pages/Furniture';
import Fashion from '~/pages/Fashion';
import CheckOut from '~/pages/CheckOut';
import Favorite from '~/pages/Favorite';
import Profile from '~/pages/Profile';
import LogIn from '~/pages/LogIn';
import SignUp from '~/pages/SignUp';
import ForgotPassword from '~/pages/ForgotPassword';
import ProductDetail from '~/pages/ProductDetail';
import Shipping from '~/pages/Shipping';
import PaymentMethod from '~/pages/PaymentMethod';

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.grocery, component: Grocery, layout: ProductLayout },
  { path: config.routes.furniture, component: Furniture, layout: ProductLayout },
  { path: config.routes.fashion, component: Fashion, layout: ProductLayout },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.login, component: LogIn, layout: AuthLayout },
  { path: config.routes.signup, component: SignUp, layout: AuthLayout },
  { path: config.routes.forgot_password, component: ForgotPassword, layout: AuthLayout },
  { path: config.routes.product_detail, component: ProductDetail },
  { path: config.routes.checkout, component: CheckOut },
  { path: config.routes.favorite, component: Favorite },
  { path: config.routes.shipping, component: Shipping },
  { path: config.routes.payment_method, component: PaymentMethod },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
