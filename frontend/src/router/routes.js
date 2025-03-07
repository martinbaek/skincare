import { Home } from "../pages/Home";
import { ProductsCompatibility } from "../pages/ProductsCompatibility";
import { RutineMaker } from "../pages/RutineMaker";

const routes = Object.freeze([
  {
    path: "/",
    component: Home,
    isProtected: true,
  },
  {
    path: "/productsCompatibility",
    component: ProductsCompatibility,
    isProtected: true,
  },
  {
    path: "/create-rutine",
    component: RutineMaker,
    isProtected: true,
  },
]);

export default routes;
