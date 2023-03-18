const getData = new Promise((resolve, reject) => {
    resolve(56667);
    reject('No Data available')
})
getData
.then(data => console.log(data + 22))
.catch(err => console.error('Err:',err))
;