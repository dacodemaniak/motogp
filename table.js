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
        lastname: 'Zanzibar',
        firstname: 'Jean-Luc',
        phone: '06 23 23 23 23',
        mail: 'jean-luc.aubert@aelion.fr'
    },
    {
        id: 2,
        lastname: 'Dutronc',
        firstname: 'Jean-Luc',
        phone: '06 23 23 23 23',
        mail: 'jean-luc.aubert@aelion.fr'
    },
    {
        id: 3,
        lastname: 'Tartuffe',
        firstname: 'Jean-Luc',
        phone: '06 23 23 23 23',
        mail: 'jean-luc.aubert@aelion.fr'
    },
    {
        id: 4,
        lastname: 'Bond',
        firstname: 'James',
        phone: '07 07 07 07 07',
        mail: 'bond.james'
    }
]

/**
 * 
 * @param {string} element 
 * @returns HTMLElement
 */
const buildHtmlElement = (element) => {
    return document.createElement(element)
}

// Displaying all of interns in a row in a table
const rowMaker = () => {


    const tbody = document.querySelector('tbody')

    for (const intern of interns) {
        // 1. Create a tr element
        const newTr = buildHtmlElement('tr')

        // 2. Create a td element and write intern id into
        const idTd = buildHtmlElement('td')
        idTd.innerHTML = intern.id
        // 3. Add the brand new td to tr
        newTr.appendChild(idTd)

        // 2. Create a td element and write intern lastname into
        const lastnameTd = buildHtmlElement('td')
        lastnameTd.innerHTML = intern.lastname
        // 3. Add the brand new td to tr
        newTr.appendChild(lastnameTd)

        // 2. Create a td element and write intern firstname into
        const firstnameTd = buildHtmlElement('td')
        firstnameTd.innerHTML = intern.firstname
        // 3. Add the brand new td to tr
        newTr.appendChild(firstnameTd)

        const phoneTd = buildHtmlElement('td')
        phoneTd.innerHTML = intern.phone
        newTr.appendChild(phoneTd)
        
        const emailTd = buildHtmlElement('td')
        emailTd.innerHTML = intern.mail
        newTr.appendChild(emailTd)

        // Append the brand new complete tr to tbody (that's all folks)
        tbody.appendChild(newTr)
    }
}

rowMaker()

// Arrow function
const sortTableOnName = () => {
    const trs = [... document.querySelector('tbody').childNodes]
    for(let tr of trs) {
        tr.remove()
    }

    interns.sort((intern1, intern2) => {
        return intern1.lastname.localeCompare(intern2.lastname)
    })
    console.log(interns)
    rowMaker()
}

function sortTable() {
    const trs = [... document.querySelector('tbody').childNodes]
    for(let tr of trs) {
        tr.remove()
    }

    interns.sort((intern1, intern2) => {
        return intern1.lastname.localeCompare(intern2.lastname)
    })
    console.log(interns)
    rowMaker()
}

const moi = {
    nom: 'Aubert'
}
console.log(`Moi a le nom de ${moi.nom}`)
// Affecter à un nouvel objet l'objet moi
const toi = moi;
console.log(`Toi a le nom ${toi.nom}`)
toi.nom = 'Pia'
console.log(`Moi maintenant a le nom de ${moi.nom}`)
const lui = {...moi}
lui.nom = 'Casper le Fantôme'
console.log()