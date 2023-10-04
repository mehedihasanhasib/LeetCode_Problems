function sleep() {

    //let x = false;
    return new Promise((resolve, reject) => {

        //resolve("Hello World");
        reject("Bye World");

    })
}


sleep().then((msg) => {
    console.log(msg);
}).catch((msg) => {
    console.log(msg);
})
