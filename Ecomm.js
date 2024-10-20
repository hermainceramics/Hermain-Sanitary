let trendCard = document.querySelectorAll(".trendCard");
let shopCard = document.querySelectorAll(".shopCard");

let count = 0;

trendCard.forEach(function(card, index){
    card.style.left=`${index * 100}%`
})

function myFun(){
    trendCard.forEach(function(curCard){
        curCard.style.transform=`translateX(-${count * 100}%)`
    })
}

setInterval(function(){
    count++;
    if(trendCard.length == count){
        count=0
    }
    myFun()
}, 3000)

// card detail
shopCard.forEach(function(shop){
    shop.addEventListener("click", function(){
        console.log(shop);

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
        <i id="icon" class="fa-solid fa-xmark"></i>
        <img src=${shop.firstElementChild.src} alt="">
        <div>
            <p class="heads">Best At Shopping Cart</p><br>
            <p>Size</p>
            <input type="number" placeholder="Select"> <br>
            <p>Quality</p>
            <input type="number"> <br>
            <button>Add To Cart</button>

        </div>
        `
        document.querySelector("body").appendChild(div);
        document.getElementById("icon").addEventListener("click", function(){
            div.remove();
        })
    })
})
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector('.contact-form form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Helper function to show feedback
    const showFeedback = (element, message, success = false) => {
        const feedback = document.createElement('p');
        feedback.innerText = message;
        feedback.style.color = success ? 'green' : 'red';
        element.appendChild(feedback);

        setTimeout(() => {
            feedback.remove();
        }, 3000);
    };

    // Email validation
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Handle form submission
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formContainer = document.querySelector('.contact-form');

        // Clear previous feedback
        formContainer.querySelectorAll('p').forEach(p => p.remove());

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        // Validate fields
        if (!name) {
            showFeedback(formContainer, 'Name is required.');
            return;
        }

        if (!validateEmail(email)) {
            showFeedback(formContainer, 'Please enter a valid email address.');
            return;
        }

        if (!message) {
            showFeedback(formContainer, 'Message cannot be empty.');
            return;
        }

        // Show success message and clear form
        showFeedback(formContainer, 'Message sent successfully!', true);
        contactForm.reset();
    });
});
