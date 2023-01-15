export default function Header({ $target }) {
  const $header = document.createElement("header");
  $target.appendChild($header);

  this.render = () => {
    $header.innerHTML = `HPNY 2023`;
  };

  this.render();
}
