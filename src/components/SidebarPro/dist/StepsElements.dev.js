"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.TextContainer = exports.StepsText = exports.StepsNumbers = exports.StepsCircles = exports.CircleContainer = exports.StepsWrapper = exports.StepsContainer = exports.Logo = exports.StepsToggle = exports.StepsTriangle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\nfont-family: 'Silka', sans-serif;\npadding: 16px;\nfont-size: 18px;\nmargin-bottom: 45px;\nposition: relative;\n\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\ngrid-area: 1 / 2 / 2 / 3; \ndisplay: flex;\nflex-direction: column; \nmargin: 0 auto;\n\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\nfont-family: 'Silka', sans-serif;\nfont-size: 16px;\ndisplay: flex;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\ncolor: ", ";\nfont-family: 'Silka', sans-serif;\n\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\n\njustify-content: center;\nalign-items: center;\nwidth: 50px;\nheight: 50px;\nborder-radius: 50%;\nbackground: ", ";\nmargin-bottom: 50px;\nbox-shadow: 0px 2px 2px #00000041;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\ngrid-area: 1 / 1 / 2 / 2; \ndisplay: flex;\nflex-direction: column;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\ndisplay: grid;\ngrid-template-columns: 0.2fr 1fr;\ngrid-template-rows: 1fr;\ngrid-column-gap: 0px;\ngrid-row-gap: 0px; \n/* top: 200px; */\nposition: relative;\npadding: 20px;\n\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n/* width: 20%; */\nwidth: ", ";\nheight: 100vh;\nbackground-color: #ffffffef;\nposition: relative;\nz-index:999;\ntop: 0;\nborder-right: 1px solid #b3b3b3;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nbackground-image: url('srccomponentsSidebarPrologologo_vierkant_blauw_wit.png');\nwidth: 100px;\nheight: 100px;\n"], ["\nbackground-image: url('src\\components\\SidebarPro\\logo\\logo_vierkant_blauw_wit.png');\nwidth: 100px;\nheight: 100px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nwidth: 40px;\nheight: 40px;\nbackground: #007bff;\nposition: absolute;\nborder-radius: 50px;\nright: -20px;\ntop: 40%;\ncolor: white;\nfont-size: 25px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ncursor: pointer;\nz-index: 100;\n\n&:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n    translate: scale(1.15);\n    \n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nwidth: 100%;\nheight: 0;\nborder-style: solid; \nborder-width: 10vw 20vw 0 0;\nborder-color: #007bff transparent transparent transparent;\nposition: relative;\nz-index: 999;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StepsTriangle = _styledComponents["default"].div(_templateObject());

exports.StepsTriangle = StepsTriangle;

var StepsToggle = _styledComponents["default"].div(_templateObject2());

exports.StepsToggle = StepsToggle;

var Logo = _styledComponents["default"].img(_templateObject3());

exports.Logo = Logo;

var StepsContainer = _styledComponents["default"].div(_templateObject4(), function (_ref) {
  var toggleBar = _ref.toggleBar;
  return toggleBar ? '20px' : '20%';
});

exports.StepsContainer = StepsContainer;

var StepsWrapper = _styledComponents["default"].div(_templateObject5());

exports.StepsWrapper = StepsWrapper;

var CircleContainer = _styledComponents["default"].div(_templateObject6());

exports.CircleContainer = CircleContainer;

var StepsCircles = _styledComponents["default"].div(_templateObject7(), function (_ref2) {
  var stepComplete = _ref2.stepComplete;
  return stepComplete ? '#3482e9' : '#fff';
});

exports.StepsCircles = StepsCircles;

var StepsNumbers = _styledComponents["default"].div(_templateObject8(), function (_ref3) {
  var stepComplete = _ref3.stepComplete;
  return stepComplete ? '#ffffff' : '#000000';
});

exports.StepsNumbers = StepsNumbers;

var StepsText = _styledComponents["default"].h1(_templateObject9());

exports.StepsText = StepsText;

var TextContainer = _styledComponents["default"].div(_templateObject10());

exports.TextContainer = TextContainer;

var Text = _styledComponents["default"].div(_templateObject11());

exports.Text = Text;