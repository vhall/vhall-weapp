import { VhallComponent } from '../common/component';
import { appendQueryParamsToPath } from '../common/utils';
VhallComponent({
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
        src() {
            this.loadUrl();
        },
    },
    methods: {
        loadUrl() {
            if (this.data.src) {
                const url = appendQueryParamsToPath(this.data.src, {
                    mch_app_id: this.data.appId,
                    open_id: this.data.openId,
                });
                this.setData({ url });
            }
        },
        onLoad() {
            this.triggerEvent('load', { url: this.data.url });
        },
        onError(event) {
            this.triggerEvent('error', event);
        },
        onMessage(event) {
            this.triggerEvent('message', event);
        },
    },
});
