const myPromise = new Promise((resolve, reject) => {
    console.log('Promise created')

    // let num = 0
    // if (num === 0) {
        resolve('로직 수행 성공!')
    // } else {
        reject('로직 수행 실패!')
    // }
})

myPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})