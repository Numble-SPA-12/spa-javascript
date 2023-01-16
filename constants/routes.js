import Main from "../pages/Main";
import Post from "../pages/Post";
import Upload from "../pages/Upload";

export const routes = [
  { path: /^\/$/, element: Main },
  { path: /^\/post\/[\w]+$/, element: Post },
  { path: /^\/upload$/, element: Upload },
];
