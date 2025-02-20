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
  created() {
    this.setData({
      url: this.packUrl(),
    });
  },
  methods: {
    packUrl() {
      // TODO：包装url
      return appendQueryParamsToPath(this.src, {});
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
