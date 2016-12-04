
function djb2(str) {
    var hash = 5381;
    for (var i = 0; i < str.length; i++) {
        hash = ((hash << 5) + hash) + str.charCodeAt(i);
        /* hash * 33 + c */
    }
    return hash;
}

function convertToHex(str) {
    var hash = djb2(str);
    var r = (hash & 0xFF0000) >> 16;
    var g = (hash & 0x00FF00) >> 8;
    var b = hash & 0x0000FF;
    return "#" + ("0" + r.toString(16)).substr(-2) + ("0" + g.toString(16)).substr(-2) + ("0" + b.toString(16)).substr(-2);
}

function convertHexToRGBA(hex, opacity) {
    var hexNoHash = hex.replace('#', ''),
        r = parseInt(hexNoHash.substring(0, 2), 16),
        g = parseInt(hexNoHash.substring(2, 4), 16),
        b = parseInt(hexNoHash.substring(4, 6), 16),
        result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';

    return result;
}

module.exports = {
    convertHex : function (str) {
        return convertToHex(str);
    },
    convertRGBA : function (str, opacity) {
        return convertHexToRGBA(convertToHex(str), opacity)
    }
};