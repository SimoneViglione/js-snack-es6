const squadre = [
  { nome: "Quinzano d'Oglio FC", punti: 0, falli: 0 },
  { nome: "AC Quassolo", punti: 0, falli: 0 },
  { nome: "AS Quartucciu", punti: 0, falli: 0 },
  { nome: "FC Quargnento", punti: 0, falli: 0 },
];

function numeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 0; i < squadre.length; i++) {
  squadre[i].punti = numeroCasuale(0, 100);
  squadre[i].falli = numeroCasuale(0, 50);
}

console.log(squadre);

const squadreFalli = squadre.map(({ nome, falli }) => ({ nome, falli }));

console.log(squadreFalli);
