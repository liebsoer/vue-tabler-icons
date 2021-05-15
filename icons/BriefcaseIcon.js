import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BriefcaseIcon',
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
      "class": "icon icon-tabler icon-tabler-briefcase",
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
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "3",
      "y": "7",
      "width": "18",
      "height": "13",
      "rx": "2"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "12",
      "x2": "12",
      "y2": "12.01"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 13a20 20 0 0 0 18 0"
    }, null), _createTextVNode(" ")]);
  }

};