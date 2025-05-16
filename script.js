document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('main > section');
    const main = document.querySelector('main');
    const header = document.querySelector('header');

    // Add toggle buttons for each section
    sections.forEach(section => {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = `Toggle ${section.querySelector('h2').textContent}`;
        toggleButton.classList.add('toggle-button');
        header.appendChild(toggleButton);

        toggleButton.addEventListener('click', () => {
            section.classList.toggle('collapsed');
        });
    });

    // Basic Search Functionality
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search topics...';
    searchInput.classList.add('search-input');
    header.appendChild(searchInput);

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const topics = document.querySelectorAll('.topic');

        topics.forEach(topic => {
            const heading = topic.querySelector('h3').textContent.toLowerCase();
            if (heading.includes(searchTerm)) {
                topic.style.display = 'block';
            } else {
                topic.style.display = 'none';
            }
        });
    });

    console.log("SDE 2 Prep App loaded with interactivity!");
});
