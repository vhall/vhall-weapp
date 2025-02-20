export function toPay(payConfig) {
    const payParam = {
        timeStamp: payConfig.timeStamp,
        nonceStr: payConfig.nonceStr,
        signType: payConfig.signType,
        package: decodeURIComponent(payConfig.package),
        paySign: decodeURIComponent(payConfig.paySign),
    };
    wx.requestPayment(Object.assign(Object.assign({}, payParam), { success(res) {
            // console.log("pay success");
            if (typeof payConfig.success === 'function') {
                payConfig.success(res);
            }
        },
        fail(res) {
            // console.log("pay fail");
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
