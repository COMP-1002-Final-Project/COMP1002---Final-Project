
// header //

// js + html code so we can use javascript to import header to each page
// header styling done in main.css

const headerGlobal = document.querySelector('#header-global');
// to grab header ID from html

headerGlobal.innerHTML = `
<header class="header-global">
    <nav class="header-navbar">
        <div class="header-logo">Logo Placeholder</div>
        <ul class="header-ul-nav-links">
            <li class="header-li-nav-links"><a href="#">Home</a></li>
            <li class="header-li-nav-links"><a href="#">About</a></li>
            <li class="header-li-nav-links"><a href="#">Product</a></li>
            <li class="header-li-nav-links"><a href="#">Contact</a></li>
        </ul>
    </nav>
</header> `;

// footer //