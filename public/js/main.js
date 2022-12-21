const stipé = ["hello", "there", "gen", "Z", "frite"];
for (let i = 0; i < stipé.length; i++) {
    if (stipé[i].length < 4) {
        continue;
    }
    console.log(stipé[i]);
}

const stipé2 = ["hello", "there", "gen", "Z", "frite"];

let Mot;
do {
    Mot = prompt("Saisissez un élément du tableau :");
} while (!stipé2.includes(Mot) || !Mot.includes("a"));

console.log(`je sapel groot : ${Mot}`);


const nombre = [];


for (let i = 0; i < 100; i++) {
    nombre.push(Math.floor(Math.random() * 100));
}

for (let i = 0; i < nombre.length; i++) {
    if (nombre[i] < 50) {
        console.log(`c'est la fin des harico ${i}`);
        break;
    }
    console.log(numbers[i]);
}

const nombre2 = [];


for (let i = 0; i < 100; i++) {
    nombre2.push(Math.floor(Math.random() * 100));
}

for (let i = 0; i < nombre2.length; i++) {
    if (i == 100) {
        console.log(`une biere offerte au héro qui a arreté la boucle ${i} merci au champion numero: ${nombre2[i]}`);
        break;
    }
    console.log(numbers[i]);
}