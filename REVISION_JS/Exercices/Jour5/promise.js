
// const timeout = setTimeout(() => {
//     console.log("settimeout")
// }, 1000)

// console.log('start')

// Promesse 

function wait(ms) {
    return new Promise((resolve, reject) => {
        if (false) {
            reject("error")
        } else {
            setTimeout(() => {
                resolve(`Un petit message ${ms} `)
            }, ms)
        }
    })
}

// console.log(wait(500))
// // try catch
// wait(500).then(res => {
//     console.log(res)
//     return 100001
// }).catch(error => {
//     console.log(error)
// })

// async await 

async function test(){
    const a = await wait(500)
    console.log(a)
    console.log("UN")
    const b = await wait(500)
    console.log(b)
    console.log("DEUX")
}


test()
console.log("ici je peux m'exécuter")