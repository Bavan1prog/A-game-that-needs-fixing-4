var Max, Maximg;
var edges;
var spaceback;
var desab, indesab, desabGroup, indesabGroup;
var enemy, enemyGroup;
var laser, laserimg, laserGroup;
var healthbar, defeatbar, himg, dimg;
var lifepoint, lifepoint2, lifepoint3, lifepoint4, lifepoint5, lifepoint6, lifepoint7, lifepoint8, lifepoint9, lifepoint10, lifepoint11, limg, demg;
var deathpoint, deathpoint2, deathpoint3, deathpoint4, deathpoint5, deathpoint6, deathpoint7, deathpoint8, deathpoint9, deathpoint10, deathpoint11;
var green = [];
var BossBattle, Bossdefeat, Gameover, Gametheme, HealthDepletion, HealthRecovery, Hit, LaserHit, Victory;
var score1 = 0;
var score2 = 0;
var gamestate = "bossfight";
var boss,bossimg;
var laser1,laser2,laser3,leserimg,laser1Group,laser2Group,laser3Group;
var score3 = 5000;
var endstate;


function preload() {
  Maximg = loadImage("Images/Max.png");
  spaceback = loadImage("Images/Spacial Back.jpg");
  desabimg = loadImage("Images/desob.png");
  indesabimg = loadImage("Images/indesob.png");
  ufoimg = loadImage("Images/ufo.png");
  laserimg = loadImage("Images/laser.png");
  himg = loadImage("Images/Healthbar1.png");
  dimg = loadImage("Images/Healthbar2.png");
  limg = loadImage("Images/Healthpoint.png");
  demg = loadImage("Images/lopoint.png");
  BossBattle = loadSound("Sounds/BossBattle.mp3");
  Bossdefeat = loadSound("Sounds/Bossdefeat.mp3");
  Gameover = loadSound("Sounds/Gameover.mp3");
  Gametheme = loadSound("Sounds/Gametheme.mp3");
  HealthDepletion = loadSound("Sounds/HealthDepletion.wav");
  HealthRecovery = loadSound("Sounds/HealthRecovery.wav");
  Hit = loadSound("Sounds/Hit.mp3");
  LaserHit = loadSound("Sounds/LaserHit.mp3");
  Victory = loadSound("Sounds/Victory.mp3");
  bossimg = loadImage("Images/Boss.png");
  leserimg = loadImage("Images/EnemyLaser.png");

}

function setup() {
  createCanvas(1200, 610);
  Max = createSprite(574, 558, 50, 50);
  Max.addImage(Maximg);
  Max.scale = 0.2;

  boss = createSprite(577,250,15,15);
boss.addImage(bossimg);
boss.scale = 4.0;
boss.visible = false;

  edges = createEdgeSprites();

  healthbar = createSprite(1084, 20, 10, 10);
  healthbar.addImage(himg);
  healthbar.scale = 0.7;

  deathbar = createSprite(1102, 99, 10, 10);
  deathbar.addImage(dimg);
  deathbar.scale = 0.7;
  deathbar.visible = true;


  console.log();



  desabGroup = new Group();
  laserGroup = new Group();
  enemyGroup = new Group();
  indesabGroup = new Group();
  laser1Group = new Group();
  laser2Group = new Group();
  laser3Group = new Group();

  


}

function draw() {
  background(spaceback);


  if (gamestate === "play") {

    if (keyDown(RIGHT_ARROW)) {
      Max.x = Max.x + 13;
    }

    if (keyDown(LEFT_ARROW)) {
      Max.x = Max.x - 13;
    }

    Max.collide(edges[0]);
    Max.collide(edges[1]);

    //Gametheme.play();

    Desob();
    Indesob();
    Enemy();

    for (var i = 0; i < desabGroup.maxDepth(); i++) {
      var desob = desabGroup.get(i);
      if (desob && laserGroup.isTouching(desob)) {
        score1 = score1 + 1;
        desob.destroy();
      }
    }

    for (var i = 0; i < enemyGroup.maxDepth(); i++) {
      var desene = enemyGroup.get(i);
      if (desene && laserGroup.isTouching(desene)) {
        score1 = score1 + 2;
        desene.destroy();
      }
    }



    if (score1 >= 10) {
      lifepoint = createSprite(1005, 50, 10, 10);
      lifepoint.addImage(limg);
      lifepoint.scale = 0.05;
    }
    if (score1 >= 20) {
      lifepoint2 = createSprite(1020, 50, 10, 10);
      lifepoint2.addImage(limg);
      lifepoint2.scale = 0.05;
    }

    if (score1 >= 30) {
      lifepoint3 = createSprite(1036, 50, 10, 10);
      lifepoint3.addImage(limg);
      lifepoint3.scale = 0.05;
    }
    if (score1 >= 40) {
      lifepoint4 = createSprite(1052, 50, 10, 10);
      lifepoint4.addImage(limg);
      lifepoint4.scale = 0.05;
    }
    if (score1 >= 50) {
      lifepoint5 = createSprite(1066, 50, 10, 10);
      lifepoint5.addImage(limg);
      lifepoint5.scale = 0.05;
    }

    if (score1 >= 60) {
      lifepoint6 = createSprite(1081, 50, 10, 10);
      lifepoint6.addImage(limg);
      lifepoint6.scale = 0.05;
    }

    if (score1 >= 70) {
      lifepoint7 = createSprite(1096, 50, 10, 10);
      lifepoint7.addImage(limg);
      lifepoint7.scale = 0.05;
    }

    if (score1 >= 80) {
      lifepoint8 = createSprite(1111, 50, 10, 10);
      lifepoint8.addImage(limg);
      lifepoint8.scale = 0.05;
    }

    if (score1 >= 90) {
      lifepoint8 = createSprite(1111, 50, 10, 10);
      lifepoint8.addImage(limg);
      lifepoint8.scale = 0.05;
    }

    if (score1 >= 100) {

      lifepoint9 = createSprite(1126, 50, 10, 10);
      lifepoint9.addImage(limg);
      lifepoint9.scale = 0.05;
    }

    if (score1 >= 110) {
      lifepoint10 = createSprite(1141, 50, 10, 10);
      lifepoint10.addImage(limg);
      lifepoint10.scale = 0.05;
    }

    if (score1 >= 120) {
      lifepoint11 = createSprite(1158, 50, 10, 10);
      lifepoint11.addImage(limg);
      lifepoint11.scale = 0.05;
    }




    text("Score:" + score1, 50, 50);
    text("Score2:" + score2, 50, 90);
  

    if (enemyGroup.isTouching(edges[3]) || desabGroup.isTouching(edges[3])) {
      score2 = score2 + 1;
    }

    if (score2 >= 50) {
      deathpoint = createSprite(1005, 140, 10, 10);
      deathpoint.addImage(demg);
      deathpoint.scale = 0.05;

    }
    if (score2 >= 100) {
      deathpoint2 = createSprite(1020, 140, 10, 10);
      deathpoint2.addImage(demg);
      deathpoint2.scale = 0.05;
    }

    if (score2 >= 150) {
      deathpoint3 = createSprite(1036, 140, 10, 10);
      deathpoint3.addImage(demg);
      deathpoint3.scale = 0.05;
    }
    if (score2 >= 200) {
      deathpoint4 = createSprite(1052, 140, 10, 10);
      deathpoint4.addImage(demg);
      deathpoint4.scale = 0.05;
    }
    if (score2 >= 250) {
      deathpoint5 = createSprite(1066, 140, 10, 10);
      deathpoint5.addImage(demg);
      deathpoint5.scale = 0.05;
    }

    if (score2 >= 300) {
      deathpoint6 = createSprite(1081, 140, 10, 10);
      deathpoint6.addImage(demg);
      deathpoint6.scale = 0.05;
    }

    if (score2 >= 350) {
      deathpoint7 = createSprite(1096, 140, 10, 10);
      deathpoint7.addImage(demg);
      deathpoint7.scale = 0.05;
    }

    if (score2 >= 400) {
      deathpoint8 = createSprite(1111, 140, 10, 10);
      deathpoint8.addImage(demg);
      deathpoint8.scale = 0.05;
    }

    if (score2 >= 450) {
      deathpoint8 = createSprite(1111, 140, 10, 10);
      deathpoint8.addImage(demg);
      deathpoint8.scale = 0.05;
    }

    if (score2 >= 500) {

      deathpoint9 = createSprite(1126, 140, 10, 10);
      deathpoint9.addImage(demg);
      deathpoint9.scale = 0.05;
    }

    if (score2 >= 550) {
      deathpoint10 = createSprite(1141, 140, 10, 10);
      deathpoint10.addImage(demg);
      deathpoint10.scale = 0.05;
    }

    if (score2 >= 600) {
      deathpoint11 = createSprite(1158, 140, 10, 10);
      deathpoint11.addImage(demg);
      deathpoint11.scale = 0.05;
    }

    if (lifepoint) {
      gamestate = "bossfight";
    }

  }
  else if (gamestate === "bossfight") {
  
    desabGroup.destroyEach();
  indesabGroup.destroyEach();
  enemyGroup.destroyEach();

  if (keyDown(RIGHT_ARROW)) {
    Max.x = Max.x + 13;
  }

  if (keyDown(LEFT_ARROW)) {
    Max.x = Max.x - 13;
  }

  Max.collide(edges[0]);
  Max.collide(edges[1]);

  if(laser.y>=200){
  score3 = score3 - 5;
  }

  text("Score:"+score3,50,90);
  
  if(score3 === 0){
    gamestate = endstate;
    }

  boss.visible = true;

  
  



  EnemyLaser1();
  EnemyLaser2();
  EnemyLaser3();

    


  }

  


  drawSprites();
 

  textSize(30); fill("white"); text(mouseX + "," + mouseY, 30, 30);

  

    if(gamestate === endstate){
    boss.visible = false;
    laser1Group.lifetime = 0;
    laser2Group.lifetime = 0;
    laser3Group.lifetime = 0;
    Max.lifetime = 0; 
   text("Victory!!! You have Won",538,307);
   text("Score:" + score3,50,90)
   }
}


function Desob() {
  if (frameCount % 100 === 0) {
    desab = createSprite(10, 0, 10, 10);
    desab.x = Math.round(random(35, 1026));
    desab.addImage(desabimg);
    desab.velocityY = 8;
    desab.scale = 0.25;
    desabGroup.add(desab);
    desab.lifetime = 80;
  }
}

function Indesob() {
  if (frameCount % 85 === 0) {
    indesab = createSprite(10, 0, 10, 10);
    indesab.x = Math.round(random(35, 1026));
    indesab.addImage(indesabimg);
    indesab.velocityY = 12;
    indesab.scale = 0.25;
    indesab.lifetime = 60;
    indesabGroup.add(indesab);
  }

}

function Enemy() {
  if (frameCount % 75 === 0) {
    enemy = createSprite(10, 0, 10, 10);
    enemy.x = Math.round(random(35, 1026));
    enemy.addImage(ufoimg);
    enemy.velocityY = 12;
    enemy.scale = 0.3;
    enemyGroup.add(enemy);
    enemy.lifetime = 60;
  }
}

function keyReleased() {
  if (keyCode === 32) {
    laser = createSprite(Max.x, Max.y, 10, 10);
    laser.addImage(laserimg);
    laser.scale = 0.30
    laser.velocityY = -8;
    laserGroup.add(laser);
  }
}

function EnemyLaser1() {
  if (frameCount % 80 === 0) {
    laser1 = createSprite(578, 437, 10, 10);
    laser1.addImage(leserimg);
    laser1.velocityY = 12;
    laser1.scale = 0.3;
    laser1Group.add(laser1);
    laser1Group.setLifetimeEach(60);
  }
}

function EnemyLaser2() {
  if (frameCount % 50 === 0) {
    laser2 = createSprite(286, 437, 10, 10);
    laser2.addImage(leserimg);
    laser2.velocityY = 12;
    laser2.scale = 0.3;
    laser2Group.add(laser2);
    laser2Group.setLifetimeEach(60);
  }
}

function EnemyLaser3() {
  if (frameCount % 40 === 0) {
    laser3= createSprite(874, 437, 10, 10);
    laser3.addImage(leserimg);
    laser3.velocityY = 12;
    laser3.scale = 0.3;
    laser3Group.add(laser3);
    laser3Group.setLifetimeEach(60);
  }
}