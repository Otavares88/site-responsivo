/* =====================================================
   PLACAR
   Dados estáticos
   Recorte: 23/09/2026

===================================================== */

const DATA_ATUALIZACAO = "23/09/2026";


/* =====================================================
   DADOS DAS 3 LIGAS ESCOLHIDAS POR MIM
===================================================== */

const ligas = {


    /* =================================================
       BRASILEIRÃO
    ================================================= */

    brasileirao: {

        nome: "Brasileirão",

        eyebrow:
            "CAMPEONATO BRASILEIRO • 2026",

        descricao:
            "Classificação, resultados e estatísticas do Brasileirão em 23/09/2026.",


        tabela: [

            ["FLA", "Flamengo", 28, 18, 6, 4, 55, 23, 32, 60],

            ["PAL", "Palmeiras", 28, 16, 9, 3, 47, 21, 26, 57],

            ["CAP", "Athletico-PR", 28, 14, 7, 7, 43, 32, 11, 49],

            ["FLU", "Fluminense", 28, 13, 9, 6, 44, 36, 8, 48],

            ["BAH", "Bahia", 28, 12, 10, 6, 43, 35, 8, 46],

            ["CRU", "Cruzeiro", 28, 13, 6, 9, 42, 40, 2, 45],

            ["CAM", "Atlético-MG", 27, 11, 7, 9, 36, 32, 4, 40],

            ["SAN", "Santos", 27, 10, 8, 9, 41, 40, 1, 38],

            ["CFC", "Coritiba", 28, 10, 8, 10, 37, 43, -6, 38],

            ["RBB", "Red Bull Bragantino", 27, 10, 6, 11, 33, 31, 2, 36],

            ["SAO", "São Paulo", 27, 10, 6, 11, 32, 30, 2, 36],

            ["BOT", "Botafogo", 28, 9, 8, 11, 41, 45, -4, 35],

            ["VIT", "Vitória", 28, 9, 6, 13, 28, 42, -14, 33],

            ["COR", "Corinthians", 28, 8, 8, 12, 29, 32, -3, 32],

            ["MIR", "Mirassol", 28, 8, 8, 12, 33, 42, -9, 32],

            ["VAS", "Vasco da Gama", 27, 8, 7, 12, 34, 41, -7, 31],

            ["GRE", "Grêmio", 28, 7, 8, 13, 30, 38, -8, 29],

            ["INT", "Internacional", 28, 6, 10, 12, 30, 36, -6, 28],

            ["REM", "Remo", 28, 5, 8, 15, 32, 47, -15, 23],

            ["CHA", "Chapecoense", 27, 3, 9, 15, 29, 53, -24, 18]

        ],


        jogos: [

            {
                data: "20/09/2026",
                hora: "18:30",
                casa: "Flamengo",
                fora: "Red Bull Bragantino",
                placar: "2 x 1",
                local: "Maracanã",
                status: "ENCERRADO"
            },

            {
                data: "20/09/2026",
                hora: "16:00",
                casa: "Grêmio",
                fora: "Palmeiras",
                placar: "0 x 0",
                local: "Arena do Grêmio",
                status: "ENCERRADO"
            },

            {
                data: "20/09/2026",
                hora: "16:00",
                casa: "Corinthians",
                fora: "Fluminense",
                placar: "1 x 3",
                local: "Neo Química Arena",
                status: "ENCERRADO"
            },

            {
                data: "19/09/2026",
                hora: "21:00",
                casa: "São Paulo",
                fora: "Internacional",
                placar: "1 x 0",
                local: "Morumbis",
                status: "ENCERRADO"
            },

            {
                data: "20/09/2026",
                hora: "16:00",
                casa: "Vitória",
                fora: "Cruzeiro",
                placar: "1 x 3",
                local: "Barradão",
                status: "ENCERRADO"
            },

            {
                data: "19/09/2026",
                hora: "17:00",
                casa: "Mirassol",
                fora: "Botafogo",
                placar: "2 x 0",
                local: "Maião",
                status: "ENCERRADO"
            },

            {
                data: "19/09/2026",
                hora: "18:30",
                casa: "Remo",
                fora: "Santos",
                placar: "1 x 2",
                local: "Mangueirão",
                status: "ENCERRADO"
            },

            {
                data: "19/09/2026",
                hora: "20:30",
                casa: "Vasco da Gama",
                fora: "Coritiba",
                placar: "5 x 0",
                local: "São Januário",
                status: "ENCERRADO"
            },

            {
                data: "19/09/2026",
                hora: "16:00",
                casa: "Atlético-MG",
                fora: "Chapecoense",
                placar: "1 x 1",
                local: "Arena MRV",
                status: "ENCERRADO"
            },

            {
                data: "20/09/2026",
                hora: "19:30",
                casa: "Athletico-PR",
                fora: "Bahia",
                placar: "2 x 1",
                local: "Ligga Arena",
                status: "ENCERRADO"
            }

        ],


        artilheiros: [

            ["Kevin Viveros", "Athletico-PR", 18],
            ["Pedro", "Flamengo", 16],
            ["Gabriel Barbosa", "Santos", 11],
            ["Carlos Vinícius", "Grêmio", 10],
            ["Danilo", "Botafogo", 9],
            ["John Kennedy", "Fluminense", 9],
            ["Matheus Pereira", "Cruzeiro", 9],
            ["Luciano Juba", "Bahia", 9],
            ["Samuel Lino", "Flamengo", 9],
            ["Renê", "Vitória", 9]

        ],


        assistencias: [

            ["Josué", "Coritiba", 11],
            ["Andreas Pereira", "Palmeiras", 10],
            ["Samuel Lino", "Flamengo", 7],
            ["Jorge Carrascal", "Flamengo", 6],
            ["Rodrigo Garro", "Corinthians", 6],
            ["Pedro", "Flamengo", 5],
            ["Lucho Acosta", "Fluminense", 5],
            ["Agustín Canobbio", "Fluminense", 4],
            ["Reinaldo", "Vitória", 4],
            ["Éverton Ribeiro", "Bahia", 4]

        ]

    },


    /* =================================================
       PREMIER LEAGUE
    ================================================= */

    premier: {

        nome: "Premier League",

        eyebrow:
            "PREMIER LEAGUE • 2026/27",

        descricao:
            "Classificação, resultados e estatísticas da Premier League em 23/09/2026.",


        tabela: [

            ["MCI", "Manchester City", 5, 5, 0, 0, 13, 5, 8, 15],

            ["ARS", "Arsenal", 5, 4, 0, 1, 8, 4, 4, 12],

            ["BHA", "Brighton & Hove Albion", 5, 3, 1, 1, 16, 5, 11, 10],

            ["BRE", "Brentford", 5, 2, 3, 0, 10, 4, 6, 9],

            ["LEE", "Leeds United", 5, 2, 3, 0, 7, 3, 4, 9],

            ["LIV", "Liverpool", 5, 2, 3, 0, 7, 4, 3, 9],

            ["EVE", "Everton", 5, 2, 3, 0, 6, 3, 3, 9],

            ["HUL", "Hull City", 5, 2, 2, 1, 6, 4, 2, 8],

            ["NEW", "Newcastle United", 5, 2, 2, 1, 9, 9, 0, 8],

            ["CHE", "Chelsea", 5, 2, 1, 2, 10, 12, -2, 7],

            ["IPS", "Ipswich Town", 5, 2, 0, 3, 7, 11, -4, 6],

            ["MUN", "Manchester United", 5, 1, 2, 2, 8, 8, 0, 5],

            ["NFO", "Nottingham Forest", 5, 1, 2, 2, 4, 5, -1, 5],

            ["SUN", "Sunderland", 5, 1, 1, 3, 6, 10, -4, 4],

            ["CRY", "Crystal Palace", 5, 1, 1, 3, 6, 11, -5, 4],

            ["AVL", "Aston Villa", 5, 1, 1, 3, 4, 9, -5, 4],

            ["BOU", "Bournemouth", 5, 0, 3, 2, 6, 8, -2, 3],

            ["COV", "Coventry City", 5, 1, 0, 4, 1, 10, -9, 3],

            ["FUL", "Fulham", 5, 0, 2, 3, 5, 8, -3, 2],

            ["TOT", "Tottenham Hotspur", 5, 0, 2, 3, 2, 8, -6, 2]

        ],


        jogos: [

            {
                data: "18/09/2026",
                hora: "21:00",
                casa: "Brentford",
                fora: "Chelsea",
                placar: "3 x 0",
                local: "Gtech Community Stadium",
                status: "ENCERRADO"
            },

            {
                data: "19/09/2026",
                hora: "13:30",
                casa: "Tottenham Hotspur",
                fora: "Aston Villa",
                placar: "2 x 3",
                local: "Tottenham Hotspur Stadium",
                status: "ENCERRADO"
            },

            {
                data: "19/09/2026",
                hora: "16:00",
                casa: "Brighton",
                fora: "Arsenal",
                placar: "3 x 0",
                local: "Amex Stadium",
                status: "ENCERRADO"
            },

            {
                data: "19/09/2026",
                hora: "16:00",
                casa: "Everton",
                fora: "Ipswich Town",
                placar: "1 x 0",
                local: "Hill Dickinson Stadium",
                status: "ENCERRADO"
            },

            {
                data: "19/09/2026",
                hora: "16:00",
                casa: "Newcastle United",
                fora: "Hull City",
                placar: "2 x 1",
                local: "St James' Park",
                status: "ENCERRADO"
            },

            {
                data: "19/09/2026",
                hora: "18:30",
                casa: "Nottingham Forest",
                fora: "Coventry City",
                placar: "0 x 1",
                local: "City Ground",
                status: "ENCERRADO"
            },

            {
                data: "20/09/2026",
                hora: "15:00",
                casa: "Bournemouth",
                fora: "Liverpool",
                placar: "0 x 1",
                local: "Vitality Stadium",
                status: "ENCERRADO"
            },

            {
                data: "20/09/2026",
                hora: "15:00",
                casa: "Leeds United",
                fora: "Crystal Palace",
                placar: "0 x 0",
                local: "Elland Road",
                status: "ENCERRADO"
            },

            {
                data: "20/09/2026",
                hora: "15:00",
                casa: "Manchester City",
                fora: "Sunderland",
                placar: "5 x 3",
                local: "Etihad Stadium",
                status: "ENCERRADO"
            },

            {
                data: "20/09/2026",
                hora: "16:30",
                casa: "Fulham",
                fora: "Manchester United",
                placar: "1 x 1",
                local: "Craven Cottage",
                status: "ENCERRADO"
            }

        ],


        artilheiros: [

            ["Erling Haaland", "Manchester City", 5],
            ["Alexander Isak", "Liverpool", 4],
            ["Pascal Groß", "Brighton & Hove Albion", 3],
            ["João Pedro", "Chelsea", 3],
            ["Rayan Cherki", "Manchester City", 3],
            ["Bruno Fernandes", "Manchester United", 3],
            ["Morgan Rogers", "Chelsea", 3],
            ["Kevin Schade", "Brentford", 3],
            ["Marcus Tavernier", "Bournemouth", 3],
            ["Bukayo Saka", "Arsenal", 3],
            ["Dominic Calvert-Lewin", "Leeds United", 3],
            ["Brian Brobbey", "Sunderland", 3]

        ],


        assistencias: [

            ["Pascal Groß", "Brighton & Hove Albion", 3],
            ["João Pedro", "Chelsea", 3],
            ["Cody Gakpo", "Liverpool", 3],
            ["Rayan Cherki", "Manchester City", 2],
            ["Bruno Fernandes", "Manchester United", 1],
            ["Cole Palmer", "Chelsea", 2],
            ["Phil Foden", "Manchester City", 2],
            ["Declan Rice", "Arsenal", 2],
            ["Semenyo", "Manchester City", 2],
            ["Leif Davis", "Ipswich Town", 2]

        ]

    },


    /* =================================================
       LALIGA
    ================================================= */

    laliga: {

        nome: "LaLiga",

        eyebrow:
            "LALIGA EA SPORTS • 2026/27",

        descricao:
            "Classificação, resultados e estatísticas da LaLiga em 23/09/2026.",


        tabela: [

            ["BAR", "FC Barcelona", 7, 7, 0, 0, 31, 7, 24, 21],

            ["ATM", "Atlético de Madrid", 7, 5, 1, 1, 16, 7, 9, 16],

            ["BET", "Real Betis", 7, 5, 1, 1, 9, 7, 2, 16],

            ["RMA", "Real Madrid", 7, 5, 0, 2, 18, 8, 10, 15],

            ["SEV", "Sevilla FC", 7, 4, 1, 2, 10, 9, 1, 13],

            ["ALA", "Deportivo Alavés", 7, 3, 2, 2, 11, 6, 5, 11],

            ["DEP", "RC Deportivo", 7, 2, 4, 1, 10, 8, 2, 10],

            ["RSO", "Real Sociedad", 7, 3, 1, 3, 9, 13, -4, 10],

            ["VIL", "Villarreal CF", 7, 2, 2, 3, 13, 12, 1, 8],

            ["ATH", "Athletic Club", 6, 2, 2, 2, 7, 6, 1, 8],

            ["GET", "Getafe CF", 7, 2, 2, 3, 4, 7, -3, 8],

            ["RAY", "Rayo Vallecano", 7, 2, 2, 3, 11, 16, -5, 8],

            ["OSA", "CA Osasuna", 7, 2, 2, 3, 6, 13, -7, 8],

            ["CEL", "Celta", 7, 1, 4, 2, 8, 6, 2, 7],

            ["ESP", "RCD Espanyol de Barcelona", 7, 2, 1, 4, 10, 10, 0, 7],

            ["RAC", "R. Racing Club", 7, 2, 1, 4, 11, 21, -10, 7],

            ["LEV", "Levante UD", 6, 1, 2, 3, 8, 12, -4, 5],

            ["ELC", "Elche CF", 7, 1, 2, 4, 11, 17, -6, 5],

            ["VAL", "Valencia CF", 7, 1, 1, 5, 4, 13, -9, 4],

            ["MGA", "Málaga CF", 7, 0, 3, 4, 3, 12, -9, 3]

        ],


        jogos: [

            {
                data: "18/09/2026",
                hora: "19:00",
                casa: "Espanyol",
                fora: "Elche",
                placar: "1 x 3",
                local: "RCDE Stadium",
                status: "ENCERRADO"
            },

            {
                data: "19/09/2026",
                hora: "19:00",
                casa: "Sevilla FC",
                fora: "FC Barcelona",
                placar: "1 x 3",
                local: "Ramón Sánchez-Pizjuán",
                status: "ENCERRADO"
            },

            {
                data: "19/09/2026",
                hora: "21:00",
                casa: "Celta",
                fora: "R. Racing Club",
                placar: "5 x 0",
                local: "Balaídos",
                status: "ENCERRADO"
            },

            {
                data: "20/09/2026",
                hora: "16:15",
                casa: "Atlético de Madrid",
                fora: "Real Madrid",
                placar: "2 x 1",
                local: "Riyadh Air Metropolitano",
                status: "ENCERRADO"
            },

            {
                data: "20/09/2026",
                hora: "18:30",
                casa: "CA Osasuna",
                fora: "Rayo Vallecano",
                placar: "1 x 1",
                local: "El Sadar",
                status: "ENCERRADO"
            }

        ],


        artilheiros: [

            ["Raphinha", "FC Barcelona", 12],
            ["Sergio Camello", "Rayo Vallecano", 7],
            ["Lamine Yamal", "FC Barcelona", 7],
            ["Kylian Mbappé", "Real Madrid", 7],
            ["Yassir Zabiri", "R. Racing Club", 6],
            ["Roberto Fernández", "RCD Espanyol de Barcelona", 6],
            ["Pierre-Emerick Aubameyang", "RC Deportivo", 5],
            ["Ferran Niño", "Elche CF", 5],
            ["Ante Budimir", "CA Osasuna", 5],
            ["Álex Baena", "Atlético de Madrid", 4],
            ["Lucas Boyé", "Deportivo Alavés", 4],
            ["Fermín López", "FC Barcelona", 4]

        ],


        assistencias: [

            ["Anthony Gordon", "FC Barcelona", 4],
            ["Javier Hernández", "RCD Espanyol de Barcelona", 4],
            ["Lamine Yamal", "FC Barcelona", 4],
            ["Job Nguono", "Real Sociedad", 3],
            ["Dani Olmo", "FC Barcelona", 3],
            ["Mariano Díaz", "Deportivo Alavés", 3],
            ["Ángel Pérez", "Deportivo Alavés", 3],
            ["Unai López", "Rayo Vallecano", 3],
            ["Vinícius Júnior", "Real Madrid", 2],
            ["Jude Bellingham", "Real Madrid", 2]

        ]

    }

};


/* =====================================================
   ESTADO
===================================================== */

let ligaAtual = "brasileirao";

let estatisticaAtual = "goals";


/* =====================================================
   ELEMENTOS
===================================================== */

const leagueEyebrow =
    document.getElementById("leagueEyebrow");


const heroText =
    document.getElementById("heroText");


const microStats =
    document.getElementById("microStats");


const spotlightTitle =
    document.getElementById("spotlightTitle");


const spotlightSub =
    document.getElementById("spotlightSub");


const spotlightNumber =
    document.getElementById("spotlightNumber");


const spotlightBars =
    document.getElementById("spotlightBars");


const nextGameBadge =
    document.getElementById("nextGameBadge");


const nextGame =
    document.getElementById("nextGame");


const matchesGrid =
    document.getElementById("matchesGrid");


const standingsTable =
    document.getElementById("standingsTable");


const podium =
    document.getElementById("podium");


const playersTable =
    document.getElementById("playersTable");


const playerSearch =
    document.getElementById("playerSearch");


const clubsGrid =
    document.getElementById("clubsGrid");


const clubSearch =
    document.getElementById("clubSearch");


const themeButton =
    document.getElementById("themeButton");


const mobileMenuButton =
    document.getElementById("mobileMenuButton");


const mobileMenu =
    document.getElementById("mobileMenu");


const siteDate =
    document.getElementById("siteDate");


/* =====================================================
   IDENTIDADE VISUAL
===================================================== */

function aplicarIdentidadeLiga() {

    document.body.classList.remove(
        "liga-brasileirao",
        "liga-premier",
        "liga-laliga"
    );


    document.body.classList.add(
        `liga-${ligaAtual}`
    );
}


/* =====================================================
   RENDER GERAL
===================================================== */

function renderizarTudo() {

    const liga =
        ligas[ligaAtual];


    aplicarIdentidadeLiga();


    renderizarLiga(liga);

    renderizarMicroStats(liga);

    renderizarDestaque(liga);

    renderizarJogos(liga);

    renderizarTabela(liga);

    renderizarPodio(liga);

    renderizarJogadores(liga);

    renderizarClubes(liga);
}


/* =====================================================
   HERO
===================================================== */

function renderizarLiga(liga) {

    if (leagueEyebrow) {

        leagueEyebrow.textContent =
            liga.eyebrow;
    }


    if (heroText) {

        heroText.textContent =
            liga.descricao;
    }
}


/* =====================================================
   MICRO STATS
===================================================== */

function renderizarMicroStats(liga) {

    if (!microStats) return;


    const lider =
        liga.tabela[0];


    const maiorSaldo =
        [...liga.tabela]
            .sort((a, b) => b[8] - a[8])[0];


    const maiorAtaque =
        [...liga.tabela]
            .sort((a, b) => b[6] - a[6])[0];


    microStats.innerHTML = `

        <div class="micro-card">

            <span>
                Líder
            </span>

            <strong>
                ${lider[1]}
            </strong>

            <small>
                ${lider[9]} pontos
            </small>

        </div>


        <div class="micro-card">

            <span>
                Clubes
            </span>

            <strong>
                ${liga.tabela.length}
            </strong>

            <small>
                equipes na liga
            </small>

        </div>


        <div class="micro-card">

            <span>
                Melhor ataque
            </span>

            <strong>
                ${maiorAtaque[1]}
            </strong>

            <small>
                ${maiorAtaque[6]} gols
            </small>

        </div>


        <div class="micro-card">

            <span>
                Melhor saldo
            </span>

            <strong>
                ${maiorSaldo[1]}
            </strong>

            <small>
                ${maiorSaldo[8] > 0 ? "+" : ""}
                ${maiorSaldo[8]}
            </small>

        </div>

    `;
}


/* =====================================================
   DESTAQUE
===================================================== */

function renderizarDestaque(liga) {

    if (
        !spotlightTitle ||
        !spotlightSub ||
        !spotlightNumber ||
        !spotlightBars
    ) {
        return;
    }


    const lider =
        liga.tabela[0];


    spotlightTitle.textContent =
        lider[1];


    spotlightSub.textContent =
        "Líder atual da competição";


    spotlightNumber.textContent =
        `${lider[9]} pts`;


    const topTimes =
        liga.tabela.slice(0, 5);


    const maiorPontos =
        topTimes[0][9];


    spotlightBars.innerHTML =
        topTimes.map((time, index) => {

            const largura =
                (
                    time[9] /
                    maiorPontos
                ) * 100;


            return `

                <div class="bar-row">

                    <span>
                        ${index + 1}.
                        ${time[1]}
                    </span>

                    <div class="bar">

                        <div
                            style="
                                width:${largura}%
                            "
                        ></div>

                    </div>

                    <strong>
                        ${time[9]}
                    </strong>

                </div>

            `;

        }).join("");
}


/* =====================================================
   JOGOS
===================================================== */

function renderizarJogos(liga) {

    if (!matchesGrid) return;


    matchesGrid.innerHTML =
        liga.jogos.map(jogo => `

            <article class="match-card">

                <div class="match-top">

                    <span>
                        ${jogo.data}
                    </span>

                    <span>
                        ${jogo.status}
                    </span>

                </div>


                <div class="match-teams">

                    <strong>
                        ${jogo.casa}
                    </strong>

                    <span>
                        ${jogo.placar}
                    </span>

                    <strong>
                        ${jogo.fora}
                    </strong>

                </div>


                <div class="match-bottom">

                    <span>
                        ${jogo.hora}
                    </span>

                    <span>
                        ${jogo.local}
                    </span>

                </div>

            </article>

        `).join("");


    if (nextGameBadge) {

        nextGameBadge.textContent =
            `${liga.jogos.length} resultados`;
    }


    if (
        nextGame &&
        liga.jogos.length > 0
    ) {

        const jogo =
            liga.jogos[0];


        nextGame.innerHTML = `

            <div>

                <small>
                    ${jogo.data}
                    •
                    ${jogo.hora}
                </small>

                <strong>
                    ${jogo.casa}
                    x
                    ${jogo.fora}
                </strong>

            </div>


            <span>
                ${jogo.placar}
            </span>

        `;
    }
}


/* =====================================================
   CLASSIFICAÇÃO
===================================================== */

function renderizarTabela(liga) {

    if (!standingsTable) return;


    standingsTable.innerHTML =
        liga.tabela.map((time, index) => {

            const [

                sigla,

                nome,

                jogos,

                vitorias,

                empates,

                derrotas,

                golsPro,

                golsContra,

                saldo,

                pontos

            ] = time;


            return `

                <tr>

                    <td>
                        ${index + 1}
                    </td>


                    <td>

                        <strong>
                            ${sigla}
                        </strong>

                        ${nome}

                    </td>


                    <td>
                        ${jogos}
                    </td>


                    <td>
                        ${vitorias}
                    </td>


                    <td>
                        ${empates}
                    </td>


                    <td>
                        ${derrotas}
                    </td>


                    <td>
                        ${golsPro}
                    </td>


                    <td>
                        ${golsContra}
                    </td>


                    <td>
                        ${saldo > 0 ? "+" : ""}
                        ${saldo}
                    </td>


                    <td>

                        <strong>
                            ${pontos}
                        </strong>

                    </td>

                </tr>

            `;

        }).join("");
}


/* =====================================================
   PÓDIO
===================================================== */

function renderizarPodio(liga) {

    if (!podium) return;


    const top3 =
        liga.tabela.slice(0, 3);


    podium.innerHTML =
        top3.map((time, index) => `

            <div class="podium-card">

                <span class="podium-position">

                    ${index + 1}º

                </span>


                <div>

                    <strong>
                        ${time[1]}
                    </strong>

                    <small>
                        ${time[9]} pontos
                    </small>

                </div>

            </div>

        `).join("");
}


/* =====================================================
   JOGADORES
===================================================== */

function renderizarJogadores(liga) {

    if (!playersTable) return;


    const dados =
        estatisticaAtual === "goals"
            ? liga.artilheiros
            : liga.assistencias;


    playersTable.innerHTML =
        dados.map((jogador, index) => `

            <tr>

                <td>
                    ${index + 1}
                </td>


                <td>
                    ${jogador[0]}
                </td>


                <td>
                    ${jogador[1]}
                </td>


                <td>

                    <strong>
                        ${jogador[2]}
                    </strong>

                </td>

            </tr>

        `).join("");
}


/* =====================================================
   CLUBES
===================================================== */

function renderizarClubes(liga) {

    if (!clubsGrid) return;


    clubsGrid.innerHTML =
        liga.tabela.map(time => {

            const [

                sigla,

                nome,

                jogos,

                vitorias,

                empates,

                derrotas,

                golsPro,

                golsContra,

                saldo,

                pontos

            ] = time;


            return `

                <article class="club-card">

                    <span class="club-code">
                        ${sigla}
                    </span>


                    <h3>
                        ${nome}
                    </h3>


                    <div class="club-info">

                        <span>
                            ${pontos} pts
                        </span>

                        <span>
                            ${jogos} jogos
                        </span>

                        <span>
                            GP ${golsPro}
                        </span>

                        <span>
                            GC ${golsContra}
                        </span>

                        <span>
                            SG
                            ${saldo > 0 ? "+" : ""}
                            ${saldo}
                        </span>

                    </div>

                </article>

            `;

        }).join("");
}


/* =====================================================
   TROCA DE LIGA
===================================================== */

document
    .querySelectorAll("[data-league]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                ligaAtual =
                    button.dataset.league;


                document
                    .querySelectorAll(
                        "[data-league]"
                    )
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });


                document
                    .querySelectorAll(
                        `[data-league="${ligaAtual}"]`
                    )
                    .forEach(btn => {

                        btn.classList.add(
                            "active"
                        );

                    });


                if (playerSearch) {

                    playerSearch.value = "";
                }


                if (clubSearch) {

                    clubSearch.value = "";
                }


                renderizarTudo();

            }
        );

    });


/* =====================================================
   TROCA DE ESTATÍSTICA
===================================================== */

document
    .querySelectorAll("[data-stat]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                estatisticaAtual =
                    button.dataset.stat;


                document
                    .querySelectorAll(
                        "[data-stat]"
                    )
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });


                button.classList.add(
                    "active"
                );


                renderizarJogadores(
                    ligas[ligaAtual]
                );

            }
        );

    });


/* =====================================================
   BUSCA DE JOGADORES
===================================================== */

if (playerSearch) {

    playerSearch.addEventListener(
        "input",
        () => {

            const termo =
                playerSearch.value
                    .toLowerCase()
                    .trim();


            document
                .querySelectorAll(
                    "#playersTable tr"
                )
                .forEach(row => {

                    const texto =
                        row.textContent
                            .toLowerCase();


                    row.style.display =
                        texto.includes(termo)
                            ? ""
                            : "none";

                });

        }
    );
}


/* =====================================================
   BUSCA DE CLUBES
===================================================== */

if (clubSearch) {

    clubSearch.addEventListener(
        "input",
        () => {

            const termo =
                clubSearch.value
                    .toLowerCase()
                    .trim();


            document
                .querySelectorAll(
                    ".club-card"
                )
                .forEach(card => {

                    const texto =
                        card.textContent
                            .toLowerCase();


                    card.style.display =
                        texto.includes(termo)
                            ? ""
                            : "none";

                });

        }
    );
}


/* =====================================================
   TEMA CLARO / ESCURO
===================================================== */

function atualizarBotaoTema() {

    if (!themeButton) return;


    const temaClaro =
        document.body.classList.contains(
            "light"
        );


    themeButton.textContent =
        temaClaro
            ? "☀️"
            : "🌙";


    themeButton.setAttribute(
        "aria-label",
        temaClaro
            ? "Mudar para tema escuro"
            : "Mudar para tema claro"
    );


    themeButton.setAttribute(
        "title",
        temaClaro
            ? "Mudar para tema escuro"
            : "Mudar para tema claro"
    );
}


function carregarTema() {

    const temaSalvo =
        localStorage.getItem(
            "placar-tema"
        );


    if (temaSalvo === "light") {

        document.body.classList.add(
            "light"
        );

    } else {

        document.body.classList.remove(
            "light"
        );
    }


    atualizarBotaoTema();
}


if (themeButton) {

    themeButton.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light"
            );


            const temaClaro =
                document.body.classList.contains(
                    "light"
                );


            localStorage.setItem(
                "placar-tema",
                temaClaro
                    ? "light"
                    : "dark"
            );


            atualizarBotaoTema();

        }
    );
}


/* =====================================================
   MENU MOBILE
===================================================== */

if (
    mobileMenuButton &&
    mobileMenu
) {

    mobileMenuButton.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle(
                "open"
            );

        }
    );

}


/* =====================================================
   NAVEGAÇÃO
===================================================== */

const botoesNavegacao =
    document.querySelectorAll(
        "[data-section]"
    );


function atualizarNavegacaoAtiva(
    sectionId
) {

    botoesNavegacao.forEach(
        button => {

            const ativo =
                button.dataset.section ===
                sectionId;


            button.classList.toggle(
                "active",
                ativo
            );

        }
    );
}


botoesNavegacao.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const sectionId =
                    button.dataset.section;


                const section =
                    document.getElementById(
                        sectionId
                    );


                if (!section) return;


                atualizarNavegacaoAtiva(
                    sectionId
                );


                section.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });


                if (mobileMenu) {

                    mobileMenu.classList.remove(
                        "open"
                    );

                }

            }
        );

    }
);


/* =====================================================
   ATUALIZA ABA CONFORME O SCROLL
===================================================== */

const secoes =
    document.querySelectorAll(
        "main section[id]"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            atualizarNavegacaoAtiva(
                                entry.target.id
                            );

                        }

                    }
                );

            },
            {
                rootMargin:
                    "-110px 0px -55% 0px",

                threshold:
                    0
            }
        );


    secoes.forEach(
        section => {

            observer.observe(section);

        }
    );

}


/* =====================================================
   DATA DO SITE
===================================================== */

if (siteDate) {

    siteDate.textContent =
        DATA_ATUALIZACAO;
}


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

carregarTema();

renderizarTudo();

atualizarNavegacaoAtiva(
    "inicio"
);