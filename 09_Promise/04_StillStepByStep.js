function happy(data, timeCount) {
    return new Promise( function (resolve, reject) {
        setTimeout(function () {
            resolve(data);
        }, timeCount)
    })
}

function sad(data, timeCount) {
    return new Promise( function (resolve, reject) {
        setTimeout(function () {
            resolve(data);
        }, timeCount)
    })
}


async function living() {
    var total = 0;
    var Promise1 = happy(200, 2000);
    // var result1=await Promise1;

    var Promise2 = sad(-100, 3000);

    let [result1,result2]=
    await Promise.all([Promise1,Promise2]);
    // var result2 = await sad(-100, 3000);
    // console.log(result1);
    // console.log(result2);


    total = result1 + result2;
    console.log("total:", total);
}

living();


