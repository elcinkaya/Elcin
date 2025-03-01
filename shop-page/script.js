let cartCount = 0;

const cartCountElement = document.getElementById("sayi");

const box = Array.from(document.querySelectorAll(".plus"));

box.forEach((plus) => {
    console.log({plus});
    plus.addEventListener("click" , function () {
        if (cartCount < 9) {
            cartCount++;

            cartCountElement.textContent = cartCount;
        }
        kirmizi ();   
    })
})

function kirmizi () {
    if (cartCount == 9) {
        cartCountElement.style.backgroundColor = "red"
    } else {
        cartCountElement.style.backgroundColor = "";
    }
}