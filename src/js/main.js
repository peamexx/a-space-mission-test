var ASM = ASM || {};

(function() {
    if(typeof exports !== 'undefined') {
        ASM = exports;
    } else {
        ASM = this.ASM = {};
    }

    ASM.deck = {};
    ASM.version = '0.0.1';
    ASM.controller = {};
    ASM.settings = {
        timer: false,
        x: undefined,
        y: undefined,
        lines: [],
        promises: [],
    };
})();