import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'LineHeightIcon',
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
      "class": "icon icon-tabler icon-tabler-line-height",
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
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "3 8 6 5 9 8"
    }, null), _createTextVNode("   "), _createVNode("polyline", {
      "points": "3 16 6 19 9 16"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "6",
      "y1": "5",
      "x2": "6",
      "y2": "19"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "13",
      "y1": "6",
      "x2": "20",
      "y2": "6"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "13",
      "y1": "12",
      "x2": "20",
      "y2": "12"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "13",
      "y1": "18",
      "x2": "20",
      "y2": "18"
    }, null), _createTextVNode(" ")]);
  }

};