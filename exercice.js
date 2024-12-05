const ages = [12, 15, 23, 25, 18, 8, 30, 16, 22, 17, 29, 19, 20];

//1 Utilisez la méthode adaptées pour trouver les majeurs (+ de 18 ans)
//2 Calculez l'age moyen
//3 Calculer la somme des ages

const majeurs = ages.filter(a => a > 17);
console.log(majeurs); // Affiche les âges supérieurs à 18

// Calculer l'age moyen
const somme = ages.reduce((acc, age) => acc + age, 0);
const ageMoyen = somme / ages.length;
console.log("ageMoyen:",ageMoyen.toFixed(2));

const sommeAges = ages.reduce((acc, age) => acc + age, 0);
console.log(sommeAges);

// excercice 2
const word = ["Angular", "Typescript", "Python", "Go", "Rust", "Php", "Java", "C#", "C++", "ReactJS", "MySQL"];

//1 Trouvez les mots de plus de 4 lettres.
//2 Comptez le nombre total de lettres
//3 Afficher chaque mot
//4 Afficher les mots commençant par la lettre P

const longWords = word.filter(i => i.length > 4);
console.log(longWords); // Affiche les mots de plus de 4 lettres
 const totalLetters = longWords.reduce((acc, curr) => acc + curr.length, 0);
// acc + curr.length : l'accumulateur acc ajoute la longueur de chaque mot curr.
console.log("Nombre total de lettre:",totalLetters); // Affiche le nombre total de lettres
// 3. Afficher chaque mot
word.forEach(w => console.log("Mot:", w)); 
//forEach() pour afficher chaque mot dans le tableau, un à un.
// 4. Afficher les mots commençant par 'P'
const wordsWithP = word.filter(w => w[0] === 'P');
console.log("Mots commençant par P:", wordsWithP);

//  exercice 3

const articles = [
    { name: "Pull", price: 35, stock: 90 },
    { name: "Chaussettes", price: 5, stock: 950 },
    { name: "Bonnet", price: 25, stock: 100 },
    { name: "Sweat", price: 45, stock: 50 },
    { name: "Jean", price: 95, stock: 20 },
    { name: "Jogging", price: 48.5, stock: 230 },
    { name: "T-shirt", price: 15, stock: 150 },
    { name: "Cardigan", price: 75, stock: 9 },
    { name: "Veste", price: 235, stock: 800 }
];

//1 Afficher les articles en rupture de stock (moins de 30 unités)
//2 Valeur totale du stock
//3 Afficher les produits à moins de 30€

// 1. Afficher les articles en rupture de stock (moins de 30 unités)
const Stock = articles.filter(article => article.stock < 30);
console.log("Articles en rupture de stock:", Stock);

// 2. Calculer la valeur totale du stock
const totalStock = articles.reduce((total, article) => total + article.price * article.stock, 0);
console.log("Valeur totale du stock:", totalStock);

// 3. Afficher les produits à moins de 30
const cheap = articles.filter(article => article.price < 30);
console.log("Produits à moins de 30€:", cheap);


// excercice 4

const weather = [
    { day: "Lundi", temperature: 20, rain: true },
    { day: "Mardi", temperature: 25, rain: true },
    { day: "Mercredi", temperature: 35, rain: false },
    { day: "Jeudi", temperature: 30, rain: true },
    { day: "Vendredi", temperature: 20, rain: false },
    { day: "Samedi", temperature: 30, rain: false },
    { day: "Dimanche", temperature: 10, rain: true },
]

//1 Lister les jours de pluie
//2 Température moyenne des jours sans pluies
//3 Afficher les jours et les températures quand ces dernières sont au dessus de 20
//4 Afficher le type de jours (semaine ou weekend)

for (let i = 0; i < weather.length; i++) {
    if (weather[i].day === "samedi" || weather[i].day ==="dimanche") {
        console.log(weather[i].day + " : weekend");
    } else {
        console.log(weather[i].day + " : semaine");
    }
    }
    
    // exercice 5

    const marks = [
    { name: "Alice", notes: [12, 17, 9, 14, 19, 6, 10, 11] },
    { name: "Alain", notes: [2, 17, 19, 4, 19, 16, 0, 1] },
    { name: "Oussama", notes: [1, 17, 19, 14, 19, 16, 13, 20] },
    { name: "Sabrina", notes: [11, 7, 9, 4, 19, 16, 1, 11] },
    { name: "Nawelle", notes: [3, 1, 9, 14, 19, 16, 0, 1] },
    { name: "Julien", notes: [1, 7, 9, 4, 13, 6, 10, 15] },
    { name: "Brice", notes: [18, 19, 14, 13, 9, 16, 20, 17] },
];

//1 Calculer la moyenne de chaque élève
//2 Trouver les élèves ayant au moins une note > 15
//3 Afficher les noms des élèves
//4 Trouver les élèves qui ont la moyenne

for (let i = 0; i < marks.length; i++) {
     console.log(i, marks[i].name)
}
 


