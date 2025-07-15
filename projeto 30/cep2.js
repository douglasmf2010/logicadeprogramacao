document.getElementById("botaoAdicionar").addEventListener("click", function() {
    const input = document.getElementById("inputTarefa");
    const texto = input.value.trim();
    if (texto !== "") {
  
  
         fetch("https://viacep.com.br/ws/"+texto+"/json/")
      .then(res => res.json())
      .then(dados => {
        document.getElementById("resultado").textContent =
          JSON.stringify(dados, null, 2);
      })
      .catch(erro => {
        document.getElementById("resultado").textContent =
          "Erro ao buscar CEP";
      });
  }});
  