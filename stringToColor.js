
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
/**
 *
 * @param hex
 * @param opacity
 * @returns {string}
 */
function convertHexToRGBA(hex, opacity) {
    var hexNoHash = hex.replace('#', ''),
        r = parseInt(hexNoHash.substring(0, 2), 16),
        g = parseInt(hexNoHash.substring(2, 4), 16),
        b = parseInt(hexNoHash.substring(4, 6), 16),
        result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity || 1 + ')';

    return result;
}

module.exports = {
    /**
     * convert a string to a hex color code
     * @param str
     */
    toHex : function (str) {
        return convertToHex(str);
    },
    /**
     * Convert a string to a rgba color
     * @param str
     * @param opacity [opacity=1]
     */
    toRGBA : function (str, opacity) {
        return convertHexToRGBA(convertToHex(str), opacity)
    },
    /**
     * Convert a HEX to rgba. E.g. #330000 > rgba(51,0,0,1)"
     * @param hex
     * @param opacity [opacity=1]
     * @returns {string}
     */
    convertHexToRGBA : convertHexToRGBA
};