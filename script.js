let satus = document.getElementById("satus");
let btn = document.getElementById("btn");
let check = 0;

btn.addEventListener("click", function(){
    if (check == 0){
        satus.innerHTML = "Friends";
        btn.innerHTML = "Remove";
        satus.style.color = "rgb(49, 154, 0)";
        btn.style.backgroundColor = "red";
        check = 1;
    }
    else{
        satus.innerHTML = "Stranger";
        btn.innerHTML = "Add Friend";
        satus.style.color = "red";
        btn.style.backgroundColor = "rgb(49, 154, 0)";
        check = 0;
    }
})