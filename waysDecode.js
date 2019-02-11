function waysDecode(encoded) {
    const minMap = 1;
    const maxMap = 26;
    if (encoded.length < 2) {
        return 1;
    }
    if (parseInt(encoded.substring(0, 2)) > 26) {
        return 1 + waysDecode(encoded.substring(2, encoded.length));
    } else {
        return 1 + waysDecode(encoded.substring(1, encoded.length));
    }
}

console.log(waysDecode('281'));
