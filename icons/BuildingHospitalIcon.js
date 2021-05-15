import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'BuildingHospitalIcon',
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
      "class": "icon icon-tabler icon-tabler-building-hospital",
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
      "x1": "3",
      "y1": "21",
      "x2": "21",
      "y2": "21"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "10",
      "y1": "9",
      "x2": "14",
      "y2": "9"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "12",
      "y1": "7",
      "x2": "12",
      "y2": "11"
    }, null), _createTextVNode(" ")]);
  }

};