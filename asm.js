'use strict';

function Mat4(stdlib, foreign, heap) {
    'use asm';

    var OP1_OFFSET = 0;
    var OP2_OFFSET = 16;
    var OP3_OFFSET = 32;
    var RESULT_OFFSET = 48;
    var TABLE_OFFSET = 64;

    var H = new stdlib.Float32Array(heap);

    function identity(n) {
        n = n|0;

        var offset = TABLE_OFFSET|0 + (n|0 << 4);

        H[offset] = 1.0;
        H[offset + 1] = 0.0;
        H[offset + 2] = 0.0;
        H[offset + 3] = 0.0;
        H[offset + 4] = 0.0;
        H[offset + 5] = 1.0;
        H[offset + 6] = 0.0;
        H[offset + 7] = 0.0;
        H[offset + 8] = 0.0;
        H[offset + 9] = 0.0;
        H[offset + 10] = 1.0;
        H[offset + 11] = 0.0;
        H[offset + 12] = 0.0;
        H[offset + 13] = 0.0;
        H[offset + 14] = 0.0;
        H[offset + 15] = 1.0;

        return offset|0;
    }

    return {
        identity: identity
    };
};

var buffer = new ArrayBuffer(65536);
var array = Float32Array(buffer);
var mod = Mat4(window, {}, buffer);

var dmat4 = {
    counter: 0;
};

dmat4.identity = function() {
    var offset = mod.identity(dmat4.counter++);
    return array.subarray(offset, offset + 16);
};
