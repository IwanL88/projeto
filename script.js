function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //Pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //Se stiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }


  if (html.classList.contains("light")) {
    img.setAttribute("alt","Foto de Mayk Brito sorrindo, usando óculos escuros, jaqueta preta e fundo roxo e azul.")
  } else {
    img.setAttribute("alt","Foto de Mayk Brito sorrindo, usando óculos, jaqueta preta e fundo roxo e azul.")
  }
}
