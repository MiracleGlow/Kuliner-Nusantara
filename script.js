document.addEventListener('DOMContentLoaded', function() {
    // Event listener untuk tombol menu hamburger
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('show');
        menuIcon.classList.toggle('active');
    });

    // Event listener untuk pencarian
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    searchInput.addEventListener("input", function() {
        const query = this.value.toLowerCase().trim();
        searchResults.innerHTML = "";

        if (query) {
            const items = [
                { name: "Rendang", link: "rendang.html" },
                { name: "Empek-empek Palembang", link: "empek2.html" },
                { name: "Gudeg", link: "gudeg.html" },
                { name: "Soto Banjar", link: "sotobanjar.html" },
                { name: "Dawet", link: "dawet.html" },
                { name: "Wedang Ronde", link: "wedangronde.html" },
                { name: "Nasi Goreng", link: "nasigoreng.html" },
                { name: "Sate Madura", link: "satemadura.html" },
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
});