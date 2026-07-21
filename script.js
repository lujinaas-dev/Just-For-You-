let button = document.getElementById("clickBtn");
let message = document.getElementById("message");

button.addEventListener("click" , function(){
message.style.display = "block" ;
message.classList.add("show");

    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");

        heart.innerHTML = "💖";
        heart.classList.add("heart");

        heart.style.left = Math.random() * 100 + "vw";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }

});
