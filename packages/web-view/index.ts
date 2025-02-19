import { VhallComponent } from '../common/component';

VhallComponent({
  props: {
    src: {
      type: String,
      value: '',
    },
  },
  methods: {
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
