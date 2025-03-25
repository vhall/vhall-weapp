interface MerchTransferConfig {
  mch_id: string;
  mch_app_id: string;
  package_info: string;
  open_id: string;
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  complete?: WechatMiniprogram.RequestMerchantTransferCompleteCallback;
  /** 接口调用失败的回调函数 */
  fail?: WechatMiniprogram.RequestMerchantTransferFailCallback;
  /** 接口调用成功的回调函数 */
  success?: WechatMiniprogram.RequestMerchantTransferSuccessCallback;
}

export function toMerchTransfer(merchTransferConfig: MerchTransferConfig) {
  if (wx.canIUse('requestMerchantTransfer')) {
    const merchTransferParam: WechatMiniprogram.RequestMerchantTransferOption =
      {
        mchId: merchTransferConfig.mch_id,
        appId: merchTransferConfig.mch_app_id,
        package: decodeURIComponent(merchTransferConfig.package_info),
        openId: merchTransferConfig.open_id,
      };
    wx.requestMerchantTransfer({
      ...merchTransferParam,
      success(res) {
        // console.log("pay success");
        if (typeof merchTransferConfig.success === 'function') {
          merchTransferConfig.success(res);
        }
      },
      fail(res) {
        // console.log("pay fail");
        if (typeof merchTransferConfig.fail === 'function') {
          merchTransferConfig.fail(res);
        }
      },
      complete: function (res) {
        // console.log("pay complete");
        if (typeof merchTransferConfig.complete === 'function') {
          merchTransferConfig.complete(res);
        }
      },
    });
  } else {
    wx.showModal({
      content: '你的微信版本过低，请更新至最新版本。',
      showCancel: false,
      success(res) {
        wx.navigateBack();
      },
    });
  }
}
