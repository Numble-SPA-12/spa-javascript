import { isImageValidity } from "../utils";

export const PostList = (state) => {
  return `
      <ul class="post_wrapper">
        ${state
          .reverse()
          .map(
            (post) =>
              `<li class="post_item" data-id="${post.postId}">
                <img class="post_img" src="${
                  isImageValidity(post.image)
                    ? post.image
                    : "/numble_resize.avif"
                }" alt="${post.title}">
                <div class="content">
                  <h1 class="post_title">${post.title}</h1>
                  <p class="post_content">${post.content}</p>
                </div>
              </li>`
          )
          .join("")}
        </ul>
        <div class="post_bottom"></div>
      `;
};
