// Add your code here

// fetch("http://localhost:3000/dogs", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     }
//     body: JSON.stringify({
//         dogName: "poodle", 
//         dogBreed: "golden"
//     })
// })

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => response.json())
    .then(person => slapOn(person))
    .catch(error => console.log(error.message))
}

const container = document.querySelector("div#container")

function slapOn(person){
    newPerson = document.createElement("p")
    newPerson.textContent = `ID is: ${person.id}`
    container.append(newPerson)
}

submitData("julia", "someemail")