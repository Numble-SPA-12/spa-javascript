export default function CommentList({ $target, init }) {
  this.$target = $target;
  this.state = init;

  this.render = () => {
    if (!this.state) {
      alert("댓글을 불러오지 못했어요");
      return;
    }

    this.$target.innerHTML += `
      <ul>
        ${this.state.data.comments
          .map(
            (comment) =>
              `<li key="${comment.commentId}">
                <div class="comment">
                  <p>${comment.content}</p>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="10" fill="#E2E2E2" />
                    <path
                      d="M11.0575 9.99999L14.2825 6.78249C14.4237 6.64126 14.5031 6.44971 14.5031 6.24999C14.5031 6.05026 14.4237 5.85871 14.2825 5.71749C14.1413 5.57626 13.9497 5.49692 13.75 5.49692C13.5503 5.49692 13.3587 5.57626 13.2175 5.71749L10 8.94249L6.78252 5.71749C6.64129 5.57626 6.44974 5.49692 6.25002 5.49692C6.05029 5.49692 5.85874 5.57626 5.71752 5.71749C5.57629 5.85871 5.49695 6.05026 5.49695 6.24999C5.49695 6.44971 5.57629 6.64126 5.71752 6.78249L8.94252 9.99999L5.71752 13.2175C5.64722 13.2872 5.59142 13.3702 5.55335 13.4616C5.51527 13.5529 5.49567 13.651 5.49567 13.75C5.49567 13.849 5.51527 13.947 5.55335 14.0384C5.59142 14.1298 5.64722 14.2128 5.71752 14.2825C5.78724 14.3528 5.87019 14.4086 5.96158 14.4467C6.05298 14.4847 6.15101 14.5043 6.25002 14.5043C6.34902 14.5043 6.44705 14.4847 6.53845 14.4467C6.62984 14.4086 6.71279 14.3528 6.78252 14.2825L10 11.0575L13.2175 14.2825C13.2872 14.3528 13.3702 14.4086 13.4616 14.4467C13.553 14.4847 13.651 14.5043 13.75 14.5043C13.849 14.5043 13.9471 14.4847 14.0384 14.4467C14.1298 14.4086 14.2128 14.3528 14.2825 14.2825C14.3528 14.2128 14.4086 14.1298 14.4467 14.0384C14.4848 13.947 14.5044 13.849 14.5044 13.75C14.5044 13.651 14.4848 13.5529 14.4467 13.4616C14.4086 13.3702 14.3528 13.2872 14.2825 13.2175L11.0575 9.99999Z"
                      fill="#0A0A0A"
                    />
                  </svg>
                </div>
              </li>`
          )
          .join("")}
        </ul>
      `;
  };

  this.render();
}
