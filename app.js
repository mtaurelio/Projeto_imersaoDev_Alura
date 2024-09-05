function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  // Verifica se a seção foi encontrada no DOM (para depuração)
  console.log(section);

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";

  // Itera sobre os dados da pesquisa
  for (let dado of dados) {
    // Cria o HTML para cada resultado
    resultados += `<div class="item-resultado">
      <h2>
        <a href=${dado.link} target="_blank">${dado.titulo}</a>
      </h2>
      <p class="descricao-meta">${dado.descricao}</p>
      <a href=${dado.link} target="_blank">Mais informações</a>
    </div>`;
  }

  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}
