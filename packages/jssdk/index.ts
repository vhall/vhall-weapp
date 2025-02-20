interface PayConfig {
  timeStamp: string;
  nonceStr: string;
  signType?: 'MD5' | 'HMAC-SHA256' | 'RSA';
  package: string;
  paySign: string;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  complete?: WechatMiniprogram.RequestPaymentCompleteCallback;
  /** 接口调用失败的回调函数 */
  fail?: WechatMiniprogram.RequestPaymentFailCallback;
  /** 接口调用成功的回调函数 */
  success?: WechatMiniprogram.RequestPaymentSuccessCallback;
}

export function toPay(payConfig: PayConfig) {
  const payParam: WechatMiniprogram.RequestPaymentOption = {
    timeStamp: payConfig.timeStamp,
    nonceStr: payConfig.nonceStr,
    signType: payConfig.signType,
    package: decodeURIComponent(payConfig.package),
    paySign: decodeURIComponent(payConfig.paySign),
  };
  wx.requestPayment({
    ...payParam,
    success(res) {
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
    },
    complete: function (res) {
      // console.log("pay complete");
      if (typeof payConfig.complete === 'function') {
        payConfig.complete(res);
      }
    },
  });
}
