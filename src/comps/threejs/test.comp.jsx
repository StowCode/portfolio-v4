import { Component } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import Space from '../../models/gltf/space_exploration_wlp_series_8.glb';
 
class Test extends Component {
    componentDidMount() {
        // === THREE.JS CODE START ===
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 0.1, 1000 );

        //// DRACO LOADER TO LOAD DRACO COMPRESSED MODELS FROM BLENDER
        const dracoLoader = new DRACOLoader()
        const loader = new GLTFLoader()
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
        dracoLoader.setDecoderConfig({ type: 'js' })
        loader.setDRACOLoader(dracoLoader)
        
        // Renderer config
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        const container = document.getElementById('canvas');
        const renderer = new THREE.WebGLRenderer( {alpha: true, antialias: true });
        renderer.setSize( sizes.width, sizes.height );
        container.appendChild(renderer.domElement)

        // Update Render Size
        window.addEventListener('resize', () => {
            const width = window.innerWidth
            const height = window.innerHeight
            camera.aspect = width / height
            camera.updateProjectionMatrix()
        
            renderer.setSize(width, height)
            renderer.setPixelRatio(2)
        })

        // Load Model
        loader.load( Space , function (gltf) {
            const spaceScene = gltf.scene;
            spaceScene.position.y = 0;
            spaceScene.position.z = 0;
            spaceScene.position.x = 0;
            
            scene.add(spaceScene)
        })

        ///// SCENE LIGHTS
        const ambient = new THREE.AmbientLight(0xa0a0fc, 0.82)
        scene.add(ambient)

        const sunLight = new THREE.DirectionalLight(0xe8c37b, 1.96)
        sunLight.position.set(-69,44,14)
        scene.add(sunLight)

        ///// CREATE ORBIT CONTROLS
        const controls = new OrbitControls(camera, renderer.domElement)

        function setOrbitControlsLimits(){
            controls.enableDamping = false
            controls.dampingFactor = 1
            controls.minDistance = 35
            controls.maxDistance = 60
            controls.enableRotate = true;
            controls.enableZoom = false;
            controls.maxPolarAngle = Math.PI /2.5
            controls.autoRotate = true
            controls.autoRotateSpeed = 3
            controls.enablePan = false
        }
        
        setOrbitControlsLimits()


        // Camera Position

        camera.position.x = 10;

        var renderLoop = function () {
            controls.update()
            requestAnimationFrame( renderLoop );
            renderer.render( scene, camera );
        };
        renderLoop();

    }
    render() {
        return (
        <div id='canvas'>

        </div>
        )
    }

}

export default Test;
