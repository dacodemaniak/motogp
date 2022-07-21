/**
 * table.js : Handle rows in a table
 * @author Aélion
 * @version 1.0.0
 */

const htmlBuilder = (element, ...args) => {
    if (!args.length) {
        return document.createElement(element)
    }

    const child = document.createElement(element)
    child.innerHTML = args[1]
    args[0].appendChild(child)

    return child
}

console.log('Hello JS')

const interns = [
    {
        id: 1,
        lastname: 'Aubert',
        firstname: 'Jean-Luc',
        phone: '06 23 23 23 23',
        mail: 'jean-luc.aubert@aelion.fr'
    },
    {
        id: 2,
        lastname: 'Aubert',
        firstname: 'Jean-Luc',
        phone: '06 23 23 23 23',
        mail: 'jean-luc.aubert@aelion.fr'
    },
    {
        id: 3,
        lastname: 'Aubert',
        firstname: 'Jean-Luc',
        phone: '06 23 23 23 23',
        mail: 'jean-luc.aubert@aelion.fr'
    }
]

// Displaying all of interns in a row in a table
const tbody = document.querySelector('tbody')

for (const intern of interns) {
    // 1. Create a tr element
    const newTr = htmlBuilder('tr')

    // 2. Create a td element and write intern infos into
    const idTd = htmlBuilder('td', newTr, intern.id)
    const lastnameTd = htmlBuilder('td', newTr, intern.lastname)
    const firstnameTd = htmlBuilder('td', newTr, intern.firstname)
    const phoneTd = htmlBuilder('td', newTr, intern.phone)
    const emailTd = htmlBuilder('td', newTr, intern.mail)


    // Append the brand new complete tr to tbody (that's all folks)
    tbody.appendChild(newTr)
}

