"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.y = exports.x = exports.C = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _wtf = require("./wtf");

console.log(_wtf.fucker);

class C {
  constructor() {
    this.x = 10;

    this.getX = () => this.x;

    this.setX = newVal => {
      this.x = newVal;
    };
  }

}

exports.C = C;
const x = new C();
exports.x = x;
const y = (0, _extends2.default)({}, {
  some: 'value'
});
exports.y = y;
var _default = 'fuck you';
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZnVja2VyIiwiQyIsIngiLCJnZXRYIiwic2V0WCIsIm5ld1ZhbCIsInkiLCJzb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBWjs7QUFLTyxNQUFNQyxDQUFOLENBQVE7QUFBQTtBQUFBLFNBQ0xDLENBREssR0FDRCxFQURDOztBQUFBLFNBRU5DLElBRk0sR0FFQyxNQUFNLEtBQUtELENBRlo7O0FBQUEsU0FHTkUsSUFITSxHQUdFQyxNQUFELElBQW9CO0FBQ2hDLFdBQUtILENBQUwsR0FBU0csTUFBVDtBQUNELEtBTFk7QUFBQTs7QUFBQTs7O0FBUVIsTUFBTUgsQ0FBQyxHQUFHLElBQUlELENBQUosRUFBVjs7QUFDQSxNQUFNSyxDQUFDLDhCQUFRO0FBQUVDLEVBQUFBLElBQUksRUFBRTtBQUFSLENBQVIsQ0FBUDs7ZUFFUSxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmdWNrZXJ9IGZyb20gJy4vd3RmJ1xuXG5jb25zb2xlLmxvZyhmdWNrZXIpXG5pbnRlcmZhY2UgRnVja2Vye1xuICB0ZXN0OiBzdHJpbmc7XG59XG4gXG5leHBvcnQgY2xhc3MgQyB7XG4gIHByaXZhdGUgeCA9IDEwXG4gIHB1YmxpYyBnZXRYID0gKCkgPT4gdGhpcy54XG4gIHB1YmxpYyBzZXRYID0gKG5ld1ZhbDogbnVtYmVyKSA9PiB7XG4gICAgdGhpcy54ID0gbmV3VmFsXG4gIH0gXG59XG4gXG5leHBvcnQgY29uc3QgeCA9IG5ldyBDKClcbmV4cG9ydCBjb25zdCB5ID0geyAuLi57IHNvbWU6ICd2YWx1ZScgfSB9XG4gXG5leHBvcnQgZGVmYXVsdCAnZnVjayB5b3UnIFxuIl19