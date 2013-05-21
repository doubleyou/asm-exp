'use strict';

function MatMath(stdlib, foreign, heap) {
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
var matMod = MatMath(window, {}, arr);

var dmat4 = {
    identity: function(m) {

        if (!m) {
            m = new Float32Array(16);
        }

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

        return m;
    },
    copy: function(m, r) {

        if (!r) {
            r = new Float32Array(16);
        }

        r[0] = m[0];
        r[1] = m[1];
        r[2] = m[2];
        r[3] = m[3];
        r[4] = m[4];
        r[5] = m[5];
        r[6] = m[6];
        r[7] = m[7];
        r[8] = m[8];
        r[9] = m[9];
        r[10] = m[10];
        r[11] = m[11];
        r[12] = m[12];
        r[13] = m[13];
        r[14] = m[14];
        r[15] = m[15];

        return r;
    }
};

dmat4.create = function() {
    return new Float32Array(arr.slice(16 << 2));
}
