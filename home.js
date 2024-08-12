// Toggle Navbar for mobile menu
document.getElementById('menu-icon').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show');
});

// Search function for Home page search bar
const searchInputHome = document.getElementById("searchInput-home");
const searchResultsHome = document.getElementById("searchResults-home");

searchInputHome.addEventListener("input", function() {
    const query = this.value.toLowerCase().trim();
    searchResultsHome.innerHTML = "";

    if (query) {
        const items = [
            { name: "Rendang", link: "rendang.html" },
            { name: "Empek-empek Palembang", link: "empek2.html" },
            { name: "Gudeg", link: "gudeg.html" },
            { name: "Soto Banjar", link: "sotobanjar.html" },
            { name: "Dawet", link: "dawet.html" },
            { name: "Wedang Ronde", link: "wedangronde.html" },
        ];

        const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));

        if (filteredItems.length > 0) {
            filteredItems.forEach(item => {
                const resultItem = document.createElement("a");
                resultItem.href = item.link;
                resultItem.textContent = item.name;
                searchResultsHome.appendChild(resultItem);
            });
            searchResultsHome.classList.add("show");
        } else {
            const noResultItem = document.createElement("div");
            noResultItem.textContent = "Tidak ada hasil ditemukan";
            noResultItem.classList.add("no-results");
            searchResultsHome.appendChild(noResultItem);
            searchResultsHome.classList.add("show");
        }
    } else {
        searchResultsHome.classList.remove("show");
    }
});

// Search function for Header search bar
const searchInputHeader = document.getElementById("searchInput");
const searchResultsHeader = document.getElementById("searchResults");

searchInputHeader.addEventListener("input", function() {
    const query = this.value.toLowerCase().trim();
    searchResultsHeader.innerHTML = "";

    if (query) {
        const items = [
            { name: "Rendang", link: "rendang.html" },
            { name: "Empek-empek Palembang", link: "empek2.html" },
            { name: "Gudeg", link: "gudeg.html" },
            { name: "Soto Banjar", link: "sotobanjar.html" },
            { name: "Dawet", link: "dawet.html" },
            { name: "Wedang Ronde", link: "wedangronde.html" },
        ];

        const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));

        if (filteredItems.length > 0) {
            filteredItems.forEach(item => {
                const resultItem = document.createElement("a");
                resultItem.href = item.link;
                resultItem.textContent = item.name;
                searchResultsHeader.appendChild(resultItem);
            });
            searchResultsHeader.classList.add("show");
        } else {
            const noResultItem = document.createElement("div");
            noResultItem.textContent = "Tidak ada hasil ditemukan";
            noResultItem.classList.add("no-results");
            searchResultsHeader.appendChild(noResultItem);
            searchResultsHeader.classList.add("show");
        }
    } else {
        searchResultsHeader.classList.remove("show");
    }
});