
// header //

// js + html code so we can use javascript to import header to each page
// header styling done in main.css

const headerGlobal = document.querySelector('#header-global');
// to grab header ID from html
const footerGlobal = document.getElementById('footerSection')

headerGlobal.innerHTML = `
<header id="header-global">

    <nav class="header-navbar">

        <div class="header-box-1">
        <img src="/css/images/outpost-box.webp" class="header-logo-image">
        </div>

        <div class="header-box-2">
        <p class="header-main-text">Outpost</p>
        </div>

        <div class="header-box-3">
        <ul class="header-ul-nav-links">
               <li class="header-li-nav-links"><a href="/index.html">Home</a></li>
                <li class="header-li-nav-links"><a href="/about.html">About</a></li>
                <li class="header-li-nav-links"><a href="/product.html">Product</a></li>
                <li class="header-li-nav-links"><a href="/contact.html">Contact</a></li>
        </ul>
        </div>
    
    </nav>

</header> `;

footerGlobal.innerHTML = `
<nav class="footerNav">
    <div class="footerImage">
        <img class="footerLogo" src="css/images/outpost-footer.jpg" alt="Outpost board game">
    </div>
    <div class="footerTitle">
        <h2>Outpost (1991 - 1994)</h2>
    </div>
    <div class="footButt">
        <button onclick="topFunction()" class="footerButton">Back to Top</button>
    </div>
    <div class="footerPublish">
        <p>Published by Stronghold games and TimJim games</p>
    </div>
</nav>`;

let footButton = document.getElementsByClassName("footerButton");


function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}