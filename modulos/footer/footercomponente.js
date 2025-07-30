export function footer() {
    const footer = document.createElement('footer');
    footer.className = 'main-footer';

    const link = document.createElement('a');
    link.href = 'https://github.com/keneth778/todo-list'; // URL completa a GitHub
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = '@keneth778';
    link.className = 'footer-link';

    footer.appendChild(link);
    return footer;
}
