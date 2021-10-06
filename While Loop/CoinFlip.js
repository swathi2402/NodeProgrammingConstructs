let headWin = 0;
let tailWin = 0;
while(headWin != 11 && tailWin != 11){
    let flip = Math.random();
    if(flip > 0.5)
        headWin++;
    else
        tailWin++;
}
if(tailWin == 11)
    console.log("Tails won");
else if (headWin == 11)
    console.log("Heads won");