export default function NotFound($target) {
  this.$target = $target;

  this.render = () => {
    this.$target.innerHTML = `
        <div class="not-found">
            404
            <a href="/" class="btn_main_back">메인으로 돌아가기</a>
        </div>
    `;
  };

  this.render();
}
