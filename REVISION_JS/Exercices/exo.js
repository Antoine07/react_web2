
console.log("hello")

let a = 1;
let b = 2;

console.log(a, b, a + b);

a = 10;
console.log(a, b, a + b);

const KEY_API = 123; // bloque l'assignation 
// KEY_API = 321; on ne peut pas changer sa valeur
const numbers = [1, 2, 3];
// numbers = [1,2,3,4]; // constante
numbers.push(4)
console.log(numbers)

const utilisateur = { nom: "Ada", age: 28 };
utilisateur.age = 29;    // OK (on modifie le contenu, pas la variable elle-même)
console.log(utilisateur);

let x;
console.log(typeof x);

x = 1;
console.log(typeof x);

x = "bonjour";
console.log(typeof x);

console.log(0.1 + 0.2);
console.log(Math.round((0.1 + 0.2) * 10) / 10);

// Caster => force le type 
console.log(parseFloat("12.3"))
console.log(parseInt("12.3"))

console.log("" == true)
console.log(0 == true)
console.log(null == true)
console.log(!"", "ICI JE FAIS UN TEST")

console.log(" " ? "yes" : "no");

let task = "Manger ce soir";

const tasks = []

if (!task.trim()) {
    console.log("aucun ajout");
} else {
    tasks.push(task);
    console.log("ajout réussi de la task", task)
}

console.log(tasks);

function addTask(task) {
    const tasks = [];
    // error first 
    // si la chaine de caractères est vide !"" c'est true
    // dans le cas contraire !"Manger ce soir" c'est false
    if (!task.trim()) {
        console.log("aucun ajout")
        return; // tu sors de la fonction donc le code suit ne sera pas fait 
    }

    tasks.push(task);
    console.log("ajout réussi de la task", task);

    return tasks;
}
console.log("-------------");
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // si JS voit un false en premier il ne fait pas l'évaluation de la suite 
console.log(false && false); // false stop 


console.log("" && "bonjour"); // évaluation passive 


function App(status = true){
    const task = "<p>Quand je vois mes étudiants je dois leurs dire bonjour</p>";

    return (
        status && task
    );
}

console.log(App());
console.log(App(false));