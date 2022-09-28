function editElement(element, oldStr, replaceStr) {
    element.textContent =  element.textContent.split(`${oldStr}`).join(`${replaceStr}`);
}