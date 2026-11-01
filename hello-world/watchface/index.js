import { createWidget, widget, align } from '@zos/ui';

WatchFace({
  onInit() {
    console.log('index page.js on init invoke')
  },

  build() {
    createWidget(widget.TEXT, {
      x: 0,
      y: 200,
      w: 480,
      h: 80,
      text: 'Hello Mr. Buttz',
      color: 0xffffff,
      text_size: 36,
      align_h: align.CENTER_H,
      align_v: align.CENTER_V,
    })
  },

  onDestroy() {
    console.log('index page.js on destroy invoke')
  },
})
