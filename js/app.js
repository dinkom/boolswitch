/**
 * BoolSwitch - your Boolean algebra basics visualized
 *
 * https://github.com/dinkom/boolswitch
 *
 * User: Dinko Mihovilovic <dinko.mih@gmail.com>
 */

"use strict";

var options = {
	switchClassName: 'switch',
	lightClassName: 'light',
};

var boolSwitch = new BoolSwitch(options);
boolSwitch.bindEvents();
