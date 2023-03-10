class Governor{
    static secretary = 'Ms. Johnson'
    static wardrobe = 'Suit & tie'
    static pressSpeech() {
        return 'And to my fellow Americans, I wish you all the best!'
    }
    static escapePlan() {
        return 'I have other matters I must attend to.'
    }
}

console.log(Governor.secretary)
console.log(Governor.wardrobe)
console.log(Governor.pressSpeech())
console.log(Governor.escapePlan())

class Person{
    constructor(mother,father,culture){
        this.mother = mother
        this.father = father
        this.culture = culture
    }
    payTaxes() {
        console.log('Every year, pay your taxes.')
    }
    getOlder() {
        console.log('Every year, get older.')
    }
    getConfused(status) {
        if (status === true) {
            console.log('What is even that?')
        } else {
            console.log('I am totally at peace with this situation')
        }
    }
}

const me = new Person('Veronica', 'Fernando', 'American')
me.payTaxes()
me.getOlder()
me.getConfused(true)

class PostalWorker extends Person{
    calfGrow(miles) {
        if (miles > 4) {
            return 'Your calves are getting a work out today!'
        }
    }
    seesDog(fenced) {
        if (fenced === false) {
            return 'RUN'
        } else {
            return 'Walk briskly'
        } 
    }
    sideOfStreet(houseNum) {
        if (houseNum % 2 == 0) {
            return 'Walk on the left side of the street'
        } else {
            return 'Walk on the right side of the street'
        }
    }
}

const mailMan = new PostalWorker('Sharon', 'Max', 'French')
console.log(mailMan)
mailMan.getOlder()
console.log(mailMan.seesDog(true))

const mailMan2 = new PostalWorker('Bo', 'Willis', 'American')
console.log(mailMan2)
console.log(mailMan2.sideOfStreet(132))

class Chef extends Person{
    cook(dish) {
        return ('I can cook a mean ' + dish)
    }
    harshCriticism(mistakes, insult1, insult2) {
        for (let i = 0; i < mistakes; i++){
            console.log(insult1 + insult2)
        }
    }
}

const gordon = new Chef('Suzy','Richard','English')
console.log(gordon)
gordon.payTaxes()
console.log(gordon.cook('egg salad'))

const emril = new Chef('Moira', 'Peter', 'Italian')
console.log(emril)
emril.harshCriticism(4,'too slow!','not commited!')