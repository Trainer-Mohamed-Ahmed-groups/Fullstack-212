for (let i = 65; i <= 90; i++) {
    console.log(String.fromCharCode(i))
}

console.log("**************")

for (let i = 97; i <= 122; i++) {
    console.log(String.fromCharCode(i))
}


console.log("**************")

for (let i = 65; i <= 122; i++) {
    if (i >= 91 && i <= 96) continue;
    console.log(String.fromCharCode(i))
}

