import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ScanIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,

  render(ctx) {
    const size = parseInt(ctx.$props.size) + 'px';
    const attrs = ctx.$data.attrs || {};
    const data = { ...ctx.$data,
      width: attrs.width || size,
      height: attrs.height || size
    }; // const size = parseInt(ctx.props.size) + 'px';
    // const attrs = ctx.data.attrs || {};
    // attrs.width = attrs.width || size;
    // attrs.height = attrs.height || size;
    // ctx.data.attrs = attrs;

    return _createVNode("svg", _mergeProps({
      "xmlns": "http://www.w3.org/2000/svg",
      "class": "icon icon-tabler icon-tabler-scan",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24",
      "stroke-width": "2",
      "stroke": "currentColor",
      "fill": "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, ctx.data), [_createTextVNode("   "), _createVNode("path", {
      "stroke": "none",
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 7v-1a2 2 0 0 1 2 -2h2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 17v1a2 2 0 0 0 2 2h2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M16 4h2a2 2 0 0 1 2 2v1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M16 20h2a2 2 0 0 0 2 -2v-1"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "5",
      "y1": "12",
      "x2": "19",
      "y2": "12"
    }, null), _createTextVNode(" ")]);
  }

};