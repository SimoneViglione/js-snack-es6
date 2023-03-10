const biciclette = [
    {
        'nome' : 'van rysel',
        'peso' : '8',
    },
    {
        'nome' : 'gravel',
        'peso' : '7',
    },
    {
        'nome' : 'triban',
        'peso' : '9',
    },
    {
        'nome' : 'prowheel',
        'peso' : '8.5',
    },
]

let biciclettaLeggera = biciclette[0];

const bici = document.getElementById("bici");

for (let i = 1; i < biciclette.length; i++) {
  const bicicletta = biciclette[i];
  if (bicicletta.peso < biciclettaLeggera.peso) {
    biciclettaLeggera = bicicletta;
  }
}

const { nome } = biciclettaLeggera;

const biciDom = `<p>La bicicletta più leggera è ${nome}</p>`;

bici.innerHTML += biciDom;
