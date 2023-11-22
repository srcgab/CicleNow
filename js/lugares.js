document.addEventListener("DOMContentLoaded", function() {
    const estados = document.querySelectorAll(".estado");

    estados.forEach(estado => {
        estado.addEventListener("click", function() {
            const estadoId = estado.getAttribute("id");
            const tabelaCorrespondente = document.getElementById(`tabela${estadoId.charAt(0).toUpperCase() + estadoId.slice(1)}`);

            if (tabelaCorrespondente) {
                const tabelas = document.querySelectorAll(".tabela-locais");
                tabelas.forEach(tabela => tabela.style.display = "none");

                tabelaCorrespondente.style.display = "block";
            }
        });
    });

    function mostrarMapa(link, mapaID) {
        const mapa = document.getElementById(mapaID);
        const iframe = mapa.querySelector('iframe');
        const url = link.href;

        iframe.src = url;
        mapa.style.display = 'block';

        // Esconder outros mapas
        const outrosMapas = document.querySelectorAll('.mapa');
        outrosMapas.forEach(outroMapa => {
            if (outroMapa.id !== mapaID) {
                outroMapa.style.display = 'none';
            }
        });

        // Adicionar evento para ocultar o iframe ao clicar fora dele
        function esconderIframe(event) {
            const clicadoForaDaTabela = !event.target.closest('.tabela-locais');
            const clicadoForaDoIframe = !event.target.closest(`#${mapaID}`);

            if (clicadoForaDaTabela && clicadoForaDoIframe) {
                iframe.style.display = 'none';
                document.removeEventListener('click', esconderIframe);
            }
        }

        document.removeEventListener('click', esconderIframe);
        document.addEventListener('click', esconderIframe);
    }

    // Adicionando eventos de clique aos links de localização
    const linksLocalizacao = document.querySelectorAll('.tabela-locais table a');
    linksLocalizacao.forEach((link, index) => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const tabelaPai = this.closest('.tabela-locais'); // Encontrar a tabela correspondente
            const mapaID = `loc${index + 1}`; // Gerar ID do mapa baseado no índice do link

            mostrarMapa(this, mapaID);
        });
    });
});
