/* global teonet, $scope */

'use strict';
var util = require('util');
var ScriptBase = require('../script-base');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);

  // if the controller name is suffixed with ctrl, remove the suffix
  // if the controller name is just "ctrl," don't append/remove "ctrl"
  if (this.name && this.name.toLowerCase() !== 'ctrl' && this.name.substr(-4).toLowerCase() === 'ctrl') {
    this.name = this.name.slice(0, -4);
  }
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createControllerFiles = function createControllerFiles() {
    
    this.generateSourceAndTest(
      'controller',
      'spec/controller',
      'controllers',
      this.options['skip-add'] || false
    );

    // This is Teonet based controller, exit if teonet undefined
    if(!teonet || teonet.notLoaded) { return; }


    // \todo write yor code here and inside the eventCb function
  
  
    // ------------------------------------------------------------------------
    
    /**
     * Teonet event callback
     *
     * Original C function parameters:
     * void roomEventCb(ksnetEvMgrClass *ke, ksnetEvMgrEvents event, void *data, size_t data_len, void *user_data)
     *
     * @param {pointer} ke Pointer to ksnetEvMgrClass, see the http://repo.ksproject.org/docs/teonet/structksnetEvMgrClass.html
     * @param {int} ev Teonet event number, see the http://repo.ksproject.org/docs/teonet/ev__mgr_8h.html#ad7b9bff24cb809ad64c305b3ec3a21fe
     * @param {pointer} data Binary or string (depended on event) data
     * -param {int} dataLen Data length
     * -param {pointer} userData Additional poiner to User data
     *
     * @returns {int} If true then event is processed and will not send to other
     *                registerredcustom event callbacks
     */
    function eventCb(ke, ev, data) { //, dataLen, userData) {

        console.log('Custom event callback called');
        
        var rd;

        switch (ev) {
            
            // EV_K_RECEIVED #5 This host Received a data
            case teonet.ev.EV_K_RECEIVED:
                
                rd = new teonet.packetData(data);

                // Command
                switch (rd.cmd) {
                    
                    // Process Echo answer #66 command
                    case teonet.api.CMD_ECHO_ANSWER:
                        console.log('Echo answer command event received');
                        break;
                    
                    // Process User #129 command
                    case teonet.api.CMD_USER:
                        console.log('Echo answer command event received');
                        break;

                    default: break;
                } 
                break;
                
            // EV_A_INTERVAL #27 Angular interval event happened    
            case teonet.ev.EV_A_INTERVAL:
                
                console.log('Teonet controller interval event received');
                break;
            
            default: break;
        }
        
        return 0;
    }

    // Start processing teonet controller
    teonet.processing($scope, eventCb, 1000, function() {
        console.log('Start processing teonet controller');
    });  
};
