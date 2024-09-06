function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  // Verifica se a seção foi encontrada no DOM (para depuração)
  console.log(section);

  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  console.log(campoPesquisa);

  //se campoPesquisa for uma string vazia...
  if (campoPesquisa == "") {
    section.innerHTML = "<p>Nada foi encontrado. Voce não </p>";
    return;
  }
  //
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre os dados da pesquisa
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // Cria o HTML para cada resultado
      resultados += `<div class="item-resultado">
      <h2>
        <a href=${dado.link} target="_blank">${dado.titulo}</a>
      </h2>
      <p class="descricao-meta">${dado.descricao}</p>
      <a href=${dado.link} target="_blank">Mais informações</a>
    </div>`;
    }
    console.log(dado.titulo.includes(campoPesquisa));
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>";
  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}
