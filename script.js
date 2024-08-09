const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

const foods = [
    { name: 'Rendang', url: 'rendang.html' },
    { name: 'Empek-empek Palembang', url: 'empek2.html' },
    { name: 'Rujak Cingur', url: 'rujakcingur.html' },
    { name: 'Soto Banjar', url: 'sotobanjar.html' },
    { name: 'Dawet', url: 'Dawet.html' },
    { name: 'Wedang Ronde', url: 'WedangRonde.html' }
];

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';
    if (query) {
        const filteredFoods = foods.filter(food => food.name.toLowerCase().includes(query));
        if (filteredFoods.length > 0) {
            searchResults.style.display = 'block';
            filteredFoods.forEach(food => {
                const link = document.createElement('a');
                link.href = food.url;
                link.textContent = food.name;
                searchResults.appendChild(link);
            });
        } else {
            searchResults.style.display = 'none';
        }
    } else {
        searchResults.style.display = 'none';
    }
});
