'use strict';

function Mat4(stdlib, foreign, heap) {
//    'use asm';

    var H = new stdlib.Float32Array(heap);
    var I = new stdlib.Uint8Array(heap);

    function identity() {
        var offset = 0;
        offset = ((I[0]|0 + 16) << 6)|0;
        I[0] = I[0]|0 + 1;

        H[offset >> 2] = 1.0;
        H[(offset + 4) >> 2] = 0.0;
        H[(offset + 8) >> 2] = 0.0;
        H[(offset + 12) >> 2] = 0.0;
        H[(offset + 16) >> 2] = 0.0;
        H[(offset + 20) >> 2] = 1.0;
        H[(offset + 24) >> 2] = 0.0;
        H[(offset + 28) >> 2] = 0.0;
        H[(offset + 32) >> 2] = 0.0;
        H[(offset + 36) >> 2] = 0.0;
        H[(offset + 40) >> 2] = 1.0;
        H[(offset + 44) >> 2] = 0.0;
        H[(offset + 48) >> 2] = 0.0;
        H[(offset + 52) >> 2] = 0.0;
        H[(offset + 56) >> 2] = 0.0;
        H[(offset + 60) >> 2] = 1.0;

        return (offset >> 2)|0;
    }

    return {
        identity: identity
    };
};

var buffer = new ArrayBuffer(65536);
var array = new Float32Array(buffer);
var mod = Mat4(window, {}, buffer);

var dmat4 = {};

dmat4.identity = function() {
    var offset = mod.identity();
    return array.subarray(offset, offset + 16);
};

dmat4.create = dmat4.identity;

dmat4.identity();
