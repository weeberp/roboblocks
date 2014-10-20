'use strict';
/* global Blockly, JST, RoboBlocks */
/* jshint sub:true */

/**
 * serial_available code generation
 * @return {String} Code generated with block parameters
 */
Blockly.Arduino.bt_serial_available = function() {
	var branch = Blockly.Arduino.statementToCode(this, 'DO');
	var code = JST['bt_serial_available']({
		'branch' : branch
	});
	return code;
};

/**
 * serial_available block definition
 * @type {Object}
 */
Blockly.Blocks.bt_serial_available = {
	category: RoboBlocks.LANG_CATEGORY_COMMUNICATION,
	helpUrl: RoboBlocks.GITHUB_SRC_URL+'blocks/bt_serial_available',
	 /**
	  * bt_serial_available initialization
	  */
	init: function() {
		this.setColour(RoboBlocks.LANG_COLOUR_COMMUNICATION);
		this.appendDummyInput()
			.appendField(RoboBlocks.LANG_ADVANCED_BT_SERIAL_AVAILABLE);
		this.appendStatementInput('DO')
			.appendField(RoboBlocks.LANG_CONTROLS_REPEAT_INPUT_DO);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip(RoboBlocks.LANG_ADVANCED_BT_SERIAL_AVAILABLE_TOOLTIP);
	}
};