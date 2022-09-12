function solve(bandName, album, song) {
    let time = (bandName.length * album.length) * (song.length / 2);
    let rotations = Math.ceil(time / 2.5);

    console.log(`The plate was rotated ${rotations} times.`);
}

solve('Black Sabbath', 'Paranoid', 'War Pigs');
solve('Rammstein', 'Sehnsucht', 'Engel');