var usersRequest = new XMLHttpRequest();
var usersOutput = document.getElementById('usersOutput'),
    loading = document.querySelector('#loading');

console.log(loading)

// 1

// setTimeout()
usersRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {

        let myData = JSON.parse(this.response)

        for (let index = 0; index < myData.length; index++) {
            const user = myData[index];
            usersOutput.innerHTML += `<li class="list-group-item">${user.name}</li>`
        }
        loading.classList.add('d-none')
    }
}


// usersRequest.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         setTimeout(() => {
//             let myData = JSON.parse(this.response)

//             for (let index = 0; index < myData.length; index++) {
//                 const user = myData[index];
//                 usersOutput.innerHTML += `<li class="list-group-item">${user.name}</li>`
//             }
//             loading.classList.add('d-none')
//         }, 2000)
//     }
// }

// 2
usersRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');

// 3
usersRequest.send();

setTimeout(() => console.log("OK"), 3000)