import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

// Create the Effect Composer
const composer = new EffectComposer(renderer);

// Set up the Unreal Bloom Pass
const bloomPass = new UnrealBloomPass();
composer.addPass(bloomPass);

// Usage of composer in a render loop
function render() {
  composer.render();
}

export { composer };