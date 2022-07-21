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
    const newTr = document.createElement('tr')

    // 2. Create a td element and write intern id into
    const idTd = document.createElement('td')
    idTd.innerHTML = intern.id
    // 3. Add the brand new td to tr
    newTr.appendChild(idTd)

    // 2. Create a td element and write intern lastname into
    const lastnameTd = document.createElement('td')
    lastnameTd.innerHTML = intern.lastname
    // 3. Add the brand new td to tr
    newTr.appendChild(lastnameTd)

    // 2. Create a td element and write intern firstname into
    const firstnameTd = document.createElement('td')
    firstnameTd.innerHTML = intern.firstname
    // 3. Add the brand new td to tr
    newTr.appendChild(firstnameTd)

    const phoneTd = document.createElement('td')
    phoneTd.innerHTML = intern.phone
    newTr.appendChild(phoneTd)
    
    const emailTd = document.createElement('td')
    emailTd.innerHTML = intern.mail
    newTr.appendChild(emailTd)

    // Append the brand new complete tr to tbody (that's all folks)
    tbody.appendChild(newTr)
}

