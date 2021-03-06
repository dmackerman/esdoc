var callInfo = require('./MyPlugin1.js').callInfo;

exports.onStart = function(ev) {
  callInfo.handlerNames.onStart.push('MyPlugin2');
};

exports.onHandleConfig = function(ev) {
  callInfo.handlerNames.onHandleConfig.push('MyPlugin2');
};

exports.onHandleCode = function(ev) {
  callInfo.handlerNames.onHandleCode.push('MyPlugin2');
};

exports.onHandleCodeParser = function(ev) {
  callInfo.handlerNames.onHandleCodeParser.push('MyPlugin2');
};

exports.onHandleAST = function(ev) {
  callInfo.handlerNames.onHandleAST.push('MyPlugin2');
};

exports.onHandleTag = function(ev) {
  callInfo.handlerNames.onHandleTag.push('MyPlugin2');
};

exports.onHandleHTML = function(ev) {
  callInfo.handlerNames.onHandleHTML.push('MyPlugin2');
};

exports.onComplete = function(ev) {
  callInfo.handlerNames.onComplete.push('MyPlugin2');
};
