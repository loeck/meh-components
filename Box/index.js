'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  align-items: ', ';\n  display: flex;\n  flex-direction: ', ';\n  flex-grow: ', ';\n  justify-content: ', ';\n  ', ' overflow: ', ';\n  padding: ', ';\n  position: ', ';\n\n  > * + * {\n    margin-left: ', ';\n    margin-top: ', ';\n  }\n'], ['\n  align-items: ', ';\n  display: flex;\n  flex-direction: ', ';\n  flex-grow: ', ';\n  justify-content: ', ';\n  ', ' overflow: ', ';\n  padding: ', ';\n  position: ', ';\n\n  > * + * {\n    margin-left: ', ';\n    margin-top: ', ';\n  }\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = _styledComponents2.default.div(_templateObject, function (p) {
  return p.align;
}, function (p) {
  return !p.horizontal && 'column';
}, function (p) {
  return p.grow && 1;
}, function (p) {
  return p.justify;
}, function (p) {
  return p.sticky && '\n    bottom: 0;\n    left: 0;\n    right: 0;\n    top: 0;\n  ';
}, function (p) {
  return p.scrollable && 'auto';
}, function (p) {
  return p.padding && p.padding + 'px';
}, function (p) {
  return p.relative ? 'relative' : p.sticky && 'absolute';
}, function (p) {
  return p.horizontal && p.flow && p.flow + 'px';
}, function (p) {
  return !p.horizontal && p.flow && p.flow + 'px';
});

Box.propTypes = {
  align: _propTypes2.default.string,
  flow: _propTypes2.default.number,
  grow: _propTypes2.default.bool,
  horizontal: _propTypes2.default.bool,
  justify: _propTypes2.default.string,
  padding: _propTypes2.default.number,
  relative: _propTypes2.default.bool,
  scrollable: _propTypes2.default.bool,
  sticky: _propTypes2.default.bool
};

exports.default = Box;
module.exports = exports['default'];