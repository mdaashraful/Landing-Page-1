function handleSearch() {
    const searchInputElement = document.getElementById("search-input-field");
    const searchInputValue = searchInputElement.value;

    loadPhone(searchInputValue);
}

const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    console.log("Server Response: ", res);

    const serverData = await res.json();

    displayPhone(serverData.data);
}

const displayPhone = (data) => {
    console.log(data);
    const cardcontainer = document.getElementById("card-section");
    cardcontainer.innerHTML = "";

    data.forEach((phone) => {
        const productCard = document.createElement("div");
        productCard.classList.add("card");
        productCard.innerHTML = `
        <div class="card-image">
            <img src=${phone.image} alt="phone-image">
        </div>
        <h3 class="card-title">${phone.phone_name}</h3>
        <p class="card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur, vitae adipisci unde optio nobis reiciendis vero corporis veritatis iure numquam laboriosam corrupti qui laudantium et suscipit velit dignissimos consectetur.</p>
        <div class="card-price">
            <span>$</span>
            <span>999</span>
        </div>
        <div class="card-button">
            <button class="btn">show details</button>
        </div>`;
        cardcontainer.appendChild(productCard);
    });
}
