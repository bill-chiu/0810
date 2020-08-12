function longTimeWork(workFine = true, errorMessage = "test45645") {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            (workFine) ? resolve(201) : reject(errorMessage);
        }, 1000);
    })
}

function usingLongTimeWork() {
    longTimeWork(false, "test111")  // try true/false
    .then(function (e) {
        console.log('1');
        console.log(e);
    })
    .catch(function (e) {
        console.log('2');
        console.log(e);
    })
}

usingLongTimeWork();
