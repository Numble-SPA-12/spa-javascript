import Header from "./components/Header.js";
import Main from "./pages/Main.js";

export default function App({ $target }) {
  new Header({ $target });
  new Main({ $target });
}
