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

console.log(`L'élément saisi est : ${Mot}`);
