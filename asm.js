'use strict';

function Mat4(stdlib, foreign, heap) {
    'use asm';

    var H = new stdlib.Float32Array(heap);
    var I = new stdlib.Uint8Array(heap);

    var sqrt = stdlib.Math.sqrt;
    var abs = stdlib.Math.abs;
    var sin = stdlib.Math.sin;
    var cos = stdlib.Math.cos;

    /**
        Input parameters:
        0 - matrix number (uint32)
        4-67 - floats (floats, matrix, vector, etc) (float32)

        mat4 counter - 255 (uint32)
        mat4 offset - 256
     */

    function rotate() {
        var n = 0;
        var offset = 0;
        var angle = 0.0;
        var x = 0.0, y = 0.0, z = 0.0;
        var len = 0.0;
        var s = 0.0, c = 0.0, t = 0.0;
        var a00 = 0.0, a01 = 0.0, a02 = 0.0, a03 = 0.0,
            a10 = 0.0, a11 = 0.0, a12 = 0.0, a13 = 0.0,
            a20 = 0.0, a21 = 0.0, a22 = 0.0, a23 = 0.0;
        var b00 = 0.0, b01 = 0.0, b02 = 0.0,
            b10 = 0.0, b11 = 0.0, b12 = 0.0,
            b20 = 0.0, b21 = 0.0, b22 = 0.0;

        n = I[0]|0;
        angle = +H[1];
        x = +H[2];
        y = +H[3];
        z = +H[4];

        len = +sqrt(+x * +x + +y * +y + +z * +z);

        if (+abs(len) < 0.000001) {
            return 0;
        }

        x = +(+x / +len);
        y = +(+y / +len);
        z = +(+z / +len);

        s = +sin(angle);
        c = +cos(angle);
        t = +(1.0 - c);

        offset = ((I[255]|0 + 256) << 6)|0;

        a00 = +H[offset >> 2];
        a01 = +H[(offset + 4) >> 2];
        a02 = +H[(offset + 8) >> 2];
        a03 = +H[(offset + 12) >> 2];
        a10 = +H[(offset + 16) >> 2];
        a11 = +H[(offset + 20) >> 2];
        a12 = +H[(offset + 24) >> 2];
        a13 = +H[(offset + 28) >> 2];
        a20 = +H[(offset + 32) >> 2];
        a21 = +H[(offset + 36) >> 2];
        a22 = +H[(offset + 40) >> 2];
        a23 = +H[(offset + 44) >> 2];

        b00 = +(+x * +x * +t + +c);
        b01 = +(+y * +x * +t + +z * +s);
        b02 = +(+z * +x * +t - +y * +s);
        b10 = +(+x * +y * +t - +z * +s);
        b11 = +(+y * +y * +t + +c);
        b12 = +(+z * +y * +t + +x * +s);
        b20 = +(+x * +z * +t + +y * +s);
        b21 = +(+y * +z * +t - +x * +s);
        b22 = +(+z * +z * +t + +c);

        H[offset >> 2] = +(a00 * b00 + a10 * b01 + a20 * b02);
        H[(offset + 4) >> 2] = +(a01 * b00 + a11 * b01 + a21 * b02);
        H[(offset + 8) >> 2] = +(a02 * b00 + a12 * b01 + a22 * b02);
        H[(offset + 12) >> 2] = +(a03 * b00 + a13 * b01 + a23 * b02);
        H[(offset + 16) >> 2] = +(a00 * b10 + a10 * b11 + a20 * b12);
        H[(offset + 20) >> 2] = +(a01 * b10 + a11 * b11 + a21 * b12);
        H[(offset + 24) >> 2] = +(a02 * b10 + a12 * b11 + a22 * b12);
        H[(offset + 28) >> 2] = +(a03 * b10 + a13 * b11 + a23 * b12);
        H[(offset + 32) >> 2] = +(a00 * b20 + a10 * b21 + a20 * b22);
        H[(offset + 36) >> 2] = +(a01 * b20 + a11 * b21 + a21 * b22);
        H[(offset + 40) >> 2] = +(a02 * b20 + a12 * b21 + a22 * b22);
        H[(offset + 44) >> 2] = +(a03 * b20 + a13 * b21 + a23 * b22);

        return 1;
    };

    function identity() {
        var offset = 0;
        offset = ((I[255]|0 + 256) << 6)|0;
        I[255] = I[255]|0 + 1;

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
    };

    return {
        identity: identity,
        rotate: rotate
    };
};

var buffer = new ArrayBuffer(65536);
var array = new Float32Array(buffer);
var ints = new Uint8Array(buffer);
var mod = Mat4(window, {}, buffer);

var dmat4 = {};

dmat4.identity = function() {
    var offset = mod.identity();
    return array.subarray(offset, offset + 16);
};

dmat4.rotate= function(n, angle, vector) {
    ints[0] = n;
    array[1] = angle;
    array[2] = vector[0];
    array[3] = vector[1];
    array[4] = vector[2];

    return mod.rotate();
};

dmat4.create = dmat4.identity;
