let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let length = 100;
readline.question('Enter choice 1.Feet to inch 2. feet to meter 3. inch to feet 4. meter to feet ', (number) => {
    switch (Number (number)) {
        case 1: console.log("feet to inch: " + length * 12);
            break;
        case 2: console.log('feet to meter: ' + length / 3.281);
            break;
        case 3: console.log("inch to feet: " + length / 12);
            break;
        case 4: console.log("meter to feet: " + length * 3.281);
            break;
    }
    readline.close();
});