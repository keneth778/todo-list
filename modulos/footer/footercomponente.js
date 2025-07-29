export function footer() {
    let footer = document.createElement('footer');
    footer.className = "main-footer";

    let span = document.createElement('span');
    span.innerText = "@github";
    footer.appendChild(span);

    return footer;
}
