export const PostList = (state) => {
  return `
      <ul>
        ${state
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
