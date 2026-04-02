import * as THREE from 'three';

// Create a shader material for the dynamic sky
const skyShader = new THREE.ShaderMaterial({
    uniforms: {
        "topColor": { value: new THREE.Color(0x0077ff) },
        "bottomColor": { value: new THREE.Color(0xffffff) },
        "offset": { value: 33.0 },
        "exponent": { value: 0.6 },
    },
    vertexShader: `
        varying vec3 vWorldPosition;
        varying vec3 vNormal;
        varying float vHeight;

        void main() {
            vNormal = normalize(normal);
            vec4 worldPosition = modelMatrix * vec4(position, 1.0);
            vWorldPosition = worldPosition.xyz;
            vHeight = normalize(worldPosition.xyz).y;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;

        varying vec3 vWorldPosition;
        varying float vHeight;

        void main() {
            vec3 color = mix(bottomColor, topColor, smoothstep(offset, offset + 1.0, vHeight));
            gl_FragColor = vec4(color, 1.0);
        }
    `
});

// Apply Rayleigh scattering
const updateSky = () => {
    const time = Date.now() * 0.001;
    skyShader.uniforms.topColor.value.copy(new THREE.Color(0x0077ff).multiplyScalar(Math.sin(time) * 0.5 + 0.5));
    skyShader.uniforms.bottomColor.value.copy(new THREE.Color(0xffffff));
};

export { skyShader, updateSky };