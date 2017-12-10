'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  display: inline-flex;\n  cursor: pointer;\n'], ['\n  display: inline-flex;\n  cursor: pointer;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents2.default.div(_templateObject);

Button.defaultProps = {
  onClick: _noop2.default
};

Button.propTypes = {
  onClick: _propTypes2.default.func
};

exports.default = function (props) {
  return _react2.default.createElement(Button, _extends({
    onClick: props.onClick,
    onKeyUp: function onKeyUp(e) {
      return [13, 32].includes(e.keyCode) && props.onClick(e);
    } // Press enter or space
    , role: 'button',
    tabIndex: 0
  }, props));
};

module.exports = exports['default'];