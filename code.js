var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var escape = createSprite(232, 390, 600, 30);
escape.shapeColor = "yellow";
var guardia1 = createSprite(120, 80, 10, 10);
guardia1.velocityY = 7;
guardia1.velocityY = -7;
var guardia2 = createSprite(200, 78, 10, 10);
guardia2.velocityY = -10;
guardia2.velocityY = 10;
var guardia3 = createSprite(144, 201, 10, 10);
guardia3.velocityY = 8;
guardia3.velocityY = -8;
var guardia4 = createSprite(331, 100, 10, 10);
guardia4.velocityY = 9;
guardia4.velocityY = -9;
var guardia5 = createSprite(171, 290, 10, 10);
guardia5.velocityX = -15;
guardia5.velocityX = 15;
var guardia6 = createSprite(185, 328, 10, 10);
guardia6.velocityX = 12;
guardia6.velocityX = -12;
var tu = createSprite(46, 56, 10, 10);
tu.shapeColor = "blue";
var muro1 = createSprite(3, 100, 500, 5);
muro1.shapeColor = "red";
var muro2 = createSprite(398, 250, 600, 5);
muro2.shapeColor = "red";
function draw() {
  background("black");
  drawSprites();
  createEdgeSprites();
  if (keyDown("down")) {
     tu.y=tu.y+5
  }
  if (keyDown("left")) {
     tu.x=tu.x-5
  }
  if (keyDown("right")) {
     tu.x=tu.x+5
  }
  if (keyDown("up")) {
     tu.y=tu.y-5
  }
  if (tu.isTouching(muro1) || tu.isTouching(muro2)) {
    tu.x = 35;
    tu.y = 52;
  }
  if (tu.isTouching(guardia1)) {
    tu.x = 36;
    tu.y = 53;
  }
  if (tu.isTouching(guardia2)) {
     tu.x = 36;
    tu.y = 53;
  }
  if (tu.isTouching(guardia3)) {
     tu.x = 36;
    tu.y = 53;
  }
   if (tu.isTouching(guardia4)) {
     tu.x = 36;
    tu.y = 53;
  }
   if (tu.isTouching(guardia5)) {
     tu.x = 36;
    tu.y = 53;
  }
   if (tu.isTouching(guardia6)) {
     tu.x = 36;
    tu.y = 53;
  }
   if (tu.isTouching(guardia3)) {
     tu.x = 36;
    tu.y = 53;
  }
  if (tu.isTouching(escape)) {
    guardia1.velocityY = 0;
    guardia2.velocityY = 0;
    guardia3.velocityY = 0;
    guardia4.velocityY = 0;
    guardia5.velocityX = 0;
    guardia6.velocityX = 0;
    tu.velocityX = 0;
    tu.velocityY = 0;
    text("ESCAPASTE", 50, 200);
  }
  textSize(50);
  fill("blue");
  if (tu.isTouching(guardia6)) {
     tu.x = 36;
    tu.y = 53;
  }
  tu.bounceOff(leftEdge);
  tu.bounceOff(topEdge);
  guardia1.bounceOff(topEdge);
  guardia1.bounceOff(muro1);
  guardia2.bounceOff(topEdge);
  guardia2.bounceOff(muro1);
  guardia3.bounceOff(muro1);
  muro1.bounceOff(guardia3);
  guardia3.bounceOff(muro2);
  muro2.bounceOff(guardia3);
  guardia6.bounceOff(leftEdge);
  guardia6.bounceOff(rightEdge);
   guardia5.bounceOff(leftEdge);
  guardia5.bounceOff(rightEdge);
    guardia4.bounceOff(topEdge);
  guardia4.bounceOff(muro2);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
