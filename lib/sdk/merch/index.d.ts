/// <reference types="miniprogram-api-typings" />
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
export declare function toMerchTransfer(merchTransferConfig: MerchTransferConfig): void;
export {};
