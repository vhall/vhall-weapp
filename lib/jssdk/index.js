"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPay = void 0;
function toPay(payConfig) {
    var payParam = {
        timeStamp: payConfig.timeStamp,
        nonceStr: payConfig.nonceStr,
        signType: payConfig.signType,
        package: decodeURIComponent(payConfig.package),
        paySign: decodeURIComponent(payConfig.paySign),
    };
    wx.requestPayment(__assign(__assign({}, payParam), { success: function (res) {
            // console.log("pay success");
            if (typeof payConfig.success === 'function') {
                payConfig.success(res);
            }
        }, fail: function (res) {
            // console.log("pay fail");
            // console.log("pay success");
            if (typeof payConfig.fail === 'function') {
                payConfig.fail(res);
            }
        }, complete: function (res) {
            // console.log("pay complete");
            if (typeof payConfig.complete === 'function') {
                payConfig.complete(res);
            }
        } }));
}
exports.toPay = toPay;
