function solve(order) {
    let car = {
        'model': order.model,
        'engine': {},
        'carriage': {},
        'wheels': {}
    };

    installEngine(car);

    function installEngine(car) {
        switch (true) {
            case order.power >= 200:
                car.engine['power'] = 200;
                car.engine['volume'] = 3500;
                break;
            case order.power >= 120:
                car.engine['power'] = 120;
                car.engine['volume'] = 2400;
                break;
            default:
                car.engine['power'] = 90;
                car.engine['volume'] = 1800;
        }
    }

    pickCarriageTypeAndPaint(car);

    function pickCarriageTypeAndPaint (car) {
        car.carriage['type'] = order.carriage;
        car.carriage['color'] = order.color;
    }

    installWheels(car);

    function installWheels(car) {
        let size = order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;
        car.wheels = [size, size, size, size];
    }

    return car;
}

console.log(solve({
    'model': 'VW Golf II',
    'power': 90,
    'color': 'blue',
    'carriage': 'hatchback',
    'wheelsize': 14
}));