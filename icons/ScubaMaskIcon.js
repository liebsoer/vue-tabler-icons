import { mergeProps as _mergeProps, createTextVNode as _createTextVNode, createVNode as _createVNode } from "vue";
export default {
  name: 'ScubaMaskIcon',
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
      "class": "icon icon-tabler icon-tabler-scuba-mask",
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
      "d": "M4 7h12a1 1 0 0 1 1 1v4.5a2.5 2.5 0 0 1 -2.5 2.5h-.5a2 2 0 0 1 -2 -2a2 2 0 1 0 -4 0a2 2 0 0 1 -2 2h-.5a2.5 2.5 0 0 1 -2.5 -2.5v-4.5a1 1 0 0 1 1 -1z"
    }, null), _createTextVNode("   "), _createVNode("path", {
      "d": "M10 17a2 2 0 0 0 2 2h3.5a5.5 5.5 0 0 0 5.5 -5.5v-9.5"
    }, null), _createTextVNode(" ")]);
  }

};