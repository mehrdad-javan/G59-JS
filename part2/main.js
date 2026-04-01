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

/*
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

 */
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



function  createNavLinks() {
    const navLinks = [
        {id: "home-link", text: "Home", href: "#"},
        {id: "about-link", text: "About", href: "#"},
        {id: "features-link", text: "Features", href: "#"},
        {id: "contact-link", text: "Contact", href: "#"},
    ];

    const nav = document.querySelector("#main-nav");

    nav.innerHTML = navLinks.map(link => `
    <a 
        class="text-slate-300 hover:text-white transition" 
        ${link.id ? `id="${link.id}"` : ''} 
        href="${link.href}">
        ${link.text}
    </a>`
    ).join('');
}

createNavLinks();




function createEventCard(newEvent) {
    // 1. Create the main article container
    const article = document.createElement("article");
    article.classList.add(
        "bg-white", "border", "border-slate-200", "rounded-xl", "p-4",
        "shadow-sm", "hover:shadow-md", "hover:scale-[1.02]", "transition"
    );

    // 2. Create the image
    const img = document.createElement("img");
    img.src = newEvent.image;
    img.alt = newEvent.title;
    img.loading = "lazy";
    img.classList.add(
        "w-full", "h-40", "object-cover", "rounded-lg", "mb-4",
        "transition-transform", "duration-300", "hover:scale-105"
    );

    // 3. Create the category badge
    const category = document.createElement("span");
    category.textContent = newEvent.category;
    category.classList.add(
        "inline-block", "bg-red-50", "text-red-600", "text-xs",
        "px-2", "py-1", "rounded", "mb-3"
    );

    // 4. Create the date/time div
    const dateTime = document.createElement("div");
    dateTime.textContent = `${newEvent.date} · ${newEvent.time}`;
    dateTime.classList.add("text-sm", "text-slate-500", "mb-2");

    // 5. Create the title
    const title = document.createElement("h3");
    title.textContent = newEvent.title;
    title.classList.add("text-slate-900", "font-semibold", "mb-2");

    // 6. Create the location div
    const location = document.createElement("div");
    location.textContent = newEvent.location;
    location.classList.add("text-sm", "text-slate-500", "mb-1");

    // 7. Create the attendees div
    const attendees = document.createElement("div");
    attendees.textContent = `${newEvent.attendees} Attendees`;
    attendees.classList.add("text-sm", "text-slate-500", "mb-4");

    // 8. Create the button
    const button = document.createElement("button");
    button.textContent = "View Event";
    button.classList.add(
        "w-full", "bg-red-600", "text-white", "py-2", "rounded-lg",
        "hover:bg-red-700", "transition"
    );

    // 9. Append everything to the article
    article.appendChild(img);
    article.appendChild(category);
    article.appendChild(dateTime);
    article.appendChild(title);
    article.appendChild(location);
    article.appendChild(attendees);
    article.appendChild(button);

    // 10. Add Click Event for the button to open a modal
    button.addEventListener("click", () => {
        //openEventModal(newEvent);
        alert("You clicked the button!");
    });

    return article;
}


// js object
const newEvent = {
    title: "Stockholm JS Meetup",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    category: "Code",
    date: "Oct 15",
    time: "09:00",
    location: "Epicenter Stockholm",
    attendees: 10
};

const dynamicContainer = document.getElementById("dynamic-events");
if (dynamicContainer) {
    const card = createEventCard(newEvent);
    //dynamicContainer.prepend(card); // prepend to the beginning of the container
    dynamicContainer.appendChild(card); // append to the end of the container
}



function demoClick() {
    console.log("You clicked the button!");
}


document.getElementById("create-event-btn").addEventListener("mouseover", demoClick);


const browseBtn = document.getElementById('browse-events-btn');
const featuredSection = document.getElementById('featured-events-section');

if (browseBtn && featuredSection) {

    browseBtn.addEventListener('click', () => {
        featuredSection.scrollIntoView({behavior: 'smooth'});
    });

}







