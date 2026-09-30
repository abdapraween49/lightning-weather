import { createControls } from "./controls.js";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { createHeart } from "./heart.js";

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg"),
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const controls = createControls(
    camera,
    renderer
);

// Background Color
scene.background = new THREE.Color(0x000010);

// ---------- STARS ----------

const starGeometry = new THREE.SphereGeometry(0.03, 12, 12);

const starMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff
});

for (let i = 0; i < 800; i++) {

    const star = new THREE.Mesh(
        starGeometry,
        starMaterial
    );
    star.position.x = (Math.random() - 0.5) * 120;
    star.position.y = (Math.random() - 0.5) * 120;
    star.position.z = (Math.random() - 0.5) * 120;

    scene.add(star);

}
// ---------- HEART ----------

const heart = createHeart();

heart.position.set(0, 0, 0);

scene.add(heart);

// Ambient Light

const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const light1 = new THREE.DirectionalLight(0xffffff, 3);
light1.position.set(5, 5, 5);
scene.add(light1);

const light2 = new THREE.DirectionalLight(0xff66aa, 2);
light2.position.set(-5, 2, 5);
scene.add(light2);

const light3 = new THREE.PointLight(0x66ccff, 15);
light3.position.set(0, 3, 5);
scene.add(light3);


// Animation

function animate() {

    requestAnimationFrame(animate);
    controls.update();

    scene.rotation.y += 0.0008;
    heart.rotation.y += 0.01;

    heart.rotation.x += 0.003;

    renderer.render(scene, camera);

}

animate();

// Resize

window.addEventListener("resize", () => {

    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

});