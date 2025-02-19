"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
(0, component_1.VhallComponent)({
    props: {
        src: {
            type: String,
            value: '',
        },
    },
    methods: {
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
