export default function PostList({ $target, init }) {
  this.$target = $target;
  this.state = init;

  this.render = () => {
    if (!this.state) {
      alert("게시글을 불러오지 못했어요");
      return;
    }

    this.$target.innerHTML += `
      <ul>
        ${this.state
          .map(
            (post) =>
              `<li class="post_item" key="${post.posdId}">
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
