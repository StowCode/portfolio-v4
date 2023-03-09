import { Component } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
 
class Test extends Component {
    componentDidMount() {
        // === THREE.JS CODE START ===
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

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

        // NOT WORKING
        loader.load('/models/gltf/space_exploration_wlp_series_8.glb', function (gltf) {
            const spaceScene = gltf.scene;
            spaceScene.position.y = 4;
            
            scene.add(spaceScene)
        })


        // document.body.appendChild( renderer.domElement );
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff000 } );
        const cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        camera.position.z = 2;

        var animate = function () {
            requestAnimationFrame( animate );
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render( scene, camera );
        };
        animate();
        // === THREE.JS EXAMPLE CODE END ===
    }
    render() {
        return (
        <div id='canvas'>

        </div>
        )
    }

}

export default Test;
