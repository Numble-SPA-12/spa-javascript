import { navigate } from "../utils/navigate";

export default function PostList({ $target, init }) {
  this.state = init;

  $target.addEventListener("click", (e) => {
    if (e.target.classList.contains("post_item")) {
      const targetID = e.target.dataset.id;
      const targetPost = this.state.find((value) => value.postId === targetID);
      navigate(`/post/${targetID}`, targetPost);
    }
  });

  this.render = () => {
    if (!this.state) {
      alert("게시글을 불러오지 못했어요");
      return;
    }

    $target.innerHTML += `
      <ul>
        ${this.state
          .map(
            (post) =>
              `<li class="post_item" data-id="${post.postId}">
                <img class="post_img" src="${post.image}" alt="${post.title}">
                <div class="content">
                  <h1 class="post_title">${post.title}</h1>
                  <p class="post_content">${post.content}</p>
                </div>
              </li>`
          )
          .join("")}
        </ul>
      `;
  };

  this.render();
}
