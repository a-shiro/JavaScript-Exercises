function radiansToDegrees(r) {
    const pi = Math.PI

    let radian = Number(r[0])
    let degrees = radian * 180 / pi

    console.log(degrees)
}

radiansToDegrees(["3.1416"])
radiansToDegrees(["6.2832"])