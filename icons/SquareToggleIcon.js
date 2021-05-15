import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'SquareToggleIcon',
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
      "class": "icon icon-tabler icon-tabler-square-toggle",
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
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "2",
      "x2": "12",
      "y2": "22"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M20 6a2 2 0 0 0 -2 -2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M18 20a2 2 0 0 0 2 -2"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "20",
      "y1": "10",
      "x2": "20",
      "y2": "14"
    }, null), _createTextVNode(" ")]);
  }

};