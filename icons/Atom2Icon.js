import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'Atom2Icon',
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
      "class": "icon icon-tabler icon-tabler-atom-2",
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
    }, null), _createTextVNode("   "), _createVNode("circle", {
      "cx": "12",
      "cy": "12",
      "r": "3"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "21",
      "x2": "12",
      "y2": "21.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "3",
      "y1": "9",
      "x2": "3",
      "y2": "9.01"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "21",
      "y1": "9",
      "x2": "21",
      "y2": "9.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8 20.1a9 9 0 0 1 -5 -7.1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M16 20.1a9 9 0 0 0 5 -7.1"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M6.2 5a9 9 0 0 1 11.4 0"
    }, null), _createTextVNode(" ")]);
  }

};