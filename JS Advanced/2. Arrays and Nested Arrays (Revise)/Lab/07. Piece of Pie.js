function solve(pies, start, end) {
    start = pies.indexOf(start);
    end = pies.indexOf(end) + 1;

    return pies.slice(start, end);
}

console.log(solve(
    ['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));
console.log(solve(
    ['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
));