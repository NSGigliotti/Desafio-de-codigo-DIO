var read = require('readline-sync');

let heroName
let isName = 1
while (isName <= 1) {
    heroName = read.question("Nome do Heroi:")

    if (heroName) {
        isName++
    }
}


let lifePlayer = 100
let levelPayer = 1
let rankPlayer
let xp = 0
let lifeMonster = 10



while (lifePlayer >= 0) {
    let attack = Math.floor(Math.random() * 9)

    if (attack % 2) {
        let d20 = Math.floor(Math.random() * 20)

        if (d20 >= 18) {
            console.log("Ataque Critico vida do monstro é:" + lifeMonster)
            lifeMonster = lifeMonster - 5
        } else {
            console.log(heroName + " Ataca o monstro , vida do monstro é:" + lifeMonster)
            lifeMonster--
        }

        if (lifeMonster <= 0) {
            console.log("Mosntro derrotado")
            xp = xp + 250
            console.log("Novo inimigo apareceu")
            lifeMonster = 10

            if (xp >= 1001 && xp <= 2000) {
                levelPayer = 2
                lifePlayer += 10
            } else if (xp >= 2001 && xp <= 5000) {
                levelPayer = 3
                lifePlayer += 10
            } else if (xp >= 5001 && xp <= 7000) {
                levelPayer = 4
                lifePlayer += 10
            } else if (xp >= 7001 && xp <= 8000) {
                levelPayer = 5
                lifePlayer += 10
            } else if (xp >= 8001 && xp <= 9000) {
                levelPayer = 6
                lifePlayer += 10
            } else if (xp >= 9001 && xp <= 10000) {
                levelPayer = 7
                lifePlayer += 10
            } else if (xp >= 10001) {
                levelPayer = 8
                lifePlayer += 10
            }

        }
    } else {
        let d20 = Math.floor(Math.random() * 20)

        if (d20 >= 18) {
            lifePlayer = lifePlayer - 3
            console.log('O monstro causou um dano critico ,Vida autal do jogador é :' + lifePlayer)
        } else {
            lifePlayer--
            console.log('O monstro atacou ,Vida autal do jogador é :' + lifePlayer)
        }

    }
}

switch (levelPayer) {
    case 1:
        rankPlayer = "Ferro"
        break;
    case 2:
        rankPlayer = "Bronze"
        break;
    case 3:
        rankPlayer = "Prata"
        break;
    case 4:
        rankPlayer = "Ouro"
        break;
    case 5:
        rankPlayer = "Platina"
        break;
    case 6:
        rankPlayer = "Ascendente"
        break;
    case 7:
        rankPlayer = "Imortal"
        break;
    case 8:
        rankPlayer = "Radiante"
        break;

    default:
        break;
}

console.log("O Herói de nome " + heroName + " está no nível de " + rankPlayer)