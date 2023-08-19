import{l as t,m as r,F as o,p as n,S as e,ar as a}from"./runtime-dom.esm-bundler-de9a16b0.js";import{_ as s}from"./plugin-vueexport-helper-c27b6911.js";const i={},l=n("h1",null,"this is a test",-1),d=n("pre",null,[e("    "),n("code",{style:{color:"#fff",position:"relative",left:"250px"}},`
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBEloader";
import { Water } from "three/examples/jsm/objects/Water";


const textureLoader = new THREE.TextureLoader();
var goldCol = textureLoader.load("../textures/Gold/GoldCol.png")
var goldDisp = textureLoader.load("../textures/Gold/GoldDisp.png")
var goldMetalness = textureLoader.load("../textures/Gold/GoldMetalness.png")
var goldNrm = textureLoader.load("../textures/Gold/GoldNrm.png")
var goldRoughness = textureLoader.load("../textures/Gold/GoldRoughness.png")


const scene = new THREE.Scene();


//Light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(10,0,0);
scene.add(directionalLight);


const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);


//Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
);
camera.position.z = 3;


//Renderer
const renderer = new THREE.WebGLRenderer();

renderer.setSize(
    window.innerWidth,
    window.innerHeight);
renderer.castShadow = true;

    
document.body.appendChild(renderer.domElement)

renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.castShadow = true;




var loader = new STLLoader();

//lantern
const material2 = new THREE.MeshPhysicalMaterial({
    color: 0xff0000,
    
    metalness: 0,
    roughness: 1,
    transparent: true,
    opacity: 1,
    transmission:4,
    side :THREE.DoubleSide,
    shading: THREE.SmoothShading
    
    
})
loader.load(
    "../public/model/lantern.stl",
    function (geometry) {
        const mesh = new THREE.Mesh(geometry, material2);
        mesh.position.set( 0, 0.65, 0 );
        mesh.scale.set(0.1,0.1,0.1);
        mesh.rotation.set(-1.57,0,0);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        
        scene.add(mesh);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)


//metal
const lanternRingMatrial = new THREE.MeshPhysicalMaterial({
    
    
    color:0Xffbb00,
    metalness: 0.5,
    
    roughness: 0.7,
    clearcoat: 0.35,
    clearcoatRoughness:0.29,
    transparent: false,

    side :THREE.DoubleSide
 
})
loader.load(
    "../public/model/metal.stl",
    function (geometry) {
        const mesh = new THREE.Mesh(geometry, lanternRingMatrial);
        mesh.position.set( 0, 0.65, 0 );
        mesh.scale.set(.1,.1,.1);
        mesh.rotation.set(-1.57,0,0);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)



//string
const stringMatrial = new THREE.MeshPhysicalMaterial({
    color: 0xff0000,
    metalness: 0,
    roughness: 1,
    flatShading: true,
    
})

loader.load(
    "../public/model/string.stl",
    function (geometry) {
        const mesh = new THREE.Mesh(geometry, stringMatrial);
        mesh.position.set( 0, 0.65, 0 );
        mesh.scale.set(0.1,0.1,0.1);
        mesh.rotation.set(-1.57,0,0);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)



//flower
const flowerMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xff0000,
    metalness: 0,
    roughness: 1,
    
        
    
})


loader.load(
    "../public/model/flower.stl",
    function (geometry) {
        const mesh = new THREE.Mesh(geometry, stringMatrial);
        mesh.position.set( 0, 0.65, 0 );
        mesh.scale.set(0.1,0.1,0.1);
        mesh.rotation.set(-1.57,0,0);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)


const water = new Water(new THREE.PlaneGeometry(1000,1000) , {
    textureWidth: 512,
    textureHeight: 512,
    waterNormals: new THREE.TextureLoader().load( '../textures/Water/waternormals.jpg', ( texture )=> {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    } ),
    sunDirection: new THREE.Vector3(),
	sunColor: 0xffffff,
	waterColor: 0X00032e,
    distortionScale: 2,
    
});
water.rotation.x = -1.57;
water.position.set(0,-10,0)
scene.add(water);


//Lighter
const sphereGeometry = new THREE.SphereGeometry(0.2,30,30);
const sphereMaterial = new THREE.MeshBasicMaterial({color:0xffffff});
const sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
sphere.position.set(0,1.5,0);
let pointLight = new THREE.PointLight(0xffffff,1);
sphere.add(pointLight);
scene.add(sphere);



//Stars
for (let i = 0; i < 200; i++) {
    var spriteMaterial = new THREE.SpriteMaterial({
        color: 0xffffff
    });

    var sprite = new THREE.Sprite(spriteMaterial);
    scene.add(sprite);
    sprite.scale.set(1, 1, 1); 
    var k1 = Math.random() - 0.5;
    var k2 = Math.random() - 0.5;
    var k3 = Math.random() - 0.5;
    
    sprite.position.set(300* k1, 50+100*k3, 300 * k2)
}


const goldMaterial = new THREE.MeshPhysicalMaterial({
    
    
    color: 0xffe32e,
    emissive: 0x664600,
    displacementMap:goldDisp,
    roughness:0.4,
    roughnessMap:goldRoughness,
    metalness: 0.2,
    metalnessMap:goldMetalness,
    normalMap:goldNrm

 
})

var goldBall = new THREE.SphereGeometry(0.1,30,30)
var mesh = new THREE.Mesh(goldBall,goldMaterial)
mesh.scale.set(0.2,0.2,0.2)
mesh.position.set(0,2.5,0)
scene.add(mesh)





scene.background = new THREE.Color( 0x000000 )


window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
};

//Control
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 1.8;
controls.enablePan = true;



function animate() {
    requestAnimationFrame(animate);
    controls.update();
    render();
    //stats.update()
}

function render() {


    const timer = Date.now()*0.0002;
    
    water.material.uniforms[ 'time' ].value += 0.1 / 60.0;
    renderer.render(scene, camera);
}

animate(); 
    `),e(`    
`)],-1);function c(m,p){return t(),r(o,null,[l,d],64)}const h=s(i,[["render",c]]);a(h).mount("#app");
