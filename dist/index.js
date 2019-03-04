"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.y = exports.x = exports.C = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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
let x = new C();
exports.x = x;
let y = (0, _extends2.default)({}, {
  some: 'value'
});
exports.y = y;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJDIiwieCIsImdldFgiLCJzZXRYIiwibmV3VmFsIiwieSIsInNvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsQ0FBTixDQUFRO0FBQUE7QUFBQSxTQUNMQyxDQURLLEdBQ0QsRUFEQzs7QUFBQSxTQUViQyxJQUZhLEdBRU4sTUFBTSxLQUFLRCxDQUZMOztBQUFBLFNBR2JFLElBSGEsR0FHTEMsTUFBRCxJQUFvQjtBQUN6QixXQUFLSCxDQUFMLEdBQVNHLE1BQVQ7QUFDRCxLQUxZO0FBQUE7O0FBQUE7OztBQVFSLElBQUlILENBQUMsR0FBRyxJQUFJRCxDQUFKLEVBQVI7O0FBQ0EsSUFBSUssQ0FBQyw4QkFBTztBQUFDQyxFQUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFQLENBQUwiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQyB7XG4gIHByaXZhdGUgeCA9IDEwXG4gIGdldFggPSAoKSA9PiB0aGlzLnhcbiAgc2V0WCA9IChuZXdWYWw6IG51bWJlcikgPT4ge1xuICAgIHRoaXMueCA9IG5ld1ZhbFxuICB9XG59XG5cbmV4cG9ydCBsZXQgeCA9IG5ldyBDKClcbmV4cG9ydCBsZXQgeSA9IHsuLi57c29tZTogJ3ZhbHVlJ319XG4iXX0=