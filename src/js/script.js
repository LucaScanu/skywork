// JavaScript Document
window.onload = function(){
  console.log("Junior developer test.");

  // declare your variables here.
  var background;
  var logo;
  var products;
  var stamp;

  // store a reference to the canvas which we will draw on.
  var stage = new createjs.Stage("stage");

  // register the stage to handle mouse events.
  stage.enableMouseOver(10);

  // register the Ticker to listen for the tick event.
  createjs.Ticker.addEventListener("tick", handleTick, false);

  // redraw the canvas - like Event.ENTER_FRAME in Adobe Flash.
  function handleTick(event) {
    stage.update();
  }

  // create a preloader to load the images.
  var loader = new createjs.LoadQueue(false);

  // when all images are loaded call the handleAllImageLoaded function.
  loader.on('complete', handleAllImagesLoaded, this);

  // provide a manifest of files and ids to be loaded.
  loader.loadManifest([
    {id: "background", src:"images/background.png"},
    {id: "logo", src:"images/sky-logo.png"},
    {id: "products",  src:"images/products.png"},
  ]);

  function handleAllImagesLoaded() {
    console.log("All the images have loaded.");
    drawTheBannerBackground();
  }

  function drawTheBannerBackground() {
    console.log("draw and animate the background.");

    // provide the loader result for the item with id == 'background'
    // as a bitmap which will be stored in our background variable.
    background = new createjs.Bitmap( loader.getResult( "background" ) );
    logo = new createjs.Bitmap( loader.getResult( "logo" ) );
    products = new createjs.Bitmap( loader.getResult( "products" ));


    // set the background bitmap alpha to zero.
    background.alpha = 0;
    logo.alpha = 0;
    products.alpha = 0;

    // add background to the display list.
    stage.addChild( background );
    stage.addChild( logo );
    stage.addChild( products );


    // animate the background bitmap alpha value to 1 over the duration of 1000 milliseconds.
    createjs.Tween.get( background ).to( {alpha:1}, 1000 );
    createjs.Tween.get( logo ).to( {alpha:1}, 1000 );
    createjs.Tween.get( products ).to( {alpha:1}, 1000 );

    // after the background is drawn on the canvas draw and animate the content for frame 1.
    setTimeout(frame1, 100);
  }

  function frame1() {
    console.log("draw and animate frame one.");
    // setTimeout(drawText, 1500);
    // refer to the creative brief, frame 1 for guidance.

    // function drawText() {
      var text = new createjs.Text("Choose your reward", "25px SkyText-Regular", "#000");
      text.x = 50;
      text.y = 10;
      text.alpha = 0;
      stage.addChild( text );
      createjs.Tween.get( text ).to( {alpha:1}, 1500 );

      var text1 = new createjs.Text("when you switch to 12 months", "15px SkyText-Regular", "#0000ff");
      text1.x = 58;
      text1.y = 40;
      text1.alpha = 0;
      stage.addChild( text1 );
      createjs.Tween.get( text1 ).to( {alpha:1}, 3000);

      var text2 = new createjs.Text("free Sky Broadband Unlimited", "15px SkyText-Regular", "#0000ff");
      text2.x = 58;
      text2.y = 60;
      text2.alpha = 0;
      stage.addChild( text2 );
      createjs.Tween.get( text2 ).to( {alpha:1}, 3500 );

      setTimeout(eraseBackground, 4000);

      function eraseBackground() {
        createjs.Tween.get( products ).to( {alpha:0}, 500 );
        createjs.Tween.get( text ).to( {alpha:0}, 100 );
        createjs.Tween.get( text1 ).to( {alpha:0}, 500 );
        createjs.Tween.get( text2 ).to( {alpha:0}, 500 );
      }
    // }

      // after a timeout and the animations have completed, draw frame 2.
      setTimeout(frame2, 5000);
  }

    function frame2() {
      console.log("draw and animate frame two.");

      // refer to the creative brief, frame 2 for guidance.
      var text = new createjs.Text("Choose your reward", "25px SkyText-Regular", "#000");
      text.x = 50;
      text.y = 10;
      text.alpha = 0;
      stage.addChild( text );
      createjs.Tween.get( text ).to( {alpha:1}, 3000 );


      // after a timeout and the animations have completed, draw frame 3.
      setTimeout(frame3, 3000);
    }

    function frame3() {
      console.log("draw and animate frame three.");

      // refer to the creative brief, frame 3 for guidance.
    }

  };
