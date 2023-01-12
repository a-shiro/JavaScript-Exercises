const sections = document.querySelectorAll('section');

export function hideSections() {
    sections.forEach(x => {
        x.style.display = 'none';
    });
}

export function render(view) {
    view();
}