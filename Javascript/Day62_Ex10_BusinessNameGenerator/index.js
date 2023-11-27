let adjectives = {
    0 : 'Crazy',
    1 : 'Amazing',
    2 : 'Fire'
}

let ShopName = {
    0 : 'Engines',
    1 : 'Foods',
    2 : 'Garments'
}

let AnotherWord = {
    0 : 'Bros',
    1 : 'Limited',
    2 : 'Hub'
}

console.log(`Business names : ${adjectives[Math.round(Math.random() * 2)]} ${ShopName[Math.round(Math.random() * 2)]} ${AnotherWord[Math.round(Math.random() * 2)]} `);