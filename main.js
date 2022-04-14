document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('loginn').onclick = function promptUser() {
        const userName = prompt("what is your name?");
        console.log(userName);
        document.getElementById('loginn').innerHTML = userName;
    };
});
