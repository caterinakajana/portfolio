// Selezioniamo tutti i bottoni di filtro e tutti gli elementi del portfolio
const filterButtons = document.querySelectorAll('.filter-btn');
const workItems = document.querySelectorAll('.work-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Rimuoviamo la classe 'active' da tutti i bottoni e la mettiamo su quello cliccato
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Leggiamo la categoria associata al bottone
        const filterValue = button.getAttribute('data-filter');

        // Mostriamo o nascondiamo i lavori in base alla categoria
        workItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');

            if (filterValue === 'all' || itemCategory === filterValue) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    });
});