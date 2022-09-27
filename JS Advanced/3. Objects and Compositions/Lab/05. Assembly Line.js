function createAssemblyLine() {
    return {
        hasClima: function (car) {
            car['temp'] = 20;
            car['tempSettings'] = 21;

            car.adjustTemp = function () {
                switch (true) {
                    case this.temp < this.tempSettings:
                        this.temp++;
                        break;
                    case this.temp > this.tempSettings:
                        this.temp--;
                        break;
                }
            }
        },
        hasAudio: function (car) {
            car['currentTrack'] = {
                'name': null,
                'artist': null
            }

            car.nowPlaying = function () {
                if (this.currentTrack.name !== null) {
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            };
        },
        hasParktronic: function (car) {
            car.checkDistance = function (distance) {
                switch (true) {
                    case distance < 0.1:
                        console.log('Beep! Beep! Beep!');
                        break;
                    case 0.1 <= distance && distance < 0.25:
                        console.log('Beep! Beep!');
                        break;
                    case 0.25 <= distance && distance < 0.5:
                        console.log('Beep!');
                        break;
                    default:
                        console.log('');
                }
            };
        }
    }
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar);
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
console.log(myCar);

myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
console.log(myCar);

myCar.checkDistance(0.3);