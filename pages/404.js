import { navigate } from "../utils/navigate.js";

export default function NotFound($target) {
  this.$target = $target;

  this.$target.addEventListener("click", (e) => {
    if (e.target.className === "btn_main_back") {
      navigate("/");
    }
  });

  this.render = () => {
    this.$target.innerHTML = `
        <div class="not-found">
          404
          <div class="btn_main_back">메인으로 돌아가기</div>
        </div>
    `;
  };

  this.render();
}
