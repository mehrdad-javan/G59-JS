console.log("Hello from part 2!");
console.log("Document Object Model (DOM)");


console.log("Document Title:", document.title);
console.log("Document URL:", document.URL);
console.log("Document Referrer:", document.referrer);
console.log("Document Head:", document.head);
console.log("Document Body:", document.body);
console.log("Document location:", document.location);


console.log("Extract Images");
Array.from(document.images).forEach((img, index)=> {
    console.log(`Image ${index}: Source: ${img.src}`);
})

document.title = "Document Object Model (DOM)";

const anchorTag = document.getElementById('home-link');
console.log("Anchor Tag:", anchorTag);

anchorTag.textContent = "HOME";
anchorTag.classList.add("flex","item-center", 'gap-1', 'text-red-500', 'font-bold');

const homeIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
`;

anchorTag.insertAdjacentHTML( "afterbegin" , homeIcon);
/*
    insertAdjacentHTML(position, text) - Four possible positions:
    ----------------------------------------------------------
    1. 'beforebegin': Before the element itself (as a sibling).
    2. 'afterbegin': Inside the element, before its first child (like prepend).
    3. 'beforeend': Inside the element, after its last child (like append).
    4. 'afterend': After the element itself (as a sibling).

    Visual Representation:
    <!-- beforebegin -->
    <a id="home-link">
        <!-- afterbegin -->
        HOME
        <!-- beforeend -->
    </a>
    <!-- afterend -->
*/

//<link rel="icon" href="https://www.lexicongruppen.se/favicon.ico">

const favicon = document.createElement('link'); // <link>
favicon.rel = 'icon'; // <link rel="icon">
favicon.href = 'https://www.lexicongruppen.se/favicon.ico'; // <link rel="icon" href="https://www.lexicongruppen.se/favicon.ico">

document.head.appendChild(favicon);