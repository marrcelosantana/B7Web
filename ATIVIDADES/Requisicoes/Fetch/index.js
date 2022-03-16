function loadPosts(){
  document.getElementById("posts").innerHTML = `Carregando...`
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((resultado) => {
      return resultado.json(); //Retorna uma promise.
    })
    .then((json) => {
      montarBlog(json);
    })
    .catch((error) => {
      console.log(error);
    })
}

function montarBlog(lista){
  let html = '';
  for(let i in lista){
    html += `<h3>${lista[i].title}</h3>`;
    html += `${lista[i].body}<br>`
    html += "<hr/>"
  }
  document.getElementById("posts").innerHTML = html;
}