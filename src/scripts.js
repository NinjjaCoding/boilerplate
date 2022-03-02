import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { Mesh } from 'three'

// Debug and side adjustBar box
const gui = new dat.GUI()
   
//canvas 
const canvas = document.querySelector('canvas.webgl');    
    
//scence 
const scene = new THREE.Scene();

// choose from camera types
const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.set(3, 4, 5);
    camera.lookAt(0, 0, 0);
    scene.add(camera);
    //Controls
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true

//renderer WEBGL
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize( window.innerWidth, window.innerHeight );
    
    document.body.appendChild( renderer.domElement );
    renderer.render(scene, camera);

    //responsive web
window.addEventListener('resize', () => {
    // Update camera
    camera.aspect = window.innerWidth / windows.innerheight
    camera.updateProjectionMatrix()
    // Update renderer
    renderer.setSize(window.innerWidth, windows.innerheight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))     
})
 //lighting types
    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    //const directionalLight = new THREE.DirectionalLight(0xffffff, 0.1);
    pointLight.position.set(2, 3, 4);     
    scene.add(pointLight);


        // geometry 
const geometry = new THREE.BoxGeometry();

        // material 
const material = new THREE.MeshBasicMaterial( 
                    { color: 0x00ff00 } );
        //Mesh them together 
const cube = new THREE.Mesh( geometry, material );
cube.position.set(0, 0, 0);
scene.add( cube );



    //loop to animate effect
function animate() {
    requestAnimationFrame( animate );
        //put code for animation effects here

        cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;

         // Update objects
        cube.rotation.y = .5 * elapsedTime

        // Update Orbital Controls
        // controls.update()

        //render items added in params
    renderer.render( scene, camera );

    // Call tick again on the next frame
    window.requestAnimationFrame(animate)

}
 animate();


	