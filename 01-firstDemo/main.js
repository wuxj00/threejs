require(["require"],function(require){
   var renderer,
   w = $("#webglWrapper").width(),
   h = $("#webglWrapper").height();

    function initThree() {

        renderer = new THREE.WebGLRenderer({
            antialias : true
        });
        renderer.setSize(w, h);
        $("#webglWrapper").append(renderer.domElement);
        renderer.setClearColor(0xFFFFFF, 1.0);
    }

    var camera;
    function initCamera() {
        camera = new THREE.PerspectiveCamera(45, w/h, 1, 10000);
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 5000;
        camera.up.x = 0;
        camera.up.y = 1;
        camera.up.z = 0;
        camera.lookAt({
            x : 0,
            y : 0,
            z : 0
        });
    }

    var scene;
    function initScene() {
        scene = new THREE.Scene();
    }

    var light;
    function initLight() {
        light = new THREE.AmbientLight(0xFFFFFF);
        light.position.set(100, 100, 200);
        scene.add(light);
        light = new THREE.PointLight(0x00FF00);
        light.position.set(0, 0,300);
        scene.add(light);
    }

    var mesh;
    function initObject() {
        var geometry = new THREE.CylinderGeometry( 100,150,400);
        var material = new THREE.MeshLambertMaterial( { color:0xFFFF00} );
        mesh = new THREE.Mesh( geometry,material);
        mesh.position = new THREE.Vector3(0,0,0);
        scene.add(mesh);
    }

    function threeStart() {
        initThree();
        initCamera();
        initScene();
        initLight();
        initObject();
        animation();

    }
    function animation()
    {
        //renderer.clear();
        camera.position.x =camera.position.x -2;
        mesh.rotation.z +=0.1;
        renderer.render(scene, camera);
        requestAnimationFrame(animation);
    }

    threeStart();
	
});