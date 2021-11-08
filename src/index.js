const messages = [
    "Joel", 
    "Ana",
    "Nicolay",
    "Jesica",
    "Diego",
    "Laura",
    "Paulina",
    "Andrea"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };