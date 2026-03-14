fetch("trabalhos.json")
    .then(response => response.json())
    .then(data => {
        const projetos = data.Projetos;
        const cards = document.getElementById("grid-projetos");

        function ExibirProjetos(projetos){
            cards.innerHTML = "";
            projetos.forEach(projetos => {
                const card = document.createElement("div");
                card.classList.add("card-projeto");
                card.innerHTML = `
                    <img src="${projetos.img}>" alt = "${projetos.titulo}">
                    <h3>${projetos.titulo}</h3>
                    <p>${projetos.descricao}</p>
                    <div class="links">
                        <a href="${projetos.link}">Ver Projeto</a>
                        <a href="${projetos.Git}">Gir Hub</a>
                    </div>
                `;
                cards.appendChild(card);
            });
        }

        ExibirProjetos(projetos);
 }).catch(error => console.error("Erro ao carregar JSON:", error));