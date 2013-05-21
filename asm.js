'use strict';

function Mat4(stdlib, foreign, heap) {
    'use asm';

    var OP1_OFFSET = 0;
    var OP2_OFFSET = 16;
    var OP3_OFFSET = 32;
    var RESULT_OFFSET = 48;
    var TABLE_OFFSET = 256;

    var H = new stdlib.Float32Array(heap);

    var log = foreign.log;

    function getOffset(n) {
        n = n|0;
        return (256 + ((n|0) << 6))|0;
    };

    function identity(n) {
        n = n|0;

        var offset = 0;
        offset = getOffset(n|0)|0;

        H[((offset|0)) >> 2] = 1.0;
        H[((offset|0) + 4) >> 2] = 0.0;
        H[((offset|0) + 8) >> 2] = 0.0;
        H[((offset|0) + 12) >> 2] = 0.0;
        H[((offset|0) + 16) >> 2] = 0.0;
        H[((offset|0) + 20) >> 2] = 1.0;
        H[((offset|0) + 24) >> 2] = 0.0;
        H[((offset|0) + 28) >> 2] = 0.0;
        H[((offset|0) + 32) >> 2] = 0.0;
        H[((offset|0) + 36) >> 2] = 0.0;
        H[((offset|0) + 40) >> 2] = 1.0;
        H[((offset|0) + 44) >> 2] = 0.0;
        H[((offset|0) + 48) >> 2] = 0.0;
        H[((offset|0) + 52) >> 2] = 0.0;
        H[((offset|0) + 56) >> 2] = 0.0;
        H[((offset|0) + 60) >> 2] = 1.0;

        return ((offset|0) >> 2)|0;
    }

    return {
        identity: identity
    };
};

var buffer = new ArrayBuffer(65536);
var array = Float32Array(buffer);
var mod = Mat4(window, {log: function(a) {console.log(a); return 0;}}, buffer);

var dmat4 = {
    counter: 0
};

dmat4.identity = function() {
    var offset = mod.identity(dmat4.counter++);
//    if (dmat4.counter > 16384) dmat4.counter = 0;
    return array.subarray(offset, offset + 16);
};

dmat4.create = dmat4.identity;
