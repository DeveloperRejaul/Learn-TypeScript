"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.success = function (message) {
        console.log(message);
    };
    Log.danger = function (message) {
        console.log(message);
    };
    Log.info = function (message) {
        console.log(message);
    };
    return Log;
}());
exports.Log = Log;
