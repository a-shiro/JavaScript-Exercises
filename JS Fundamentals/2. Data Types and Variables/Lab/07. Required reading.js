function solve(pages, pagesPerHour, days) {
    let totalReadTime = pages / pagesPerHour;
    let hoursPerDay = totalReadTime / days;

    console.log(hoursPerDay);
}

solve(212, 20, 2);
solve(432, 15, 4);