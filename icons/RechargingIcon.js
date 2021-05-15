import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'RechargingIcon',
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
      "class": "icon icon-tabler icon-tabler-recharging",
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
      "d": "M7.038 4.5a9 9 0 0 0 -2.495 2.47"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3.186 10.209a9 9 0 0 0 0 3.508"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4.5 16.962a9 9 0 0 0 2.47 2.495"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10.209 20.814a9 9 0 0 0 3.5 0"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M16.962 19.5a9 9 0 0 0 2.495 -2.47"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20.814 13.791a9 9 0 0 0 0 -3.508"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M19.5 7.038a9 9 0 0 0 -2.47 -2.495"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M13.791 3.186a9 9 0 0 0 -3.508 -.02"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 8l-2 4h4l-2 4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 21a9 9 0 0 0 0 -18"
    }, null), _createTextVNode(" ")]);
  }

};