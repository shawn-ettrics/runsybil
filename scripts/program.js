// import { openSimplexNoise } from './simplexNoise.js';

const noiseInstance = openSimplexNoise(Date.now());
const noise3D = noiseInstance.noise3D;

const density = 'Ñ@#W$987210?!absgxf*;:+=-,._ ';

const program = {
    main: function(coord, context) {
        const t = context.time * 0.0002;
        const s = 0.03;
        const x = coord.x * s;
        const y = coord.y * s + t;
        const z = t;
        const noiseValue = noise3D(x, y, z);
        const i = Math.floor((noiseValue * 0.5 + 0.5) * density.length);
        return density[i];
    }
};
