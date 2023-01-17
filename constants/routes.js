import Edit from "../pages/Edit.js";
import Main from "../pages/Main.js";
import Post from "../pages/Post.js";
import Upload from "../pages/Upload.js";

export const routes = [
  { path: /^\/$/, element: Main },
  { path: /^\/post\/[\w]+$/, element: Post },
  { path: /^\/upload$/, element: Upload },
  { path: /^\/edit\/[\w]+$/, element: Edit },
];
