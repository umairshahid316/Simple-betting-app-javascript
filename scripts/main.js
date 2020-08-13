$('#bet').on('submit',(e) => {
    e.preventDefault(e);
    let name=$('input[name=bettor]').val();
    let value=$('input[name=guess]').val();
    addBet({name, value});
    
    $('input[name=bettor]').val("");
    $('input[name=guess]').val("");
    
    
    })
    
    $('#winner').click(() => {
        let winner=getWinner();
        alert("winner is: "+winner.name +" "+winner.value)
    clear();
    })







// 
var bets=[];


function clear(){
    bets=[];
}

function addBet(bet){
bets.push(bet);
}

let generateRandomNum=() => {
return Math.floor(Math.random()*1000+1);
}

let getWinner= ()=>{
    let winNum=generateRandomNum();
    let closest=1000;
    let currentWinner=0;
    
    for(var i=0; i< bets.length; i++){
       let diff=Math.abs(bets[i].value-winNum)
        if(diff < closest){
            closest=diff;
            currentWinner=i;
        }
    }
    return bets[currentWinner];
}