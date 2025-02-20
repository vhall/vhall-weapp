"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
var utils_1 = require("../common/utils");
(0, component_1.VhallComponent)({
    props: {
        src: {
            type: String,
            value: '',
        },
        appId: String,
        openId: String,
    },
    data: {
        url: '',
    },
    watch: {
        src: function () {
            this.loadUrl();
        },
    },
    methods: {
        loadUrl: function () {
            if (this.data.src) {
                var url = (0, utils_1.appendQueryParamsToPath)(this.data.src, {
                    mch_app_id: this.data.appId,
                    open_id: this.data.openId,
                });
                this.setData({ url: url });
            }
        },
        onLoad: function () {
            this.triggerEvent('load');
        },
        onError: function (event) {
            this.triggerEvent('error', event.detail);
        },
        onMessage: function (event) {
            this.triggerEvent('message', event.detail);
        },
    },
});
