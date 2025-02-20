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
          appId: this.data.appId,
          openId: this.data.openId,
        });
        this.setData({ url });
      }
    },
    onLoad() {
      this.triggerEvent('load');
    },
    onError(event) {
      this.triggerEvent('error', event.detail);
    },
    onMessage(event) {
      this.triggerEvent('message', event.detail);
    },
  },
});
