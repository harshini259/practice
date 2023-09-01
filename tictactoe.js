const player1 = "X";
const player2 = "O";
const state = {
    "currentPlayer" : player1,
    "game" : {"00": null,"01": null,"02": null,
            "10": null,"11": null,"12": null,
            "20": null,"21": null,"22": null },
    "gameStaus": null
};
const wins=[
            ["00","01","02"],
            ["10","11","12"],
            ["20","21","22"],
            ["00","10","20"],
            ["01","11","21"],
            ["02","12","22"],
            ["00","11","22"],
            ["02","11","20"],
        ];

const handleClick = (id) => {
    if (state.gameStaus) {
        alert(state.gameStaus);
        return   
    }
    if(state.game[id] != null){
        return
    }
    state.game[id] = state.currentPlayer;
    render(id, state.currentPlayer);
    if (checkWinner()) {
        state.gameStaus = "Game Over" + state.currentPlayer + " Wins"
        alert(state.gameStaus);
        return
    }
    if (!checkEmpty()) {
        state.gameStaus = "Game Draw"
        alert(state.gameStaus);
        return   
    }
    if (state.currentPlayer == player1) {
        state.currentPlayer = player2
    } else {
        state.currentPlayer = player1
    }
}

function render(id, player) {
    document.getElementById(id).innerHTML= "<div>" + player + "</div>";
}

function checkWinner(){
    for(let i of wins ) {
        let count = 0;
        for (let j of i) {
            // console.log(j, state.game[j], state.currentPlayer)
            if(state.game[j]==state.currentPlayer) {
                count+=1
            }
        }
        if(count == 3) {
            return true
        }
    }
    return false
}

function checkEmpty() {
    for (const [key, value] of Object.entries(state.game)) {
        if (value == null) {
            return true
        }
    }
    return false
}