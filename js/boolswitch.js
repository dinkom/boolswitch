/**
 * BoolSwitch - your Boolean algebra basics visualized
 *
 * https://github.com/dinkom/boolswitch
 *
 * User: Dinko Mihovilovic <dinko.mih@gmail.com>
 */

"use strict";

var BoolSwitch = function(ops) {
	var self = this;
	this.switchClassName = ops.switchClassName;
	this.lightClassName = ops.lightClassName;

	this.bindEvents = function() {
		$('.' + self.switchClassName).click(function() {
			self.switchStateChanged(this);
		});
	};

	this.switchStateChanged = function(btn) {
		if ($(btn).hasClass('on')) {
			$(btn).removeClass('on');
			if ($(btn).hasClass('switch-not')) {
				$(btn).parent().parent().find('.light img').removeClass('no-signal');
			}
			else if ($(btn).hasClass('switch-and')) {
				$(btn).parent().parent().find('.light img').addClass('no-signal');
			}
			else if ($(btn).hasClass('switch-or')) {
				var any = false;
				$.each($('.switch-or'), function(i, val) {
					if ($(val).hasClass('on')) {
						any = true;
						return;
					}
				});
				if (!any) {
					$(btn).parent().parent().find('.light img').addClass('no-signal');
				}
			}
			else {
				var count = 0;
				$.each($('.switch-xor'), function(i, val) {
					if ($(val).hasClass('on')) {
						++count;
					}
				});
				if (count == 1) {
					$(btn).parent().parent().find('.light img').removeClass('no-signal');
				}
				else {
					$(btn).parent().parent().find('.light img').addClass('no-signal');
				}
			}
		}
		else {
			$(btn).addClass('on');
			if ($(btn).hasClass('switch-not')) {
				$(btn).parent().parent().find('.light img').addClass('no-signal');
			}
			else if ($(btn).hasClass('switch-and')) {
				var all = true;
				$.each($('.switch-and'), function(i, val) {
					if (!$(val).hasClass('on')) {
						all = false;
						return;
					}
				});
				if (all) {
					$(btn).parent().parent().find('.light img').removeClass('no-signal');
				}
			}
			else if ($(btn).hasClass('switch-or')) {
				$(btn).parent().parent().find('.light img').removeClass('no-signal');
			}
			else {
				var count = 0;
				$.each($('.switch-xor'), function(i, val) {
					if ($(val).hasClass('on')) {
						++count;
					}
				});
				if (count == 1) {
					$(btn).parent().parent().find('.light img').removeClass('no-signal');
				}
				else {
					$(btn).parent().parent().find('.light img').addClass('no-signal');
				}
			}
		}
	};
};
