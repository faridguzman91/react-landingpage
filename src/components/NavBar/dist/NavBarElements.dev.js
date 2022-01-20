"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBtnLink = exports.NavBtn = exports.NavLinks = exports.NavItem = exports.NavMenu = exports.MobileIcon = exports.NavImage = exports.NavLogo = exports.NavBarContainer = exports.Nav = exports.Fonts = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _reactScroll = require("react-scroll");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\nfont-family: 'Lato', sans-serif;\n/* border-radius: 50px; */\nbackground:  #3392FF;\nwhite-space: nowrap;\npadding: 10px 22px;\ncolor: #ffffff;\nfont-size: 16px;\noutline: none;\nborder: none;\ncursor: pointer;\ntransition: all 0.2s ease-in-out;\ntext-decoration: none;\n\n&:hover {\n    transition: all 0.2s all ease-in-out;\n    background: #00aaff;\n    color: #2b2b2b;\n    border-radius: 1px solid black;\n    box-shadow: 0px 2px 2px #0000008b;\n}\n\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\nalign-items: center;\n\n@media screen and (max-width: 768px) {\n    display: none;\n}\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\ncolor: #000000;\ndisplay: flex;\nalign-items: center;\ntext-decoration: none;\npadding: 0 1rem;\nheight: 100%;\ncursor: pointer;\n\n&.active {\n    border-bottom: 5px solid #ffffff;\n    transition: 0.2s ease-in-out;\n    color: #ffffff;\n}\n    &:hover {\n        color: #464646;\n        /* border: 1px solid black; */\n        transition: 0.2s ease-in-out;\n    }\n\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\nheight: 80px;\ncolor: ", ";\ntransition: 0.2s ease-in-out;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\nfont-family: 'GalanoGrotesqueMedium', sans-serif;\ndisplay: flex;\njustify-content: end;\nalign-items: center;\nlist-style: none;\ntext-align: center;\n/* margin-right: 2px; */\nwidth: 50%;\n\n@media screen and (max-width: 768px) {\n    display: none;\n}\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\ndisplay: none;\n\n@media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 60%);\n    font-size: 1.8rem;\n    cursor: pointer;\n    color: #000000;\n}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\nbackground: url(\"\");\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nfont-family: 'GalanoGrotesqueMedium', sans-serif;\nfont-weight: 100;\ncolor: ", ";\njustify-self: flex-start;\ncursor: pointer;\nfont-size: 1.5 rem;\ndisplay: flex;\nalign-items: center;\nmargin-left: 24px;\nfont-weight: bold;\ntext-decoration: none;\nflex-wrap: nowrap;\nwidth: 320px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\njustify-content: space-between;\nheight: 80px;\nz-index: 100;\nwidth: 100%;\npadding: 0 24px;\nmax-width: 1100px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nfont-family: 'Lato', sans-serif;\nbackground: ", ";\nheight: 80px;\ncolor: ", ";\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nfont-size: 1rem;\nposition: sticky;\ntop: 0;\ntransition: 0.3s all ease;\nz-index: 10;\n\n@media screen and (max-width: 960px) {\n    transition: 0.8s all ease;\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @import url(\"https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap\");\n  @import url(\"https://fonts.googleapis.com/css2?family=Pangolin&display=swap\");\n  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,100&family=Montserrat:wght@300;400;500;600;700&display=swap');\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Fonts = _styledComponents["default"].div(_templateObject()); //$ variables dependant on Data.js property values


exports.Fonts = Fonts;

var Nav = _styledComponents["default"].nav(_templateObject2(), function (_ref) {
  var scrollNav = _ref.scrollNav;
  return scrollNav ? '#ffffffe2' : '#ffffff6e';
}, function (_ref2) {
  var scrollNav = _ref2.scrollNav;
  return scrollNav ? '#ffffff' : '#ffffff';
});

exports.Nav = Nav;

var NavBarContainer = _styledComponents["default"].div(_templateObject3());

exports.NavBarContainer = NavBarContainer;
var NavLogo = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject4(), function (_ref3) {
  var scrollNav = _ref3.scrollNav;
  return scrollNav ? '#3392FF' : '#3392FF';
});
exports.NavLogo = NavLogo;

var NavImage = _styledComponents["default"].img(_templateObject5());

exports.NavImage = NavImage;

var MobileIcon = _styledComponents["default"].div(_templateObject6());

exports.MobileIcon = MobileIcon;

var NavMenu = _styledComponents["default"].ul(_templateObject7());

exports.NavMenu = NavMenu;

var NavItem = _styledComponents["default"].li(_templateObject8(), function (_ref4) {
  var scrollNav = _ref4.scrollNav;
  return scrollNav ? '#ffffff' : 'transparent';
});

exports.NavItem = NavItem;
var NavLinks = (0, _styledComponents["default"])(_reactScroll.Link)(_templateObject9());
exports.NavLinks = NavLinks;

var NavBtn = _styledComponents["default"].nav(_templateObject10());

exports.NavBtn = NavBtn;
var NavBtnLink = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject11());
exports.NavBtnLink = NavBtnLink;