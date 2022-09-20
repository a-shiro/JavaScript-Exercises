function solve(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = input.shift();
    let typeList = input.pop();

    for (let i = 0; i < songs; i++) {
        let [type, name, time] = input[i].split('_')

        let song = new Song(type, name, time);

        if (type === typeList || typeList === 'all') {
            console.log(song.name);
        }
    }
}

solve([
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
])