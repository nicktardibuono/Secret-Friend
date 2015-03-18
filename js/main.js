window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
   var game = new Phaser.Game(800, 500, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update});

function preload() {

    game.load.image('background','assets/room.jpg');
    game.load.image('background1','assets/bedroom.jpg');
    game.load.image('background2','assets/kitchen.jpg');
    game.load.image('player','assets/guy.png');
    game.load.image('evidence','assets/note.jpg');
    game.load.image('suspect1','assets/murder.png');
    game.load.image('suspect2','assets/thief.png');
    game.load.image('suspect3','assets/nothing.png');
    game.load.image('suspect4','assets/dead.png');
    game.load.audio('beep','assets/beep-08b.mp3');
    game.load.audio('fail','assets/fail-trombone-01.mp3');
    game.load.audio('win','assets/tada.mp3')
}

var player;
var cursors;
var score = 0;
var evidence;
var clue1;
var clue2;
var clue3;
var suspect = Math.random()*4 +1;
var sus1;
var sus2;
var sus3;
var sus4;
var music;
var fail;
var win;
 
function create() {

    game.add.tileSprite(400, 0, 800, 500, 'background');
    game.add.tileSprite(1200, 0, 800, 500, 'background2');
    game.add.tileSprite(2000, 0, 1000, 500, 'background1');
    game.world.setBounds(0, 0, 3000, 500);
    game.physics.startSystem(Phaser.Physics.ARCADE);
    player = game.add.sprite(370, 250, 'player');
    cursors = game.input.keyboard.createCursorKeys();
    game.camera.follow(player);
    game.physics.arcade.enable(player);
    evidence = game.add.group();
    evidence.enableBody = true;
    evidence.create(Math.random()*2500+400,Math.random()*450,'evidence');
    music = game.add.audio('beep');
    fail = game.add.audio('fail');
    win = game.add.audio('win');
    game.add.text(10, 10, 'You broke into \n your friends appartment \n and need to collect \n the notes in order to \n find out there secret. \n Explore their appartment \n and figure out what \n their secret is and guess \n to see if your right. \n \n Arrow keys to move.\n Move Right to start. ', { fontSize: '10px',    fill: 'white' });
}
function update() {
    game.physics.arcade.overlap(player, evidence, collectEvidence, null, this);
    player.body.velocity.x = 0;
    player.body.velocity.y = 0;
    if (cursors.up.isDown)
    {
        player.body.velocity.y = -300;
    }
    else if (cursors.down.isDown)
    {
        player.body.velocity.y = 300;
    }
    if (cursors.left.isDown)
    {
        player.body.velocity.x = -300;
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 300;
    }

}
function collectEvidence(player, evid){
    evid.kill();
    music.play();
    score += 1;
    if(score === 1)
    {
        evidence.create(Math.random()*2500+400,Math.random()*450,'evidence');
        if(suspect<2)
        {
            clue1 = game.add.text(game.world.centerX +20, 16, 'Your friend works for the police. ', { fontSize: '32px',    fill: 'black' });
        }
        else if(suspect<3)
        {
            clue1 = game.add.text(game.world.centerX +20, 16, 'Your friend dropped out of school.', { fontSize: '32px',    fill: 'black' });
        }
        else if(suspect<4)
        {
            clue1 = game.add.text(game.world.centerX +20, 16, 'Your friend is a mixed martial artisit. ', { fontSize: '32px',    fill: 'black' });
        }
        else if(suspect<5)
        {
            clue1 = game.add.text(game.world.centerX +20, 16, 'Your friend is a teacher.', { fontSize: '32px',    fill: 'black' });
        }
        
    }
    if(score === 2)
    {
        evidence.create(Math.random()*2500+400,Math.random()*450,'evidence');
        if(suspect<2)
        {
            clue2 = game.add.text(game.world.centerX +20, 50, 'Your friend was free, but never wants to go out anymore.', { fontSize: '32px',    fill: 'black' });
        }
        else if(suspect<3)
        {
            clue2 = game.add.text(game.world.centerX +20, 50, 'Your friend is always free during the day. ', { fontSize: '32px',    fill: 'black' });
        }
        else if(suspect<4)
        {
            clue2 = game.add.text(game.world.centerX +20, 50, 'Your friend is free for some months, but extremely busy in others.  ', { fontSize: '32px',    fill: 'black' });
        }
        else if(suspect<5)
        {
            clue2 = game.add.text(game.world.centerX +20, 50, 'Your friend is never home and never returns your calls. ', { fontSize: '32px',    fill: 'black' });
        }
    }
    if(score === 3)
    {
        evidence.create(Math.random()*2500+400,Math.random()*450,'evidence');
        if(suspect<2)
        {
            clue3 = game.add.text(game.world.centerX +20, 84, 'Your friend has seemed paranoid of late. ', { fontSize: '32px',    fill: 'black' });
        }
        else if(suspect<3)
        {
            clue3 = game.add.text(game.world.centerX +20, 84, 'Your friend has a nice appartment.', { fontSize: '32px',    fill: 'black' });
        }
        else if(suspect<4)
        {
            clue3 = game.add.text(game.world.centerX +20, 84, 'Your friend has some angermangement issues.', { fontSize: '32px',    fill: 'black' });
        }
        else if(suspect<5)
        {
            clue3 = game.add.text(game.world.centerX +20, 84, 'No one wants to talk about your friend.', { fontSize: '32px',    fill: 'black' });
        }
    }
    if(score === 4)
    {
        sus1 = game.add.sprite(game.world.centerX-200, game.world.centerY-250, 'suspect1');
        sus1.inputEnabled = true;
        sus1.events.onInputDown.add(removePic1, this);
        sus2 = game.add.sprite(game.world.centerX-200, game.world.centerY-125, 'suspect2');
        sus2.inputEnabled = true;
        sus2.events.onInputDown.add(removePic2, this);
        sus3 = game.add.sprite(game.world.centerX-200, game.world.centerY, 'suspect3');
        sus3.inputEnabled = true;
        sus3.events.onInputDown.add(removePic3, this);
        sus4 = game.add.sprite(game.world.centerX-200, game.world.centerY+125, 'suspect4');
        sus4.inputEnabled = true;
        sus4.events.onInputDown.add(removePic4, this);
    }
}
function removePic1()
{
    sus1.kill();
    if(suspect<2)
    {
        game.add.text(game.world.centerX, game.world.centerY-250, 'Correct you found your friends secret.', { fontSize: '32px',    fill: 'white' });
        win.play();
    }
    else
    {
        game.add.text(game.world.centerX, game.world.centerY-250, 'Wrong Try Again', { fontSize: '32px',    fill: 'white' });
        fail.play();
    }
}
function removePic2()
{
    sus2.kill();
    if(suspect<3 && suspect>2)
    {
        game.add.text(game.world.centerX, game.world.centerY-125, 'Correct you found your friends secret.', { fontSize: '32px',    fill: 'white' });
        win.play();
    }
    else
    {
        game.add.text(game.world.centerX, game.world.centerY-125, 'Wrong Try Again', { fontSize: '32px',    fill: 'white' });
        fail.play();
    }
}
function removePic3()
{
    sus3.kill();
    if(suspect<4 && suspect>3)
    {
        game.add.text(game.world.centerX, game.world.centerY, 'Correct you found your friends secret.', { fontSize: '32px',    fill: 'white' });
        win.play();
    }
    else
    {
        game.add.text(game.world.centerX, game.world.centerY, 'Wrong Try Again', { fontSize: '32px',    fill: 'white' });
        fail.play();
    }
}
function removePic4()
{
    sus4.kill();
    if(suspect<5 && suspect>4)
    {
        game.add.text(game.world.centerX, game.world.centerY+125, 'Correct you found your friends secret.', { fontSize: '32px',    fill: 'white' });
        win.play();
    }
    else
    {
        game.add.text(game.world.centerX, game.world.centerY+125, 'Wrong Try Again', { fontSize: '32px',    fill: 'white' });
        fail.play();
    }
}
};