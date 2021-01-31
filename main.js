const corTenis = document.querySelectorAll(".radio-cor");
const imgTenis = document.querySelectorAll(".img-tenis");

if (corTenis.length && imgTenis.length) {
  imgTenis[0].classList.add("ativo");

  function handleChangeColor(index) {
    console.log(index);
    imgTenis.forEach((img) => {
      img.classList.remove("ativo");
    });
    imgTenis[index].classList.add("ativo");
  }

  corTenis.forEach((cor, index) => {
    cor.addEventListener("click", () => {
      handleChangeColor(index);
    });
  });
}
