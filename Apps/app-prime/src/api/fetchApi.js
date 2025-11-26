
import { isPrime } from "@/services/isPrime";
// Fonction utilitaire qui vérifie si un nombre est premier

// Tableau local contenant quelques nombres premiers
let primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
    31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97
];

// -------------------------------------------------------
// 1) GÉNÉRATEUR ASYNCHRONE : STREAM DE DONNÉES
// -------------------------------------------------------
export async function* fetchAPI(ms = 500, signal, head) {

    // On récupère les nombres premiers à partir d'un index donné
    const newPrimes = primes.slice(head);
    let i = 0

    // On parcourt les nouveaux nombres
    for (const n of newPrimes) {

        // On peut annuler l'opération grâce à AbortController
        if (signal?.aborted) return;

        // On simule un délai réseau (ex: 500 ms entre chaque envoi)
        await new Promise((resolve) => setTimeout(resolve, ms));

        // Si l'utilisateur annule pendant le délai :
        if (signal?.aborted) return;

        const halted = i === newPrimes.length - 1;
        i++

        // On renvoie un élément du flux *un par un*
        // Avec validation via le schéma numberSchema

        yield { number: n, halted }
    }
}

// -------------------------------------------------------
// 2) AJOUT SYNCHRONE DANS LA LISTE LOCALE
// -------------------------------------------------------
export function addPrimeSync(num) {
    const number = Number(num);

    // On vérifie si le nombre n'est pas déjà dans la liste
    if (!primes.includes(number)) {

        // Ajout + tri du tableau, de manière immuable
        primes = [...primes, number].sort((a, b) => a - b);

        console.log("Nouveau tableau :", primes);
    } else {
        console.log("Déjà présent");
    }
}


// -------------------------------------------------------
// 3) FAUSSE API : AJOUT AVEC SIMULATION D’APPEL SERVEUR
// -------------------------------------------------------
export async function fakeApiAddPrime(num) {
    const number = Number(num);

    // On simule un délai réseau, parfois plus long
    await new Promise(r => setTimeout(r, 500 + Math.random() * 700));

    // 1) Vérification que le nombre est premier
    if (!isPrime(number)) {
        return {
            ok: false,
            reason: "not_prime",
            message: `Le nombre ${number} n'est pas premier.`,
        };
    }

    // 2) Vérification qu'il n'est pas déjà dans la liste
    if (primes.includes(number)) {
        return {
            ok: false,
            reason: "already_exists",
            message: `Le nombre ${number} est déjà dans la liste.`,
        };
    }

    // 3) Ajout réel dans la liste locale, trié
    primes = [...primes, number].sort((a, b) => a - b);

    // Réponse style API REST
    return {
        ok: true,
        prime: number,
        primes,
        message: `Le nombre ${number} a été ajouté.`,
        serverTime: Date.now(),
    };
}

// -------------------------------------------------------
// 4) FAUSSE API : RETOURNER TOUTES LES VALEURS primes
// -------------------------------------------------------
export async function fakeAllPrimes() {
    // Simulation d’un petit délai réseau
    await new Promise(r => setTimeout(r, 300));

    return {
        ok: true,
        primes,
        count: primes.length,
        message: "Liste complète des nombres premiers.",
        serverTime: Date.now(),
    };
}