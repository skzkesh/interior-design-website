(function(w,d,s,o,f,js,fjs){
    w[o]=w[o]||function(){(w[o].q=w[o].q||[]).push(arguments)};
    js=d.createElement(s),fjs=d.getElementsByTagName(s)[0];
    js.id=o; js.src=f; js.defer=1;
    fjs.parentNode.insertBefore(js,fjs)
})(window,document,"script","ww","https://toolassets.haptikapi.com/widget.js");

ww("init",{
    "debug": true,
    "chatButton": {
        "left": 20,
        "bottom": 20,
        "right": 20,
        "position": "right",
        "backgroundColor": "#00A68B",
        "borderRadius": 40,
        "withText": false,
        "text": "",
        "temp": 1
    },
    "chatWidget": {
        "name": "INTI HPL",
        "subHeader": "Typically replies within an hour",
        "logo": "",
        "greetingText": "\"Ada pertanyaan? Kami siap membantu! Klik WhatsApp untuk info lebih lanjut.\"",
        "phone": "+6285107082202",
        "backgroundColor": "#677871",
        "async": 1
    }
});

window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) { // Change when user scrolls 50px down
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".fade-in");
    elements.forEach((el) => {
        el.classList.add("show");
    });
});

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.remove('hidden');
});

// Show the header on hover
header.addEventListener('mouseenter', () => {
    header.classList.remove('hidden');
});

header.addEventListener('mouseleave', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        header.classList.add('hidden');
    }
});

function handleSubmit(){
    document.getElementById('subscribe_form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const response = await fetch('/api/send-inquiry', {
          method: 'POST',
          body: JSON.stringify({
            phone: formData.get('phone'),
            question: formData.get('question')
          }),
          headers: { 'Content-Type': 'application/json' }
        });
      
        const result = await response.json();
        alert(result.message);
      });
}
