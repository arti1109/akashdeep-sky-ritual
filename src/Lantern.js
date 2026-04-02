// Lantern.js

class Lantern {
    constructor(color, intensity) {
        this.color = color;
        this.intensity = intensity;
        this.material = this.createMaterial();
    }

    createMaterial() {
        // Create a PBR material with subsurface scattering
        const material = new THREE.MeshStandardMaterial({
            color: this.color,
            metalness: 0.5,
            roughness: 0.4,
            emissive: this.color,
            emissiveIntensity: this.intensity,
        });

        // Adding subsurface scattering
        material.subsurface = true;
        material.subsurfaceColor = new THREE.Color(0xffffff);  // Change this if you want a different subsurface color
        material.subsurfaceIntensity = 0.8;
        return material;
    }

    // Other methods can be defined here
}

export default Lantern;