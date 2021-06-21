

/* eslint-disable */
const constMorse = { "0": "0", "1": "1", "2": "2", "3": "3", "4": "4", "5": "5", "6": "6", "7": "7", "8": "8", "9": "9", "a": "ᗩ", "b": "ᗷ", "c": "ᑢ", "d": "ᕲ", "e": "ᘿ", "f": "ᖴ", "g": "ᘜ", "h": "ᕼ", "i": "ᓰ", "j": "ᒚ", "k": "ᖽᐸ", "l": "ᒪ", "m": "ᘻ", "n": "ᘉ", "o": "ᓍ", "p": "ᕵ", "q": "ᕴ", "r": "ᖇ", "s": "S", "t": "ᖶ", "u": "ᑘ", "v": "ᐺ", "w": "ᘺ", "x": "᙭", "y": "ᖻ", "z": "ᗱ", "A": "ᗩ", "B": "ᗷ", "C": "ᑢ", "D": "ᕲ", "E": "ᘿ", "F": "ᖴ", "G": "ᘜ", "H": "ᕼ", "I": "ᓰ", "J": "ᒚ", "K": "ᖽᐸ", "L": "ᒪ", "M": "ᘻ", "N": "ᘉ", "O": "ᓍ", "P": "ᕵ", "Q": "ᕴ", "R": "ᖇ", "S": "S", "T": "ᖶ", "U": "ᑘ", "V": "ᐺ", "W": "ᘺ", "X": "᙭", "Y": "ᖻ", "Z": "ᗱ" };

function applyCharMap(map, text) {
    let out = "";
    for (let c of text.split("")) {
        if (map[c] !== undefined) out += map[c];
        else if (map[c.toLowerCase()] !== undefined) out += map[c.toLowerCase()];
        else out += c;
    }
    return out;
}

export default translate = {
    applyCharMap: applyCharMap
}