import { addPost, getRandomImage } from "../utils/api.js";
import { navigate } from "../utils/navigate.js";

export default function Upload($target) {
  this.$target = $target;
  this.state = { image: "" };

  this.setState = (newState) => {
    this.state = newState;
  };

  this.$target.addEventListener("click", async (e) => {
    if (e.target.className === "btn_img_upload") {
      if (e.target.classList.contains("done")) return;

      document.querySelector(".btn_img_upload").classList.add("done");
      const { data } = await getRandomImage();
      this.setState({ image: data.urls.regular });
    }
  });

  this.$target.addEventListener("click", async (e) => {
    const title = document.getElementById("post_title")?.value ?? "";
    const content = document.getElementById("post_content")?.value ?? "";
    if (e.target.className === "btn_form") {
      if (this.state.image === "") {
        alert("위 이미지를 클릭하여 랜덤 이미지를 넣어주세요");
        return;
      }
      if (title === "") {
        alert("제목을 입력해 주세요");
        return;
      }
      if (content === "") {
        alert("내용을 입력해 주세요");
      }

      await addPost({
        title,
        content,
        image: this.state.image,
      })
        .then(({ data }) => {
          navigate(`/post/${data.data.postId}`, {
            ...data.data,
            createdAt: "방금 전",
          });
        })
        .catch(() => navigate("/"));
    }
  });

  this.render = () => {
    this.$target.innerHTML = `
      <section class="upload">
      <div class="form_wrap">
        <button class="btn_img_upload">
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38 0.5H8C6.01088 0.5 4.10322 1.29018 2.6967 2.6967C1.29018 4.10322 0.5 6.01088 0.5 8V38C0.5 39.9891 1.29018 41.8968 2.6967 43.3033C4.10322 44.7098 6.01088 45.5 8 45.5H38C39.9891 45.5 41.8968 44.7098 43.3033 43.3033C44.7098 41.8968 45.5 39.9891 45.5 38V8C45.5 6.01088 44.7098 4.10322 43.3033 2.6967C41.8968 1.29018 39.9891 0.5 38 0.5ZM8 5.5H38C38.663 5.5 39.2989 5.76339 39.7678 6.23223C40.2366 6.70107 40.5 7.33696 40.5 8V28.9L32.5 22.075C31.2605 21.0551 29.7052 20.4975 28.1 20.4975C26.4948 20.4975 24.9395 21.0551 23.7 22.075L5.5 37.25V8C5.5 7.33696 5.76339 6.70107 6.23223 6.23223C6.70107 5.76339 7.33696 5.5 8 5.5ZM38 40.5H9.4L26.9 25.9C27.2362 25.6504 27.6438 25.5156 28.0625 25.5156C28.4812 25.5156 28.8888 25.6504 29.225 25.9L40.5 35.5V38C40.5 38.663 40.2366 39.2989 39.7678 39.7678C39.2989 40.2366 38.663 40.5 38 40.5Z"
              fill="#E2E2E2"
            />
            <path
              d="M13 18C15.0711 18 16.75 16.3211 16.75 14.25C16.75 12.1789 15.0711 10.5 13 10.5C10.9289 10.5 9.25 12.1789 9.25 14.25C9.25 16.3211 10.9289 18 13 18Z"
              fill="#E2E2E2"
            />
          </svg>
        </button>
        <label class="form_title">제목</label>
        <input
          type="text"
          id="post_title"
          autoFocus
          maxLength="50"
          placeholder="글 제목을 입력해 주세요"
        />
        <label class="form_title">내용</label>
        <textarea
          type="text"
          id="post_content"
          maxLength="500"
          placeholder="글 내용을 입력해 주세요"
        ></textarea>
      </div>
      <button class="btn_form" type="submit">
        등록하기
      </button>
    </section>
    `;
  };

  this.render();
}
