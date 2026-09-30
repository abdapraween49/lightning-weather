import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export function createControls(camera, renderer) {

    const controls = new OrbitControls(
        camera,
        renderer.domElement
    );

    controls.enableDamping = true;

    controls.dampingFactor = 0.05;

    controls.enablePan = false;

    controls.minDistance = 3;

    controls.maxDistance = 15;

    return controls;

}