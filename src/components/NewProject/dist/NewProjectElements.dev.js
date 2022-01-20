"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectCard = exports.ProjectsCardsContainer = exports.ProjectsWrapperTitle = exports.ProjectsWrapper = exports.UploadFormButton = exports.Text = exports.FormButton = exports.FormInput3 = exports.FormInput2 = exports.FormInput1 = exports.FormLabel3 = exports.FormLabel2 = exports.FormLabel1 = exports.FormNewProject = exports.FormName = exports.FormH1 = exports.Form = exports.FormContent = exports.Icon = exports.FormWrap = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\npadding: 2%;\n/* flex-grow: 1; */\n\ndisplay: flex;\nheight: 280px;\nwidth: 40px;\nborder: 1px solid gray;\nflex: 0 1 25%;\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\nflex-wrap: wrap;\njustify-content: space-space-evenly;\nalign-items: center;\nmargin-top: 50px;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\nfont-family: GalanoGrotesqueMedium;\nfont-size: 20px;\nposition: relative;\ntop: 1px;\nleft: 1px;\nmargin-top: 10px;\npadding: ;\n\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\ntop: 100px;\nheight: max-content;\nmargin-top: 10px;\nmargin-bottom: 100px;\nwidth: 70vw;\nposition: relative;\nbackground-color: transparent;\n\njustify-content: flex-start;\nalign-items: flex-start;\npadding: 1px;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\nbackground: #fff;\npadding: 16px ;\nfont-size: 2rem;\ndisplay: flex;\nmargin-right: 20px;\npadding: 20px;\ncursor: pointer;\njustify-content: center;\nalign-items: center;\nborder: none;\nborder-radius: 4px;\ncolor: #000;\nmargin-bottom: 20px;\nwidth: max-content;\n/* height: 80px; */\n\n&:hover {\n    background: #007bff;\n    color: white;\n    transition: 0.1s ease-in\n}\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  margin-top: 24px;\n  color: #fff;\n  font-size: 14px;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  grid-area: 2 / 3 / 3 / 4;\n  background: #007bff;\n  padding: 16px;\n  border: none;\n  /* border-radius: 4px; */\n  cursor: pointer;\n  color: #ffffff;\n  font-size: 16px;\n  width: max-content;\n  Position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:hover {\n    background: #fff;\n    color: #000;\n     transition: 0.1s ease-in\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  padding: 16px 16px;\n  margin-bottom: 32px;\n  border: none;\n  border-radius: 8px;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  padding: 8px;\n  margin-bottom: 32px;\n  border: none;\n  margin: 0 auto;\n  /* border-radius: 8px; */\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  padding: 8px;\n  margin-bottom: 32px;\n  border: none;\n  margin: 0 auto;\n  /* border-radius: 8px; */\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\ngrid-area: 1 / 3 / 2 / 4;\n display: flex;\n justify-content: center;\n align-items: center;\n  /* margin-bottom: 8px; */\n  font-size: 14px;\n  color: #000000;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n grid-area: 1 / 2 / 2 / 3;\n  display: flex;\n justify-content: center;\n align-items: center;\n/*\n  margin-bottom: 8px; */\n  font-size: 14px;\n  color: #000000;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n grid-area: 1 / 1 / 2 / 2;\n display: flex;\n justify-content: center;\n align-items: center;\n  /* margin-bottom: 8px; */\n  font-size: 14px;\n  color: #000000;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 40px;\n  color: #000000;\n  font-size: 20px;\n  font-weight: 400;\n  text-align: center;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\nposition: relative;\npadding: 20px;\nfont-family: GalanoGrotesqueMedium;\ntop: 80px;\n/* margin-bottom: 100px; */\nbackground: #e1e1e1;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 40px;\n  color: #000000;\n  font-size: 20px;\n  font-weight: 400;\n  text-align: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background: #e1e1e1;\n  /* max-width: fit-content; */\n  height: auto;\n  width: 70vw;\n  z-index: 1;\n  padding: 20px;\n\n  display: grid;\ngrid-template-columns: repeat(3, 1fr);\ngrid-template-rows: repeat(2, 1fr);\ngrid-column-gap: 0px;\ngrid-row-gap: 0px;\n  margin: 0 auto;\n\n  border-radius: 4px;\n box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);\n  position: relative;\n  top: 80px;\n   background-attachment: fixed;\n\n\n  @media screen and (max-width: 400px) {\n    padding: 32px 32px;\n  }\n"]);

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
  var data = _taggedTemplateLiteral(["\n  /* height: 100%; */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  @media screen and (max-width: 400px) {\n    height: 80%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  /* min-height: 98vh; */\n  /* position: fixed; */\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow-y: hidden;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: 0;\n  overflow: hidden;\n  background: #f7f7f7;\n  /* background-image: url('https://images.unsplash.com/photo-1557243962-5a60796cd474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');\n  background-size: cover; */\nobject-fit: contain;\nbackground-repeat: no-repeat;\nfill-opacity: 0.8;\nfont-family: 'GalanoGrotesqueMedium', sans-serif;\n\n\n"]);

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

var FormName = _styledComponents["default"].h1(_templateObject7());

exports.FormName = FormName;

var FormNewProject = _styledComponents["default"].div(_templateObject8());

exports.FormNewProject = FormNewProject;

var FormLabel1 = _styledComponents["default"].label(_templateObject9());

exports.FormLabel1 = FormLabel1;

var FormLabel2 = _styledComponents["default"].label(_templateObject10());

exports.FormLabel2 = FormLabel2;

var FormLabel3 = _styledComponents["default"].label(_templateObject11());

exports.FormLabel3 = FormLabel3;

var FormInput1 = _styledComponents["default"].input(_templateObject12());

exports.FormInput1 = FormInput1;

var FormInput2 = _styledComponents["default"].input(_templateObject13());

exports.FormInput2 = FormInput2;

var FormInput3 = _styledComponents["default"].input(_templateObject14());

exports.FormInput3 = FormInput3;

var FormButton = _styledComponents["default"].button(_templateObject15());

exports.FormButton = FormButton;

var Text = _styledComponents["default"].div(_templateObject16());

exports.Text = Text;

var UploadFormButton = _styledComponents["default"].div(_templateObject17());

exports.UploadFormButton = UploadFormButton;

var ProjectsWrapper = _styledComponents["default"].div(_templateObject18());

exports.ProjectsWrapper = ProjectsWrapper;

var ProjectsWrapperTitle = _styledComponents["default"].h1(_templateObject19());

exports.ProjectsWrapperTitle = ProjectsWrapperTitle;

var ProjectsCardsContainer = _styledComponents["default"].div(_templateObject20());

exports.ProjectsCardsContainer = ProjectsCardsContainer;

var ProjectCard = _styledComponents["default"].div(_templateObject21());

exports.ProjectCard = ProjectCard;