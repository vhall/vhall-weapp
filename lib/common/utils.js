"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendQueryParamsToPath = void 0;
/**
 * 给指定的 path 拼接查询参数，并且支持处理原路径上已经存在同名参数的情况，你可以选择是否覆盖这些参数
 * @param {string} path 原路径
 * @param {object} params 待拼接的参数对象
 * @param {boolean} override 是否覆盖同名参数,默认false
 * @returns
 */
function appendQueryParamsToPath(path, params, override) {
    if (override === void 0) { override = false; }
    if (!path)
        return '';
    var existingParams = {};
    var queryIndex = path.indexOf('?');
    if (queryIndex !== -1) {
        // 存在问号, 取问号后面存在的参数放入existingParams对象
        var existingQuery = path.slice(queryIndex + 1);
        var pairs = existingQuery.split('&');
        for (var _i = 0, pairs_1 = pairs; _i < pairs_1.length; _i++) {
            var pair = pairs_1[_i];
            var _a = pair.split('='), key = _a[0], value = _a[1];
            if (key) {
                existingParams[decodeURIComponent(key)] = decodeURIComponent(value || '');
            }
        }
    }
    var newQueryString = '';
    for (var _b = 0, _c = Object.entries(params); _b < _c.length; _b++) {
        var _d = _c[_b], key = _d[0], value = _d[1];
        if (override || !(key in existingParams)) {
            if (newQueryString) {
                newQueryString += '&';
            }
            newQueryString += "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
        }
    }
    if (newQueryString) {
        if (queryIndex == -1) {
            path = path + '?' + newQueryString; // 没有问号
        }
        else {
            // 有问号的情况。区分？后面有参数和没有参数
            var isExistingParamsEmpty = Object.keys(existingParams).length === 0;
            path = isExistingParamsEmpty
                ? path + newQueryString
                : path + '&' + newQueryString;
        }
    }
    return path;
}
exports.appendQueryParamsToPath = appendQueryParamsToPath;
