import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'CircleDashedIcon',
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
    const ctxData = { ...ctx.$data,
      width: attrs.width || size,
      height: attrs.height || size
    };
    return _createVNode("svg", _mergeProps({
      "xmlns": "http://www.w3.org/2000/svg",
      "class": "icon icon-tabler icon-tabler-circle-dashed",
      "width": "24",
      "height": "24",
      "viewBox": "0 0 24 24",
      "stroke-width": "2",
      "stroke": "currentColor",
      "fill": "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, ctxData), [_createTextVNode("   "), _createVNode("path", {
      "stroke": "none",
      "d": "M0 0h24v24H0z",
      "fill": "none"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8.56 3.69a9 9 0 0 0 -2.92 1.95"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3.69 8.56a9 9 0 0 0 -.69 3.44"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3.69 15.44a9 9 0 0 0 1.95 2.92"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8.56 20.31a9 9 0 0 0 3.44 .69"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M15.44 20.31a9 9 0 0 0 2.92 -1.95"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20.31 15.44a9 9 0 0 0 .69 -3.44"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20.31 8.56a9 9 0 0 0 -1.95 -2.92"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M15.44 3.69a9 9 0 0 0 -3.44 -.69"
    }, null), _createTextVNode(" ")]);
  }

};