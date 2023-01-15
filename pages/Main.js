import { dummy } from "../api/index.js";
import PostList from "../components/PostList.js";

export default function Main({ $target }) {
  const $section = document.createElement("section");
  $target.appendChild($section);

  this.render = () => {
    $section.innerHTML = `
      <a class="btn_new_post">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5319 0.364125C16.7651 0.130976 17.0814 0 17.4111 0C17.7409 0 18.0572 0.130976 18.2904 0.364125L23.265 5.33874C23.4982 5.57196 23.6292 5.88823 23.6292 6.218C23.6292 6.54777 23.4982 6.86405 23.265 7.09726L7.09753 23.2648C6.86435 23.498 6.54808 23.6291 6.21827 23.6292H1.24365C0.913816 23.6292 0.597488 23.4981 0.364258 23.2649C0.131027 23.0317 0 22.7153 0 22.3855V17.4109C7.04373e-05 17.0811 0.131144 16.7648 0.36439 16.5316L12.8009 4.09509L16.5319 0.364125ZM13.6802 6.73287L2.48731 17.9258V21.1418H5.70339L16.8963 9.94896L13.6802 6.73287ZM18.6548 8.19044L20.6272 6.218L17.4111 3.00191L15.4387 4.97435L18.6548 8.19044Z"
            fill="white"
          />
        </svg>
        새 글 작성하기
      </a>
    `;
  };

  this.setState = (newState) => {
    this.state = newState;
  };

  const setPosts = async () => {
    const posts = await dummy("/");
    this.setState(posts);

    new PostList({ $target: $section, init: this.state });
  };

  this.render();
  setPosts();
}
