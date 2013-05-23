'use strict';

function Mat4(stdlib, foreign, heap) {
    'use asm';

    var H = new stdlib.Float32Array(heap);

    var totalMatrices = 0;

    function identity() {
        var offset = 0;
        offset = (totalMatrices << 6)|0;
        totalMatrices = (totalMatrices + 1)|0;

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

var buffer = new ArrayBuffer(4096);
var array = new Float32Array(buffer);
var mod = Mat4(window, {}, buffer);

var dmat4 = {};

dmat4.identity = function() {
    var offset = mod.identity();
    return array.subarray(offset, offset + 16);
};

dmat4.create = dmat4.identity;
