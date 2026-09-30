import * as THREE from "three";

export function createHeart() {

    const heartShape = new THREE.Shape();

    heartShape.moveTo(0, 0);

    heartShape.bezierCurveTo(0, 3, -4, 3, -4, 0);

    heartShape.bezierCurveTo(-4, -3, 0, -6, 0, -8);

    heartShape.bezierCurveTo(0, -6, 4, -3, 4, 0);

    heartShape.bezierCurveTo(4, 3, 0, 3, 0, 0);

    const geometry = new THREE.ExtrudeGeometry(heartShape, {
        depth: 1,
        bevelEnabled: true,
        bevelSegments: 5,
        steps: 2,
        bevelSize: 0.3,
        bevelThickness: 0.3
    });

    const material = new THREE.MeshPhysicalMaterial({

        color: 0xff3366,

        metalness: 0,

        roughness: 0,

        transmission: 1,

        thickness: 2,

        transparent: true,

        opacity: 1,

        clearcoat: 1,

        clearcoatRoughness: 0,

        ior: 1.5

    });

    const heart = new THREE.Mesh(geometry, material);

    heart.scale.set(0.5, 0.5, 0.5);
    return heart;
}