const places = [
    {
        name: "Sigiriya",
        image: "https://www.edengardensigiriya.com/wp-content/uploads/2015/08/sigiriya-fort.jpg",
        description: "Ancient rock fortress and UNESCO World Heritage Site."
    },
    {
        name: "Ella",
        image: "https://i0.wp.com/beyondwildplaces.com/wp-content/uploads/2024/02/Things-to-do-in-Ella.jpg?resize=1170%2C600&ssl=1",
        description: "Beautiful hill country with breathtaking views."
    },
    {
        name: "Galle Fort",
        image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/3f/32/13.jpg",
        description: "Historic Dutch fort with colonial architecture."
    }
];


const container = document.getElementById("placesContainer");
const form = document.getElementById("placeForm");

function displayPlaces() {
    container.innerHTML = "";
    places.forEach(place => {
        const card = `
            <div class="card">
                <img src="${place.image}" alt="${place.name}">
                <div class="card-content">
                    <h3>${place.name}</h3>
                    <p>${place.description}</p>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const image = document.getElementById("image").value;
    const description = document.getElementById("description").value;

    places.push({ name, image, description });
    displayPlaces();
    form.reset();
});

displayPlaces();
