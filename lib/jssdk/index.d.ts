/// <reference types="@types/wechat-miniprogram" />
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
export declare function toPay(payConfig: PayConfig): void;
export {};
