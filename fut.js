/* =====================================
   VARIÁVEIS
===================================== */

const estado = {

    liga: "brasileirao",

    filtroJogo: "all",

    estatistica: "goals",

    modoTabela: "overall",

    buscaJogador: "",

    buscaClube: ""

};


/* =====================================
   FUNÇÕES AUXILIARES
===================================== */

function selecionarLiga() {

    return LEAGUES[estado.liga];

}


function $(seletor) {

    return document.querySelector(seletor);

}


function $$(seletor) {

    return document.querySelectorAll(seletor);

}


function nomeCurto(nome) {

    const partes = nome
        .split(" ")
        .filter(Boolean);

    if (partes.length === 1) {

        return partes[0]
            .substring(0, 3)
            .toUpperCase();

    }

    return partes
        .map(parte => parte[0])
        .join("")
        .substring(0, 3)
        .toUpperCase();

}


function escudo(nome) {

    return `
        <span class="crest">
            ${nomeCurto(nome)}
        </span>
    `;

}


/* =====================================
   TEMA
===================================== */

function carregarTema() {

    const temaSalvo =
        localStorage.getItem("placar-theme");

    if (temaSalvo) {

        document.documentElement.dataset.theme =
            temaSalvo;

    }

    atualizarBotaoTema();

}


function alterarTema() {

    const temaAtual =
        document.documentElement.dataset.theme;

    const novoTema =
        temaAtual === "dark"
            ? "light"
            : "dark";

    document.documentElement.dataset.theme =
        novoTema;

    localStorage.setItem(
        "placar-theme",
        novoTema
    );

    atualizarBotaoTema();

}


function atualizarBotaoTema() {

    const tema =
        document.documentElement.dataset.theme;

    $("#themeBtn").textContent =
        tema === "dark"
            ? "☀"
            : "☾";

}


/* =====================================
   LIGA
===================================== */

function alterarLiga(liga) {

    estado.liga = liga;

    document.documentElement.dataset.league =
        liga;

    const dados = selecionarLiga();

    document.title =
        `Placar - ${dados.name}`;

    $$(".liga-btn").forEach(botao => {

        botao.classList.toggle(
            "ativo",
            botao.dataset.league === liga
        );

    });

    $$("#mobileMenu [data-league]")
        .forEach(botao => {

            botao.classList.toggle(
                "ativo",
                botao.dataset.league === liga
            );

        });

    renderizarTudo();

}


/* =====================================
   HERO
===================================== */

function renderizarHero() {

    const dados = selecionarLiga();

    $("#leagueEyebrow").textContent =
        dados.eyebrow;

    $("#heroText").textContent =
        dados.heroText;

}


/* =====================================
   ESTATÍSTICAS RÁPIDAS
===================================== */

function renderizarMicroStats() {

    const dados = selecionarLiga();

    const lider =
        dados.standings[0];

    const artilheiro =
        dados.scorers[0];

    const totalGols =
        dados.standings.reduce(
            (total, time) => total + time[6],
            0
        );

    $("#microStats").innerHTML = `

        <div>
            <strong>
                ${dados.standings.length}
            </strong>

            <span>
                clubes
            </span>
        </div>

        <div>
            <strong>
                ${lider[9]}
            </strong>

            <span>
                pontos do líder
            </span>
        </div>

        <div>
            <strong>
                ${totalGols}
            </strong>

            <span>
                gols
            </span>
        </div>

        <div>
            <strong>
                ${artilheiro[2]}
            </strong>

            <span>
                gols do artilheiro
            </span>
        </div>

    `;

}


/* =====================================
   DESTAQUE
===================================== */

function renderizarDestaque() {

    const dados = selecionarLiga();

    const artilheiro =
        dados.scorers[0];

    $("#spotlightTitle").textContent =
        artilheiro[0];

    $("#spotlightSub").textContent =
        `${artilheiro[1]} · artilheiro`;

    $("#spotlightNumber").textContent =
        artilheiro[2];

    const maiores = dados.scorers.slice(0, 4);

    const maiorValor =
        maiores[0][2];

    $("#spotlightBars").innerHTML =
        maiores.map(jogador => {

            const porcentagem =
                (jogador[2] / maiorValor) * 100;

            return `

                <div class="bar-row">

                    <span>
                        ${jogador[0]}
                    </span>

                    <div>
                        <i style="width:${porcentagem}%"></i>
                    </div>

                    <b>
                        ${jogador[2]}
                    </b>

                </div>

            `;

        }).join("");

}


/* =====================================
   JOGOS
===================================== */

function renderizarJogos() {

    const dados = selecionarLiga();

    let jogos =
        [...dados.matches];

    if (estado.filtroJogo !== "all") {

        jogos =
            jogos.filter(
                jogo =>
                    jogo.status ===
                    estado.filtroJogo
            );

    }

    if (jogos.length === 0) {

        $("#matchesGrid").innerHTML = `
            <div class="match-card">
                Nenhum jogo encontrado.
            </div>
        `;

        return;

    }

    $("#matchesGrid").innerHTML =
        jogos.map(jogo => {

            let statusTexto =
                "Próximo";

            if (jogo.status === "finished") {

                statusTexto =
                    "Encerrado";

            }

            if (jogo.status === "live") {

                statusTexto =
                    "Ao vivo";

            }

            const placar =
                jogo.status === "scheduled"
                    ? jogo.time
                    : `${jogo.hs} x ${jogo.as}`;

            return `

                <article class="match-card">

                    <div class="match-top">

                        <span>
                            ${jogo.date}
                        </span>

                        <span class="match-status">
                            ${statusTexto}
                        </span>

                    </div>

                    <div class="match-teams">

                        <div class="club-line">

                            ${escudo(jogo.home)}

                            <span>
                                ${jogo.home}
                            </span>

                        </div>

                        <strong class="match-score">
                            ${placar}
                        </strong>

                        <div class="club-line right">

                            <span>
                                ${jogo.away}
                            </span>

                            ${escudo(jogo.away)}

                        </div>

                    </div>

                    <div class="match-info">
                        ${jogo.venue}
                    </div>

                </article>

            `;

        }).join("");


    renderizarProximoJogo();

}


function renderizarProximoJogo() {

    const dados = selecionarLiga();

    const proximo =
        dados.matches.find(
            jogo =>
                jogo.status === "scheduled"
        );

    if (!proximo) {

        $("#nextGame").innerHTML =
            "<p>Nenhum jogo próximo.</p>";

        return;

    }

    $("#nextGame").innerHTML = `

        <div class="next-match">

            ${escudo(proximo.home)}

            <strong>
                ${proximo.home}
            </strong>

            <span>
                x
            </span>

            <strong>
                ${proximo.away}
            </strong>

            ${escudo(proximo.away)}

            <p>
                ${proximo.date}
                ·
                ${proximo.time}
            </p>

        </div>

    `;

}


/* =====================================
   CLASSIFICAÇÃO
===================================== */

function renderizarTabela() {

    const dados = selecionarLiga();

    let tabela =
        [...dados.standings];

    if (estado.modoTabela === "attack") {

        tabela.sort(
            (a, b) => b[6] - a[6]
        );

    }

    if (estado.modoTabela === "defense") {

        tabela.sort(
            (a, b) => a[7] - b[7]
        );

    }

    if (estado.modoTabela === "form") {

        tabela.sort(
            (a, b) =>
                b[10].replaceAll("D", "").length -
                a[10].replaceAll("D", "").length
        );

    }

    $("#standingsTable").innerHTML = `

        <table>

            <thead>

                <tr>

                    <th>#</th>
                    <th>Time</th>
                    <th>J</th>
                    <th>V</th>
                    <th>E</th>
                    <th>D</th>
                    <th>GP</th>
                    <th>GC</th>
                    <th>SG</th>
                    <th>PTS</th>

                </tr>

            </thead>

            <tbody>

                ${tabela.map((time, index) => `

                    <tr>

                        <td>
                            ${index + 1}
                        </td>

                        <td>
                            <strong>
                                ${time[1]}
                            </strong>
                        </td>

                        <td>${time[2]}</td>
                        <td>${time[3]}</td>
                        <td>${time[4]}</td>
                        <td>${time[5]}</td>
                        <td>${time[6]}</td>
                        <td>${time[7]}</td>
                        <td>${time[8]}</td>

                        <td>
                            <strong>
                                ${time[9]}
                            </strong>
                        </td>

                    </tr>

                `).join("")}

            </tbody>

        </table>

    `;


    $("#tableLegend").innerHTML =
        dados.zones.map(zona => `

            <span>

                <i class="legend-dot ${zona.tone}">
                </i>

                ${zona.label}

            </span>

        `).join("");

}


/* =====================================
   JOGADORES
===================================== */

function jogadoresAtuais() {

    const dados = selecionarLiga();

    return estado.estatistica === "goals"
        ? dados.scorers
        : dados.assists;

}


function renderizarPodio() {

    const jogadores =
        jogadoresAtuais().slice(0, 3);

    $("#podium").innerHTML =
        jogadores.map((jogador, index) => {

            return `

                <article class="podium-card">

                    <span class="podium-rank">
                        ${index + 1}
                    </span>

                    <div class="avatar">
                        ${jogador[0]
                            .split(" ")
                            .map(nome => nome[0])
                            .join("")
                            .substring(0, 2)}
                    </div>

                    <strong>
                        ${jogador[0]}
                    </strong>

                    <span>
                        ${jogador[1]}
                    </span>

                    <b>
                        ${jogador[2]}
                        <small>
                            ${estado.estatistica === "goals"
                                ? "GOL"
                                : "AST"}
                        </small>
                    </b>

                </article>

            `;

        }).join("");

}


function renderizarJogadores() {

    const jogadores =
        jogadoresAtuais()
        .filter(jogador => {

            const busca =
                estado.buscaJogador
                    .toLowerCase();

            return (
                jogador[0]
                    .toLowerCase()
                    .includes(busca)
                ||
                jogador[1]
                    .toLowerCase()
                    .includes(busca)
            );

        });


    const nomeColuna =
        estado.estatistica === "goals"
            ? "Gols"
            : "Assistências";


    $("#playersTable").innerHTML = `

        <table>

            <thead>

                <tr>

                    <th>#</th>
                    <th>Jogador</th>
                    <th>Clube</th>
                    <th>${nomeColuna}</th>
                    <th>Jogos</th>

                </tr>

            </thead>

            <tbody>

                ${jogadores.map((jogador, index) => `

                    <tr>

                        <td>
                            ${index + 1}
                        </td>

                        <td>
                            <strong>
                                ${jogador[0]}
                            </strong>
                        </td>

                        <td>
                            ${jogador[1]}
                        </td>

                        <td>
                            <strong>
                                ${jogador[2]}
                            </strong>
                        </td>

                        <td>
                            ${jogador[3]}
                        </td>

                    </tr>

                `).join("")}

            </tbody>

        </table>

    `;

}


/* =====================================
   CLUBES
===================================== */

function renderizarClubes() {

    const dados = selecionarLiga();

    const busca =
        estado.buscaClube.toLowerCase();

    const clubes =
        dados.standings.filter(time =>
            time[1]
                .toLowerCase()
                .includes(busca)
        );


    $("#clubsGrid").innerHTML =
        clubes.map((time, index) => `

            <button
                class="club-card"
                type="button">

                ${escudo(time[1])}

                <span>

                    <strong>
                        ${time[1]}
                    </strong>

                    <small>
                        ${time[9]} pontos
                    </small>

                </span>

                <b>
                    #${index + 1}
                </b>

            </button>

        `).join("");

}


/* =====================================
   RENDERIZA TUDO
===================================== */

function renderizarTudo() {

    renderizarHero();

    renderizarMicroStats();

    renderizarDestaque();

    renderizarJogos();

    renderizarTabela();

    renderizarPodio();

    renderizarJogadores();

    renderizarClubes();

}


/* =====================================
   EVENTOS
===================================== */


/* TEMA */

$("#themeBtn").addEventListener(
    "click",
    alterarTema
);


/* LIGAS */

$$(".liga-btn").forEach(botao => {

    botao.addEventListener(
        "click",
        () => {

            alterarLiga(
                botao.dataset.league
            );

        }
    );

});


/* MENU MOBILE */

$("#menuBtn").addEventListener(
    "click",
    () => {

        const menu =
            $("#mobileMenu");

        const aberto =
            !menu.hidden;

        menu.hidden =
            aberto;

        $("#menuBtn").textContent =
            aberto ? "☰" : "✕";

    }
);


/* LINKS DO MENU */

$$(".mobile-menu a").forEach(link => {

    link.addEventListener(
        "click",
        () => {

            $("#mobileMenu").hidden =
                true;

            $("#menuBtn").textContent =
                "☰";

        }
    );

});


/* FILTROS DE JOGOS */

$$("[data-match-filter]")
.forEach(botao => {

    botao.addEventListener(
        "click",
        () => {

            estado.filtroJogo =
                botao.dataset.matchFilter;

            $$("[data-match-filter]")
            .forEach(item => {

                item.classList.toggle(
                    "ativo",
                    item === botao
                );

            });

            renderizarJogos();

        }
    );

});


/* TABELA */

$("#tableMode")
.addEventListener(
    "change",
    evento => {

        estado.modoTabela =
            evento.target.value;

        renderizarTabela();

    }
);


/* BUSCA DE JOGADOR */

$("#playerSearch")
.addEventListener(
    "input",
    evento => {

        estado.buscaJogador =
            evento.target.value;

        renderizarJogadores();

    }
);


/* BUSCA DE CLUBE */

$("#clubSearch")
.addEventListener(
    "input",
    evento => {

        estado.buscaClube =
            evento.target.value;

        renderizarClubes();

    }
);


/* ARTILHARIA / ASSISTÊNCIAS */

$$("[data-player-stat]")
.forEach(botao => {

    botao.addEventListener(
        "click",
        () => {

            estado.estatistica =
                botao.dataset.playerStat;

            $$("[data-player-stat]")
            .forEach(item => {

                item.classList.toggle(
                    "ativa",
                    item === botao
                );

            });

            renderizarPodio();

            renderizarJogadores();

        }
    );

});


/* BOTÕES DE ROLAGEM */

$$("[data-scroll]")
.forEach(botao => {

    botao.addEventListener(
        "click",
        () => {

            const destino =
                document.getElementById(
                    botao.dataset.scroll
                );

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

});


/* =====================================
   INÍCIO
===================================== */

carregarTema();

renderizarTudo();