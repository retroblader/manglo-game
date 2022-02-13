controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, carson, 50, 50)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    manglo.destroy(effects.spray, 5000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
	
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    fero = sprites.create(img`
        . . . . . . . . 7 7 7 7 7 7 . . 
        . . . . . . 7 7 7 f 7 7 7 f 7 . 
        . . . . 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 d d d d d d d 7 7 7 7 1 
        . . 7 7 d d d d d d d 7 . . . f 
        . . 7 7 d d d d d d d 7 7 7 7 f 
        . . 7 7 d d d d d d d 7 . . . f 
        . . 7 7 7 d d d d d 7 7 7 7 7 7 
        . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . 7 7 7 . . . . . 7 7 7 . . . 
        . . 7 7 7 . . . . . 7 7 7 . . . 
        . . 7 7 7 . . . . . 7 7 7 . . . 
        . . 7 7 7 . . . . . 7 7 7 . . . 
        . 7 7 7 7 7 . . . 7 7 7 7 7 . . 
        7 5 7 5 7 5 7 . 7 . 7 . 7 . 7 . 
        `, SpriteKind.Enemy)
    fero.setVelocity(-8, 19)
    fero.follow(carson, 100)
    music.playMelody("G C F C E B F C ", 120)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    fero.destroy(effects.spray, 5000)
    game.over(true)
})
let fero: Sprite = null
let projectile: Sprite = null
let manglo: Sprite = null
let carson: Sprite = null
carson = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 7 . . . . 7 . . . . . . . 
    . . . . 7 7 7 7 . . . . . . . . 
    . . . . f 7 7 f . . . . . . . . 
    . . . . 7 7 7 7 . . . . . . . . 
    . . . . f f f f . f f f . . . . 
    . . . . f 1 1 f . f 1 f . . . . 
    . 7 1 1 1 1 1 1 1 1 1 . . . . . 
    . . . . 1 1 1 1 . . . . . . . . 
    . . . . 1 1 1 1 . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . . f . . f . . . . . . . . 
    . . . f f . . f f . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(carson)
tiles.setCurrentTilemap(tilemap`level3`)
scene.cameraFollowSprite(carson)
game.showLongText("welcome to manglo intertainments recently the creator of fero the frog and manglo the money has recently gone missing i am a secrity guard and 'knock knock' ", DialogLayout.Top)
pause(1000)
scene.cameraShake(4, 2000)
manglo = sprites.create(img`
    . . . . . f f f f . . . . . . . 
    . . . . . f f f f . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . 4 4 4 4 4 4 4 4 4 4 . . . . 
    . . 4 d 4 f 4 4 f 4 d 4 . . . . 
    . . 4 4 4 4 4 4 4 4 4 4 . . 1 . 
    . . . . 4 4 4 4 4 4 . . . . f . 
    . 4 4 4 4 d d d d 4 4 4 4 4 f . 
    . 4 4 4 4 d d d d 4 4 4 4 4 f . 
    . 4 4 . 4 d d d d 4 . . . . . . 
    . 4 4 f 4 d d d d 4 . . . . . . 
    . f f . 4 4 4 4 4 4 . . . . . . 
    . . . . 4 4 . . 4 4 . . . . . . 
    . . . . 4 4 . . 4 4 . . . . . . 
    . . 4 4 4 4 . . 4 4 4 4 . . . . 
    . . 4 4 4 4 . . 4 4 4 4 . . . . 
    `, SpriteKind.Enemy)
manglo.follow(carson, 80)
music.playMelody("C E C A C F C E ", 120)
manglo.sayText("why are you here ", 2000, true)
