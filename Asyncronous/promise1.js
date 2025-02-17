function getUsers(isOffline) {

    return new Promise((resolve, reject) => {

        //simulate network delay
        setTimeout(() => {
            const user = ['Jhon', 'Jack', 'Maldiva']

            if (isOffline) {
                reject(new Error("tidak bisa mendapatkan user karena jaringan"))
            }

            resolve(user)
        }, 3000);
    
    })
}

getUsers(true)
    .then(user => console.log(user))
    .catch(err => console.log(err.message))