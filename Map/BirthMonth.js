function birthDate(start, end) {
    var date = new Date(+start + Math.random() * (end - start));
    return date;
}

let persons = new Map();
let months = new Array();

for(let i = 1; i <= 50; i++) {
    persons.set(i, birthDate(new Date('1992-01-01'), new Date('1993-12-31')));
}

for(let i = 1; i <= 50; i++) {
    let date1 = persons.get(i);
    for(let j = 1; j <= 50; j++) {
        if(i != j) {
            let date2 = persons.get(j);
            if(date1.getMonth() == date2.getMonth()) {
                months.push([i, j]);
            }
        }
    }
}
console.log(months);