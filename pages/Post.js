import {
  deletePost,
  getPostDetail,
  addComment,
  deleteComment,
} from "../utils/api.js";
import { navigate } from "../utils/navigate.js";

import { CommentList } from "../components/CommentList.js";
import { printKorDate } from "../utils/index.js";

export default function Post($target) {
  this.$target = $target;
  this.state = [];

  this.setState = (newState) => {
    this.state = newState;
  };

  const postID = location.pathname.split("/").slice(-1)[0];

  const postDetailSet = async () => {
    const { data } = await getPostDetail(postID);
    this.setState(data.data.comments);
    this.render();
  };

  this.$target.addEventListener("click", (e) => {
    if (e.target.className === "post_edit") {
      navigate(`/edit/${postID}`, history.state);
    }
  });

  this.$target.addEventListener("click", async (e) => {
    if (e.target.className === "post_delete") {
      await deletePost(postID).then(() => navigate("/"));
    }
  });

  this.$target.addEventListener("click", async (e) => {
    const comment = document.getElementById("comment_text")?.value ?? "";
    if (e.target.className === "add_comment") {
      if (comment === "") {
        alert("댓글 내용을 입력해 주세요");
        return;
      }

      await addComment(postID, { content: comment }).then(() =>
        postDetailSet()
      );
    }
  });

  this.$target.addEventListener("click", async (e) => {
    if (e.target.className === "comment_delete") {
      const targetID = e.target.dataset.id;
      await deleteComment(targetID).then(() => postDetailSet());
    }
  });

  this.render = () => {
    this.$target.innerHTML = `
      <div class="post_article">
      <img src="${history.state?.image}"
        width="100%" height="265px" alt="${history.state?.title}" />
        <h1 class="post_title">${history.state?.title}</h1>
        <span class="post_date">${printKorDate(history.state?.createdAt)}</span>
        <div>${history.state?.content}</div>
      </div>
      <div class="post_edit_wrap">
        <button class="post_delete">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="8" fill="#D9D9D9" />
            <path
              d="M13.6 9.75999C13.6 9.08104 13.8697 8.42989 14.3498 7.9498C14.8299 7.4697 15.481 7.19999 16.16 7.19999H23.84C24.5189 7.19999 25.1701 7.4697 25.6502 7.9498C26.1303 8.42989 26.4 9.08104 26.4 9.75999V12.32H31.52C31.8595 12.32 32.185 12.4548 32.4251 12.6949C32.6651 12.9349 32.8 13.2605 32.8 13.6C32.8 13.9395 32.6651 14.265 32.4251 14.5051C32.185 14.7451 31.8595 14.88 31.52 14.88H30.1517L29.0419 30.4217C28.9959 31.0676 28.7069 31.6721 28.2331 32.1134C27.7593 32.5547 27.1358 32.8 26.4883 32.8H13.5104C12.8629 32.8 12.2394 32.5547 11.7656 32.1134C11.2918 31.6721 11.0028 31.0676 10.9568 30.4217L9.84958 14.88H8.47998C8.1405 14.88 7.81493 14.7451 7.57488 14.5051C7.33484 14.265 7.19998 13.9395 7.19998 13.6C7.19998 13.2605 7.33484 12.9349 7.57488 12.6949C7.81493 12.4548 8.1405 12.32 8.47998 12.32H13.6V9.75999ZM16.16 12.32H23.84V9.75999H16.16V12.32ZM12.4147 14.88L13.5117 30.24H26.4896L27.5865 14.88H12.4147ZM17.44 17.44C17.7795 17.44 18.105 17.5748 18.3451 17.8149C18.5851 18.0549 18.72 18.3805 18.72 18.72V26.4C18.72 26.7395 18.5851 27.065 18.3451 27.3051C18.105 27.5451 17.7795 27.68 17.44 27.68C17.1005 27.68 16.7749 27.5451 16.5349 27.3051C16.2948 27.065 16.16 26.7395 16.16 26.4V18.72C16.16 18.3805 16.2948 18.0549 16.5349 17.8149C16.7749 17.5748 17.1005 17.44 17.44 17.44ZM22.56 17.44C22.8995 17.44 23.225 17.5748 23.4651 17.8149C23.7051 18.0549 23.84 18.3805 23.84 18.72V26.4C23.84 26.7395 23.7051 27.065 23.4651 27.3051C23.225 27.5451 22.8995 27.68 22.56 27.68C22.2205 27.68 21.8949 27.5451 21.6549 27.3051C21.4148 27.065 21.28 26.7395 21.28 26.4V18.72C21.28 18.3805 21.4148 18.0549 21.6549 17.8149C21.8949 17.5748 22.2205 17.44 22.56 17.44Z"
              fill="black"
            />
          </svg>
        </button>
        <button class="post_edit">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="8" fill="#D9D9D9" />
            <path
              d="M26.4627 7.40665C26.7232 7.14627 27.0764 7 27.4447 7C27.813 7 28.1662 7.14627 28.4266 7.40665L32.5933 11.5734C32.8537 11.8338 33 12.187 33 12.5553C33 12.9236 32.8537 13.2768 32.5933 13.5373L20.0932 26.0374C19.8328 26.2979 19.4796 26.4443 19.1112 26.4444H14.9445C14.5762 26.4444 14.2229 26.298 13.9624 26.0376C13.702 25.7771 13.5556 25.4238 13.5556 25.0555V20.8888C13.5557 20.5204 13.7021 20.1672 13.9626 19.9068L26.4627 7.40665ZM16.3334 21.4638V23.6666H18.5362L29.6475 12.5553L27.4447 10.3525L16.3334 21.4638ZM8 12.5553C8 11.8186 8.29266 11.1121 8.8136 10.5911C9.33454 10.0702 10.0411 9.77751 10.7778 9.77751H17.7223C18.0907 9.77751 18.444 9.92385 18.7044 10.1843C18.9649 10.4448 19.1112 10.7981 19.1112 11.1664C19.1112 11.5348 18.9649 11.8881 18.7044 12.1485C18.444 12.409 18.0907 12.5553 17.7223 12.5553H10.7778V29.2222H27.4447V22.2777C27.4447 21.9093 27.591 21.556 27.8515 21.2956C28.1119 21.0351 28.4652 20.8888 28.8336 20.8888C29.2019 20.8888 29.5552 21.0351 29.8157 21.2956C30.0762 21.556 30.2225 21.9093 30.2225 22.2777V29.2222C30.2225 29.9589 29.9298 30.6655 29.4089 31.1864C28.8879 31.7073 28.1814 32 27.4447 32H10.7778C10.0411 32 9.33454 31.7073 8.8136 31.1864C8.29266 30.6655 8 29.9589 8 29.2222V12.5553Z"
              fill="#0D0D0D"
            />
          </svg>
        </button>
      </div>
      ${CommentList(this.state)}
      <div class="comment_edit">
        <input id="comment_text" />
        <button class="add_comment">
          <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
            <polygon class="cls-1" points="19 31 13 19 1 13 31 1 19 31" />
            <line class="cls-1" x1="13" x2="25" y1="19" y2="7" />
          </svg>
        </button>
      </div>
    `;
  };

  this.render();
  postDetailSet();
}
