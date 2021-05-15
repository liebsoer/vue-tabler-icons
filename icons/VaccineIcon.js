import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'VaccineIcon',
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
      "class": "icon icon-tabler icon-tabler-vaccine",
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
      "d": "M17 3l4 4"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M19 5l-4.5 4.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M11.5 6.5l6 6"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M7.5 12.5l1.5 1.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10.5 9.5l1.5 1.5"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M3 21l3 -3"
    }, null), _createTextVNode(" ")]);
  }

};