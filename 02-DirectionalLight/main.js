require(["require"],function(require){
    var renderer,
    w = $("#webglWrapper").width(),
    h = $("#webglWrapper").height();
    var renderer;
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
        camera = new THREE.PerspectiveCamera(45, w / h, 1, 10000);
        //相机侧放
        camera.position.x = 600;
        camera.position.y = 0;
        camera.position.z = 600;
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
        // A start
        // 第二个参数是光源强度，你可以改变它试一下
        light = new THREE.DirectionalLight(0xFF0000,0.8);
        // 位置不同，方向光作用于物体的面也不同，看到的物体各个面的颜色也不一样
        light.position.set(0,0,1);
        scene.add(light);
        // A end
    }

    var cube;
    function initObject() {
        var geometry = new THREE.CubeGeometry( 200, 100, 50,4,4);
        var material = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
        var mesh = new THREE.Mesh( geometry,material);
        mesh.position.set(0,0,0);
        // mesh.rotation.x = 45 * Math.PI/180;
        scene.add(mesh);

        var geometry2 = new THREE.CubeGeometry( 200, 100, 50,4,4);
        var material2 = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
        var mesh2 = new THREE.Mesh( geometry2,material2);
        mesh2.position.set(-300,0,0);
        scene.add(mesh2);

        var geometry3 = new THREE.CubeGeometry( 200, 100, 50,4,4);
        var material3 = new THREE.MeshLambertMaterial( { color:0xFFFFFF} );
        var mesh3 = new THREE.Mesh( geometry3,material3);
        mesh3.position.set(0,-150,0);
        scene.add(mesh3);

        var mesh4 = new THREE.Mesh( geometry3,material3);
        mesh4.position.set(0,150,0);
        scene.add(mesh4);

        var mesh5 = new THREE.Mesh( geometry3,material3);
        mesh5.position.set(300,0,0);
        scene.add(mesh5);

        var mesh6 = new THREE.Mesh( geometry3,material3);
        mesh6.position.set(0,0,-100);
        scene.add(mesh6);
    }

    function threeStart() {
        initThree();
        initCamera();
        initScene();
        initLight();
        initObject();
        renderer.clear();
        renderer.render(scene, camera);
    }
    threeStart();
	
});