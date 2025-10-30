
"use strict";

let ServoMove = require('./ServoMove.js')
let SetPayload = require('./SetPayload.js')
let SetTcpFrame = require('./SetTcpFrame.js')
let GetFK = require('./GetFK.js')
let SetUserFrame = require('./SetUserFrame.js')
let Move = require('./Move.js')
let GetIO = require('./GetIO.js')
let ClearError = require('./ClearError.js')
let SetIO = require('./SetIO.js')
let ServoMoveEnable = require('./ServoMoveEnable.js')
let GetIK = require('./GetIK.js')
let SetCollision = require('./SetCollision.js')

module.exports = {
  ServoMove: ServoMove,
  SetPayload: SetPayload,
  SetTcpFrame: SetTcpFrame,
  GetFK: GetFK,
  SetUserFrame: SetUserFrame,
  Move: Move,
  GetIO: GetIO,
  ClearError: ClearError,
  SetIO: SetIO,
  ServoMoveEnable: ServoMoveEnable,
  GetIK: GetIK,
  SetCollision: SetCollision,
};
