/*
  Atualização de dados no dia 23/09/2026
  - Brasileirão Série A: Rodada 28 concluída, atualização de artilheiros e assistências.
  - Premier League: Rodada 5 concluída, atualização de artilheiros e assistências.
  - La  Liga: Rodada 7 concluída, atualização de artilheiros e assistências.
*/

const SNAPSHOT_DATE = "23/09/2026";

const LEAGUES = {
  brasileirao: {
    id: "brasileirao",
    name: "Brasileirão Série A",
    short: "Brasileirão",
    season: "2026",
    country: "Brasil",
    flag: "🇧🇷",
    theme: "brasileirao",
    apiLeagueId: 71,
    eyebrow: "BRASILEIRÃO SÉRIE A · 2026",
    heroText: "Acompanhe a Série A com tabela, jogos, artilharia, assistências e indicadores de desempenho em uma interface única.",
    updatedAt: "23/09/2026 08:00",
    sources: ["FootCas/OpenFootball", "365Scores", "API-Football"],
    zones: [
      { from: 1, to: 6, label: "Libertadores", tone: "green" },
      { from: 7, to: 12, label: "Sul-Americana", tone: "cyan" },
      { from: 17, to: 20, label: "Rebaixamento", tone: "red" }
    ],
    standings: [
      ["FLA","Flamengo",28,18,6,4,55,23,32,60,"VVVVV"],
      ["PAL","Palmeiras",28,16,9,3,47,21,26,57,"VEEVE"],
      ["CAP","Athletico-PR",28,14,7,7,43,32,11,49,"VEDDE"],
      ["FLU","Fluminense",28,13,9,6,44,36,8,48,"VEV DV".replace(/\s/g,"")],
      ["BAH","Bahia",28,12,10,6,43,35,8,46,"DVVVV"],
      ["CRU","Cruzeiro",28,13,6,9,42,40,2,45,"VDVDV"],
      ["CAM","Atlético-MG",27,11,7,9,36,32,4,40,"EVDVE"],
      ["SAN","Santos",27,10,8,9,41,40,1,38,"EVVVV"],
      ["CFC","Coritiba",28,10,8,10,37,43,-6,38,"V VDED".replace(/\s/g,"")],
      ["RBB","Red Bull Bragantino",27,10,6,11,33,31,2,36,"VDDED"],
      ["SAO","São Paulo",27,10,6,11,32,30,2,36,"DVVDV"],
      ["BOT","Botafogo",28,9,8,11,41,45,-4,35,"DEEV D".replace(/\s/g,"")],
      ["VIT","Vitória",28,9,6,13,28,42,-14,33,"DDVED"],
      ["COR","Corinthians",28,8,8,12,29,32,-3,32,"DDDDD"],
      ["MIR","Mirassol",28,8,8,12,33,42,-9,32,"EDVEV"],
      ["VAS","Vasco",27,8,7,12,34,41,-7,31,"DVDVV"],
      ["GRE","Grêmio",28,7,8,13,30,38,-8,29,"VDDDE"],
      ["INT","Internacional",28,6,10,12,30,36,-6,28,"EDDVD"],
      ["REM","Remo",28,5,8,15,32,47,-15,23,"DDDDD"],
      ["CHA","Chapecoense",27,3,9,15,29,53,-24,18,"VDVDE"]
    ],
    scorers: [
      ["K. Viveros","Athletico-PR",18,26,3],
      ["Pedro","Flamengo",16,28,5],
      ["Gabriel Barbosa","Santos",11,19,3],
      ["Carlos Vinícius","Grêmio",10,26,1],
      ["Danilo Santos","Botafogo",9,20,2],
      ["John Kennedy","Fluminense",9,18,1],
      ["Luciano Juba","Bahia",9,23,1],
      ["Samuel Lino","Flamengo",9,27,7],
      ["Matheus Pereira","Cruzeiro",8,24,4],
      ["Breno Lopes","Coritiba",8,24,1]
    ],
    assists: [
      ["Josué","Coritiba",11,25],
      ["Andreas Pereira","Palmeiras",10,27],
      ["Samuel Lino","Flamengo",7,27],
      ["Jorge Carrascal","Flamengo",7,21],
      ["Rodrigo Garro","Corinthians",6,26],
      ["Pedro","Flamengo",5,28],
      ["Igor Formiga","Mirassol",5,25],
      ["L. Acosta","Fluminense",5,23],
      ["Erick","Vitória",5,26],
      ["João Cruz","Athletico-PR",5,21]
    ],
    matches: [
      {status:"finished", date:"20/09", time:"16:00", home:"São Paulo", away:"Internacional", hs:1, as:0, venue:"Morumbis"},
      {status:"finished", date:"20/09", time:"16:00", home:"Grêmio", away:"Palmeiras", hs:0, as:0, venue:"Arena do Grêmio"},
      {status:"finished", date:"20/09", time:"16:00", home:"Vitória", away:"Cruzeiro", hs:1, as:3, venue:"Barradão"},
      {status:"finished", date:"20/09", time:"16:00", home:"Corinthians", away:"Fluminense", hs:1, as:3, venue:"Neo Química Arena"},
      {status:"finished", date:"20/09", time:"16:00", home:"Flamengo", away:"Bragantino", hs:2, as:1, venue:"Maracanã"},
      {status:"finished", date:"20/09", time:"18:30", home:"Athletico-PR", away:"Bahia", hs:2, as:1, venue:"Ligga Arena"},
      {status:"finished", date:"19/09", time:"18:30", home:"Atlético-MG", away:"Chapecoense", hs:1, as:1, venue:"Arena MRV"},
      {status:"finished", date:"19/09", time:"20:30", home:"Mirassol", away:"Botafogo", hs:2, as:0, venue:"Maião"}
    ]
  },

  premier: {
    id: "premier",
    name: "Premier League",
    short: "Premier League",
    season: "2026/27",
    country: "Inglaterra",
    flag: "🏴",
    theme: "premier",
    apiLeagueId: 39,
    eyebrow: "PREMIER LEAGUE · 2026/27",
    heroText: "A elite inglesa com classificação, forma recente, artilharia, assistências e sinais de jogo em uma leitura rápida.",
    updatedAt: "23/09/2026 08:00",
    sources: ["Football.fm", "Football365", "PremierLeague.com"],
    zones: [
      { from: 1, to: 4, label: "Champions League", tone: "green" },
      { from: 5, to: 7, label: "Europa League / Conference", tone: "cyan" },
      { from: 18, to: 20, label: "Rebaixamento", tone: "red" }
    ],
    standings: [
      ["MCI","Manchester City",5,5,0,0,13,5,8,15,""],
      ["ARS","Arsenal",5,4,0,1,8,4,4,12,""],
      ["BRI","Brighton & Hove Albion",5,3,1,1,16,5,11,10,""],
      ["BRE","Brentford",5,2,3,0,10,4,6,9,""],
      ["LEE","Leeds United",5,2,3,0,7,3,4,9,""],
      ["LIV","Liverpool",5,2,3,0,7,4,3,9,""],
      ["EVE","Everton",5,2,3,0,6,3,3,9,""],
      ["HUL","Hull City",5,2,2,1,6,4,2,8,""],
      ["NEW","Newcastle United",5,2,2,1,9,9,0,8,""],
      ["CHE","Chelsea",5,2,1,2,10,12,-2,7,""],
      ["IPS","Ipswich Town",5,2,0,3,7,11,-4,6,""],
      ["MUN","Manchester United",5,1,2,2,7,7,0,5,""],
      ["NFO","Nottingham Forest",5,1,2,2,4,5,-1,5,""],
      ["SUN","Sunderland",5,1,1,3,3,7,-4,4,""],
      ["CRY","Crystal Palace",5,1,1,3,6,11,-5,4,""],
      ["AVL","Aston Villa",5,1,1,3,4,9,-5,4,""],
      ["BOU","Bournemouth",5,0,3,2,6,8,-2,3,""],
      ["COV","Coventry City",5,1,0,4,1,10,-9,3,""],
      ["FUL","Fulham",5,0,2,3,4,7,-3,2,""],
      ["TOT","Tottenham Hotspur",5,0,2,3,2,8,-6,2,""]
    ],
    scorers: [
      ["Erling Haaland","Manchester City",5,5,0],
      ["Alexander Isak","Liverpool",4,5,1],
      ["Bruno Fernandes","Manchester United",3,5,1],
      ["Bukayo Saka","Arsenal",3,5,2],
      ["Kevin Schade","Brentford",3,5,0],
      ["João Pedro","Chelsea",3,4,3],
      ["Morgan Rogers","Chelsea",3,5,1],
      ["Marcus Tavernier","Bournemouth",3,5,0],
      ["Dominic Calvert-Lewin","Leeds United",3,5,1],
      ["Brian Brobbey","Sunderland",3,5,0],
      ["Rayan Cherki","Manchester City",3,5,2],
      ["Pascal Groß","Brighton",3,5,3]
    ],
    assists: [
      ["Cody Gakpo","Liverpool",3,5],
      ["Daichi Kamada","Crystal Palace",3,5],
      ["Evanilson","Bournemouth",3,5],
      ["João Pedro","Chelsea",3,4],
      ["Pascal Groß","Brighton",3,5],
      ["Antoine Semenyo","Manchester City",3,5],
      ["Joško Gvardiol","Manchester City",3,5],
      ["Julio Enciso","Ipswich Town",3,5],
      ["Phil Foden","Manchester City",2,4],
      ["Declan Rice","Arsenal",2,5],
      ["Riccardo Calafiori","Arsenal",2,5],
      ["Morgan Gibbs-White","Nottingham Forest",2,5]
    ],
    matches: [
      {status:"finished", date:"20/09", time:"15:00", home:"Manchester City", away:"Sunderland", hs:5, as:3, venue:"Etihad Stadium"},
      {status:"finished", date:"19/09", time:"15:00", home:"Brighton", away:"Arsenal", hs:3, as:0, venue:"Amex Stadium"},
      {status:"finished", date:"20/09", time:"16:00", home:"Manchester United", away:"Fulham", hs:1, as:1, venue:"Old Trafford"},
      {status:"finished", date:"20/09", time:"16:00", home:"Liverpool", away:"Bournemouth", hs:1, as:0, venue:"Anfield"},
      {status:"finished", date:"20/09", time:"16:00", home:"Leeds", away:"Crystal Palace", hs:0, as:0, venue:"Elland Road"}
    ]
  },

  laliga: {
    id: "laliga",
    name: "La Liga",
    short: "La Liga",
    season: "2026/27",
    country: "Espanha",
    flag: "🇪🇸",
    theme: "laliga",
    apiLeagueId: 140,
    eyebrow: "LALIGA EA SPORTS · 2026/27",
    heroText: "A Primera División espanhola com tabela completa, principais goleadores, assistências e leitura rápida dos clubes.",
    updatedAt: "23/09/2026 08:00",
    sources: ["LALIGA.com", "VI", "Sports Mole"],
    zones: [
      { from: 1, to: 4, label: "Champions League", tone: "green" },
      { from: 5, to: 6, label: "Europa", tone: "cyan" },
      { from: 18, to: 20, label: "Rebaixamento", tone: "red" }
    ],
    standings: [
      ["BAR","FC Barcelona",7,7,0,0,31,7,24,21,""],
      ["ATM","Atlético de Madrid",7,5,1,1,16,7,9,16,""],
      ["BET","Real Betis",7,5,1,1,9,7,2,16,""],
      ["RMA","Real Madrid",7,5,0,2,18,8,10,15,""],
      ["SEV","Sevilla FC",7,4,1,2,10,9,1,13,""],
      ["ALA","Deportivo Alavés",7,3,2,2,11,6,5,11,""],
      ["DEP","RC Deportivo",7,2,4,1,10,8,2,10,""],
      ["RSO","Real Sociedad",7,3,1,3,9,13,-4,10,""],
      ["VIL","Villarreal CF",7,2,2,3,13,12,1,8,""],
      ["ATH","Athletic Club",6,2,2,2,7,6,1,8,""],
      ["GET","Getafe CF",7,2,2,3,4,7,-3,8,""],
      ["RAY","Rayo Vallecano",7,2,2,3,11,16,-5,8,""],
      ["OSA","CA Osasuna",7,2,2,3,6,13,-7,8,""],
      ["CEL","Celta",7,1,4,2,8,6,2,7,""],
      ["ESP","RCD Espanyol",7,2,1,4,10,10,0,7,""],
      ["RAC","Racing Santander",7,2,1,4,11,21,-10,7,""],
      ["LEV","Levante UD",6,1,2,3,8,12,-4,5,""],
      ["ELC","Elche CF",7,1,2,4,11,17,-6,5,""],
      ["VAL","Valencia CF",7,1,1,5,4,13,-9,4,""],
      ["MGA","Málaga CF",7,0,3,4,3,12,-9,3,""]
    ],
    scorers: [
      ["Raphinha","FC Barcelona",12,7,3],
      ["Sergio Camello","Rayo Vallecano",7,7,1],
      ["Kylian Mbappé","Real Madrid",7,7,2],
      ["Lamine Yamal","FC Barcelona",7,7,4],
      ["Roberto Fernández","Espanyol",6,7,0],
      ["Yassir Zabiri","Racing Santander",6,7,0],
      ["Pierre-Emerick Aubameyang","RC Deportivo",5,7,2],
      ["Ante Budimir","Osasuna",5,7,0],
      ["Fer Niño","Elche CF",5,7,0],
      ["Álex Baena","Atlético de Madrid",4,7,1],
      ["Lucas Boyé","Alavés",4,7,0],
      ["Fermín López","FC Barcelona",4,6,2]
    ],
    assists: [
      ["Anthony Gordon","FC Barcelona",4,7],
      ["Javi Hernández","Espanyol",4,7],
      ["Lamine Yamal","FC Barcelona",4,7],
      ["Raphinha","FC Barcelona",3,7],
      ["Mariano Díaz","Alavés",3,7],
      ["Unai López","Rayo Vallecano",3,7],
      ["Alberto Moleiro","Villarreal",3,7],
      ["Tete Morente","Elche CF",3,7],
      ["Job Ochieng","Real Sociedad",3,7],
      ["Dani Olmo","FC Barcelona",3,7],
      ["Vinícius Júnior","Real Madrid",3,7],
      ["Ángel Pérez Hidalgo","Alavés",3,7]
    ],
    matches: [
      {status:"finished", date:"20/09", time:"14:00", home:"Getafe", away:"Málaga", hs:1, as:0, venue:"Coliseum"},
      {status:"finished", date:"20/09", time:"16:00", home:"Atlético de Madrid", away:"Real Madrid", hs:2, as:1, venue:"Metropolitano"},
      {status:"finished", date:"20/09", time:"16:00", home:"Deportivo", away:"Real Betis", hs:1, as:1, venue:"Riazor"},
      {status:"finished", date:"20/09", time:"18:30", home:"Villarreal", away:"Levante", hs:3, as:1, venue:"La Cerámica"},
      {status:"finished", date:"20/09", time:"20:45", home:"Valencia", away:"Real Sociedad", hs:2, as:3, venue:"Mestalla"}
    ]
  }
};
