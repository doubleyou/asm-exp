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

var dmat4 = {
    create: function() {
        new Float32Array(arr.slice(0, 16 << 2));
    },
    identity: function(m) {
        m[0] = 1.0;
        m[1] = 0.0;
        m[2] = 0.0;
        m[3] = 0.0;
        m[4] = 0.0;
        m[5] = 1.0;
        m[6] = 0.0;
        m[7] = 0.0;
        m[8] = 0.0;
        m[9] = 0.0;
        m[10] = 1.0;
        m[11] = 0.0;
        m[12] = 0.0;
        m[13] = 0.0;
        m[14] = 0.0;
        m[15] = 1.0;
    }
}
