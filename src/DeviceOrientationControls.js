// DeviceOrientationControls.js

class DeviceOrientationControls {
    constructor(camera) {
        this.camera = camera;
        this.orientation = { alpha: 0, beta: 0, gamma: 0 };
        this.calibrationOffset = { alpha: 0, beta: 0, gamma: 0 };
        this.enabled = true;
        this.init();
    }

    init() {
        window.addEventListener('deviceorientation', this.onDeviceOrientationChange.bind(this));
    }

    onDeviceOrientationChange(event) {
        if (!this.enabled) return;

        // Apply calibration offsets
        this.orientation.alpha = event.alpha + this.calibrationOffset.alpha;
        this.orientation.beta = event.beta + this.calibrationOffset.beta;
        this.orientation.gamma = event.gamma + this.calibrationOffset.gamma;

        this.updateCamera();
    }

    updateCamera() {
        this.camera.rotation.set(
            THREE.MathUtils.degToRad(this.orientation.beta),
            THREE.MathUtils.degToRad(this.orientation.alpha),
            -THREE.MathUtils.degToRad(this.orientation.gamma)
        );
    }

    calibrate(offset) {
        this.calibrationOffset = offset;
    }

    enable() {
        this.enabled = true;
    }

    disable() {
        this.enabled = false;
    }
}

export default DeviceOrientationControls;