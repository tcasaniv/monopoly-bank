const $ = (id) => document.querySelector(id);

var players = {
    1: {
        mount: $("#mount1"),
        input: $("#input1"),
        button: $("#button-player1")
    },
    2: {
        mount: $("#mount2"),
        input: $("#input2"),
        button: $("#button-player2")
    },
    3: {
        mount: $("#mount3"),
        input: $("#input3"),
        button: $("#button-player3")
    },
    4: {
        mount: $("#mount4"),
        input: $("#input4"),
        button: $("#button-player4")
    },
    5: {
        mount: $("#mount5"),
        input: $("#input5"),
        button: $("#button-player5")
    }
};

function calcular(mount, input) {
    if (input.value == '') { console.log('No pasa nada'); }
    else {
        mount.innerText = ( parseFloat(mount.innerText) + parseFloat(input.value) ).toFixed(2);
    }
}

function buttonsListener(players) {
    for (const i in players) {
        players[i].button.addEventListener("click", () => calcular(players[i].mount, players[i].input));
        console.log(players[i].button.id);
    }
}

buttonsListener(players);