import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'H2Icon',
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
      "class": "icon icon-tabler icon-tabler-h-2",
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
      "d": "M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 -.001"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 6v12"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M12 6v12"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M11 18h2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 18h2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M4 12h8"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 6h2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M11 6h2"
    }, null), _createTextVNode(" ")]);
  }

};