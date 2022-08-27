// Add your code here
function submitData(firstName, email) {
    const userInfo = {
        "name": firstName,
        "email": email
    };
    const configurationObject = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userInfo)
    };
    return fetch('http://localhost:3000/users', configurationObject)
        .then(function (response) {
            return response.json();
        })
        .then(function (body) {
            return addNewContact(body.id)
        })
        .catch((error) => {
            document.body.innerHTML = error.message
        })
}

function addNewContact(newUser) {
    document.getElementsByTagName('body')[0].innerHTML = newUser
}

submitData('name', 'name@name.com')