function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Terminé après " + ms + " ms");
        }, ms);
    });
}

wait(1000)
    .then((msg) => {
        console.log(msg);

        return 1001
    }).then(console.log)


async function test() {
    const msg = await wait(1000);
    console.log(msg);
}

test();

const timeOut = setTimeout(() => {
    console.log("settimeout")
}, 1000)

console.log("ici")