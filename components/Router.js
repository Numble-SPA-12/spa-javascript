import { routes } from "../constants/routes.js";
import NotFound from "../pages/404.js";

export default function Router($target) {
  const findMatchedRoute = () =>
    routes.find((route) => route.path.test(location.pathname));

  const route = () => {
    const TargetPage = findMatchedRoute()?.element || NotFound;
    new TargetPage($target);
  };

  route();
}
