const prompt = require('prompt-sync')()

let life = 100
let points = 0
let current_round = 1
const usernames = new Map()

usernames.set('jonas')
usernames.set('peter')
usernames.set('joseph')
usernames.set('ian')
usernames.set('bradley')

//immitate a database of usernames and it user input should not exist in that database
while (current_round <= 5) {
    
    const username = prompt('What is your name? ')
    
    if(usernames.has(username.toLowerCase())) {
        console.log(`${username} is already taken please try again....`)
    }else {

        usernames.set(username)
        console.log(`\n\nWhat a unique name you got! you have 5 tries \n\n\nLevel ${current_round}:`)

        const answer_to_l1 = prompt("What do you call a bear with no teeth?: ")

        if(answer_to_l1.toLowerCase() === "a gummy bear") {
            console.log('Correct! ')
            points += 3
            current_round++
            console.log(`you got ${points} points`)
        }else {
            console.log('Incorrect Life -20')
            life -= 20
            current_round++
            console.log(`You only have ${life}% life`)
        }

        console.log(`Level ${current_round}:`)
        const answer_to_l2 = prompt(`Why don't skeletons fight each other?: `)

        if(answer_to_l2.toLowerCase() === "they don't have the guts" || answer_to_l2.toLowerCase() === "they dont have the guts" || answer_to_l2.toLowerCase() === "they do not have guts") {
            console.log('Correct! ')
            points += 3
            current_round++
            console.log(`you got ${points} points`)
        }else {
            console.log('Incorrect Life -20')
            life -= 20
            current_round++
            console.log(`You only have ${life}% life`)
        }

        console.log(`Level ${current_round}:`)
        const answer_to_l3 = prompt(`Why can't you give Elsa a balloon?: `)

        if(answer_to_l3.toLowerCase() === "because she will let it go" || answer_to_l3.toLowerCase() === "because she'll let it go" || answer_to_l3.toLowerCase() === "she will let it go") {
            console.log('Correct! ')
            points += 3
            current_round++
            console.log(`you got ${points} points`)
        }else {
            console.log('Incorrect Life -20')
            life -= 20
            current_round++
            console.log(`You only have ${life}% life`)
        }

        console.log(`Level ${current_round}:`)
        const answer_to_l4 = prompt(`Why did the golfer bring two pairs of pants?: `)

        if(answer_to_l4.toLowerCase() === "in case he got a hole in one") {
            console.log('Correct! ')
            points += 3
            current_round++
            console.log(`you got ${points} points`)
        }else {
            console.log('Incorrect Life -20')
            life -= 20
            current_round++
            console.log(`You only have ${life}% life`)
        }

        console.log(`Level ${current_round}:`)
        const answer_to_l5 = prompt(`Why was the math book sad?`)

        if(answer_to_l5.toLowerCase() === "it had too many problems") {
            console.log('Correct! ')
            points += 3
            current_round++
            console.log(`you got ${points} points`)
        }else {
            console.log('Incorrect Life -20')
            life -= 20
            current_round++
            console.log(`You only have ${life}% life`)
        }
    }
}





if(life > 1) {
    console.log('\n\n\nyou survive!! congratulations')
}else {
    console.log('\n\n\ngame over you loose')
}