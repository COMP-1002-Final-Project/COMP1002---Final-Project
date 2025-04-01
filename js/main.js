
// header //

// js + html code so we can use javascript to import header to each page
// header styling done in main.css

const headerGlobal = document.querySelector('#header-global');
// to grab header ID from html
const footerGlobal = document.getElementById('footerSection')

headerGlobal.innerHTML = `
<header id="header-global">
    <nav class="header-navbar">
         <img src="/css/images/outpost-box.webp" class="header-logo-image">
         <p class="header-main-text">Outpost</p>
        <ul class="header-ul-nav-links">
            <li class="header-li-nav-links"><a href="#">Home</a></li>
            <li class="header-li-nav-links"><a href="#">About</a></li>
            <li class="header-li-nav-links"><a href="#">Product</a></li>
            <li class="header-li-nav-links"><a href="#">Contact</a></li>
        </ul>
    </nav>
</header> `;

footerGlobal.innerHTML = '<img class="footerLogo" src="css/images/outpost-footer.jpg" alt="Outpost board game"><h2>Outpost (1991 - 1994)</h2><button class="footerButton">Back to Top</button><p class="publishers">Published by Stronghold games and TimJim games</p>';