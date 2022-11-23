startApp();

const historyStack = [];

function startApp() {
    hideContent();

    const years = document.querySelector('.yearsCalendar');
    const months = document.querySelectorAll('.monthCalendar');
    const captions = Array.from(document.querySelectorAll('caption'));

    years.querySelectorAll('.day').forEach(year =>
        year.addEventListener('click', viewYear));

    months.forEach(month =>
        month.querySelectorAll('.day').forEach(month =>
            month.addEventListener('click', viewMonth)));

    captions.shift();
    captions.forEach(caption => caption.addEventListener('click', goBack));


    years.style.display = 'block';
}

function hideContent() {
    document.querySelectorAll('section').forEach(section =>
        section.style.display = 'none')
}

function goBack(event) {
    if (event.target.textContent.length === 4) {
        historyStack.pop();

        return startApp();
    }

    return viewYear();
}

function viewYear(event) {
    let year = null;

    historyStack.length === 0
        ? year = event.target.children[0].textContent
        : year = historyStack.pop();

    historyStack.push(year);

    hideContent()

    document.querySelector(`#year-${year}`).style.display = 'block';
}

function viewMonth(event) {
    const monthTable = {
        'Jan': 1,
        'Feb': 2,
        'Mar': 3,
        'Apr': 4,
        'May': 5,
        'Jun': 6,
        'Jul': 7,
        'Aug': 8,
        'Sept': 9,
        'Oct': 10,
        'Nov': 11,
        'Dec': 12
    }

    const year = historyStack[0];
    const month = event.target.children[0].textContent;

    hideContent();

    document.querySelector(`#month-${year}-${monthTable[month]}`).style.display = 'block';
}