import * as THREE from "three";

export const renderer = new THREE.WebGLRenderer({

    canvas: document.querySelector("#bg"),

    antialias: true

});

renderer.setSize(

    window.innerWidth,

    window.innerHeight

);

renderer.setPixelRatio(

    window.devicePixelRatio

);

