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
        camera.position.x = 0;
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
        light.position.set(0,0,400);
        scene.add(light);
        // A end
    }

    var mesh;
    function initObject() {
        // A begin
        var geometry = new THREE.SphereGeometry( 200, 20, 20 );

        var texture = THREE.ImageUtils.loadTexture("textures/pho.jpg",null,function(t)
        {
        });
        var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
        mesh = new THREE.Mesh( geometry, material ); 
        scene.add( mesh );
    }

    function threeStart() {
        initThree();
        initCamera();
        initScene();
        initLight();
        initObject();
        renderer.clear();
        renderer.render(scene, camera);

        animate();
    }

    function animate(){

        renderer.render(scene, camera);
        mesh.rotation.y+=0.01;
        requestAnimationFrame(animate);
    }

    
    threeStart();
	
});