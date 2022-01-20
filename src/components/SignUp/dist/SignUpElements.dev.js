"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxContainer = exports.StyledCheckbox = exports.CheckboxIcon = exports.HiddenCheckbox = exports.Text = exports.FormButton = exports.FormInput = exports.FormLabel = exports.FormH1 = exports.Form = exports.FormContent = exports.Icon = exports.FormWrap = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  display: initial;\n  vertical-align: super;\n  margin-bottom: 10px;\n  padding: 5px;\n  color: #000;\n  width: 500px;\n  font-size: 14px;\n  text-align: left;\n  z-index: 5;\n\n  input {\n    margin-right: 10px;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  background: ", ";\n  border-radius: 3px;\n  transition: all 150ms;\n  ", ":focus + & {\n    box-shadow: 0 0 0 3px pink;\n  }\n\n  ", " {\n    visibility: ", ";\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  fill: none;\n  stroke: white;\n  stroke-width: 2px;\n  z-index: 5;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n  z-index: 5;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  margin-top: 24px;\n  color: #fff;\n  font-size: 14px;\n  font-family: \"Silka\", sans-serif;\n  z-index: 5;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  background: #007bff;\n  padding: 0px 0;\n  border: none;\n  border-radius: 4px;\n  color: #ffffff;\n  z-index: 5;\n  margin: 0 auto;\n  width: 100px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    background: #fff;\n    color: #000;\n    transition: 0.2s ease-in;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  padding: 8px;\n  margin-bottom: 1px;\n  border: 1px solid grey;\n  border-radius: 0px;\n  font-family: \"Silka\", sans-serif;\n  z-index: 5;\n  width: 80%;\n  \n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 8px;\n  font-size: 14px;\n  color: #000000;\n  font-family: \"Silka\", sans-serif;\n  z-index: 5;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 40px;\n  color: #000000;\n  font-size: 20px;\n  font-weight: 400;\n  text-align: center;\n  z-index: 5;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background: transparent;\n\n  /* backdrop-filter: blur(10px); */\n  max-width: fit-content;\n  height: 700px;\n  width: max-content;\n/* clip-path: inset(10em); */\n  /* filter: blur(5px); */\n  z-index: 1;\n  display: grid;\n  margin: 0 auto;\n  padding: 80px 32px;\n  border-radius: 4px;\n  box-shadow: none;\n  position: relative;\n  font-family: GalanoGrotesqueMedium;\n  /* filter: blur(80px); */\n  /* top: 80px; */\n  /* padding: 0px; */\n\n  background-attachment: fixed;\n\n  &::after {\n    /* width: 400px;\n  height: 550px; */\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background: inherit;\n\n    box-shadow: inset 200px rgba(225, 225, 225, 0.734);\n    filter: blur(1px);\n    z-index: 3;\n  }\n\n  @media screen and (max-width: 400px) {\n    padding: 32px 32px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  @media screen and (max-width: 480px) {\n    padding: 10px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 52px;\n  margin-top: 32px;\n  text-decoration: none;\n  color: #fff;\n  font-weight: 200;\n  font-size: 12px;\n\n  @media screen and (max-width: 480px) {\n    margin-left: 16px;\n    margin-top: 8px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-family: 'Silka', sans-serif;\n\n  @media screen and (max-width: 400px) {\n    height: 80%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-height: 9;\n  /* position: fixed; */\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 0;\n  overflow: hidden;\n  /* background-image: url(\"https://images.unsplash.com/photo-1629118938047-0f28bbe5af7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80\"); */\n  /* background: linear-gradient(126deg, rgba(235,235,235,1) 0%, rgba(242,242,242,1) 35%, rgba(199,199,199,1) 100%);  */\n  background-size: cover;\n  object-fit: contain;\n  background-repeat: no-repeat;\n  fill-opacity: 0.8;\n  background-attachment: fixed;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;

var FormWrap = _styledComponents["default"].div(_templateObject2());

exports.FormWrap = FormWrap;
var Icon = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject3());
exports.Icon = Icon;

var FormContent = _styledComponents["default"].div(_templateObject4());

exports.FormContent = FormContent;

var Form = _styledComponents["default"].div(_templateObject5());

exports.Form = Form;

var FormH1 = _styledComponents["default"].div(_templateObject6());

exports.FormH1 = FormH1;

var FormLabel = _styledComponents["default"].label(_templateObject7());

exports.FormLabel = FormLabel;

var FormInput = _styledComponents["default"].input(_templateObject8());

exports.FormInput = FormInput;

var FormButton = _styledComponents["default"].button(_templateObject9());

exports.FormButton = FormButton;

var Text = _styledComponents["default"].div(_templateObject10());

exports.Text = Text;

var HiddenCheckbox = _styledComponents["default"].input.attrs({
  type: "checkbox "
})(_templateObject11());

exports.HiddenCheckbox = HiddenCheckbox;

var CheckboxIcon = _styledComponents["default"].svg(_templateObject12());

exports.CheckboxIcon = CheckboxIcon;

var StyledCheckbox = _styledComponents["default"].div(_templateObject13(), function (props) {
  return props.checked ? "#000" : "#fff";
}, HiddenCheckbox, CheckboxIcon, function (props) {
  return props.checked ? "visible" : "hidden";
});

exports.StyledCheckbox = StyledCheckbox;

var CheckboxContainer = _styledComponents["default"].div(_templateObject14());

exports.CheckboxContainer = CheckboxContainer;