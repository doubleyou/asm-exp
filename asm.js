'use strict';

function Mat4(stdlib, foreign, heap) {
    'use asm';

    var M = new stdlib.Float32Array(heap);

    function identity() {
        M[0] = 1.0;
        M[1] = 0.0;
        M[2] = 0.0;
        M[3] = 0.0;
        M[4] = 0.0;
        M[5] = 1.0;
        M[6] = 0.0;
        M[7] = 0.0;
        M[8] = 0.0;
        M[9] = 0.0;
        M[10] = 1.0;
        M[11] = 0.0;
        M[12] = 0.0;
        M[13] = 0.0;
        M[14] = 0.0;
        M[15] = 1.0;
    };

    return {
        identity: identity
    };
};

var arr = new ArrayBuffer(4096);
var matMod = Mat4(window, {}, arr);

var mat4 = {
    identity: function() {
        new Float32Array(arr.slice(16 << 2));
    }
}
