import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'CalendarEventIcon',
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
      "class": "icon icon-tabler icon-tabler-calendar-event",
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
      "x": "4",
      "y": "5",
      "width": "16",
      "height": "16",
      "rx": "2"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "16",
      "y1": "3",
      "x2": "16",
      "y2": "7"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "8",
      "y1": "3",
      "x2": "8",
      "y2": "7"
    }, null), _createTextVNode("   "), _createVNode("line", {
      "x1": "4",
      "y1": "11",
      "x2": "20",
      "y2": "11"
    }, null), _createTextVNode("   "), _createVNode("rect", {
      "x": "8",
      "y": "15",
      "width": "2",
      "height": "2"
    }, null), _createTextVNode(" ")]);
  }

};