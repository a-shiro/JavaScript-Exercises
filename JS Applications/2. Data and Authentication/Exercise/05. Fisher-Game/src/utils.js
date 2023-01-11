const sections = document.querySelectorAll('section');

export function render(section) {
    sections.forEach(x => {
        x.style.display = 'block'
            ? x.style.display = 'none'
            : '';
    });

    section.style.display = 'block';
}