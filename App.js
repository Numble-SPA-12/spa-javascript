import Router from "./components/Router.js";
import { navigate } from "./utils/navigate.js";

export default function App($target) {
  new Router($target);

  addEventListener("click", (e) => {
    if (e.target.className === "home") {
      navigate("/");
    }
  });
}
