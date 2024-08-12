document.getElementById('menu-icon').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show');
});

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", function() {
    const query = this.value.toLowerCase().trim();
    searchResults.innerHTML = "";
    
    if (query) {
        const items = [
            { name: "Rendang", link: "resep/rendang.html" },
            { name: "Empek-empek Palembang", link: "resep/empek2.html" },
            { name: "Gudeg", link: "resep/gudeg.html" },
            { name: "Soto Banjar", link: "resep/sotobanjar.html" },
            { name: "Dawet", link: "resep/dawet.html" },
            { name: "Wedang Ronde", link: "resep/wedangronde.html" },
        ];

        const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));

        if (filteredItems.length > 0) {
            filteredItems.forEach(item => {
                const resultItem = document.createElement("a");
                resultItem.href = item.link;
                resultItem.textContent = item.name;
                searchResults.appendChild(resultItem);
            });
            searchResults.classList.add("show");
        } else {
            const noResultItem = document.createElement("div");
            noResultItem.textContent = "Tidak ada hasil ditemukan";
            noResultItem.classList.add("no-results");
            searchResults.appendChild(noResultItem);
            searchResults.classList.add("show");
        }
    } else {
        searchResults.classList.remove("show");
    }
});