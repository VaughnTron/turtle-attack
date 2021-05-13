enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Walk_Right,
    Walk_Foward,
    Walk_Back,
    Walk_Left,
    IDLE,
    redFIRE,
    blueFIRE
}
namespace SpriteKind {
    export const boss = SpriteKind.create()
}
function CallEnemy () {
    Straw = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        `, SpriteKind.Enemy)
    Straw.setPosition(randint(0, 225), randint(0, 225))
    anim1back = animation.createAnimation(ActionKind.Walk_Back, 175)
    anim1back.addAnimationFrame(assets.image`Straw`)
    anim1back.addAnimationFrame(assets.image`Straw`)
    anim1back.addAnimationFrame(assets.image`Straw`)
    anim1back.addAnimationFrame(assets.image`Straw`)
    animation.attachAnimation(Straw, anim1back)
    anim2foward = animation.createAnimation(ActionKind.Walk_Foward, 175)
    anim2foward.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        `)
    animation.attachAnimation(Straw, anim2foward)
    anim3right = animation.createAnimation(ActionKind.Walk_Right, 275)
    anim3right.addAnimationFrame(assets.tile`myTile`)
    anim3right.addAnimationFrame(assets.tile`myTile`)
    anim3right.addAnimationFrame(assets.tile`myTile`)
    anim3right.addAnimationFrame(assets.tile`myTile`)
    animation.attachAnimation(Straw, anim3right)
    anim4left = animation.createAnimation(ActionKind.Walk_Left, 275)
    anim4left.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 f 1 1 f 1 1 1 . . . . . . . . 
        f f 2 f f 2 2 1 1 . . . . . . . 
        1 1 1 1 1 1 2 2 1 1 . . . . . . 
        2 f f f 2 1 1 2 2 1 1 . . . . . 
        f 1 1 1 f 2 1 1 2 2 1 1 . . . . 
        . . . 1 1 2 2 1 1 2 2 1 . . . . 
        . . . . 1 1 2 2 1 1 2 1 . . . . 
        . . . . . 1 1 2 2 1 2 1 . . . . 
        . . . . . . 1 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        `)
    anim4left.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 f 1 1 f 1 1 1 . . . . . . . . 
        f f 2 f f 2 2 1 1 . . . . . . . 
        1 1 1 1 1 1 2 2 1 1 . . . . . . 
        2 f f f 2 1 1 2 2 1 1 . . . . . 
        f 1 1 1 f 2 1 1 2 2 1 1 . . . . 
        . . . 1 1 2 2 1 1 2 2 1 . . . . 
        . . . . 1 1 2 2 1 1 2 1 . . . . 
        . . . . . 1 1 2 2 1 2 1 . . . . 
        . . . . . . 1 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        `)
    anim4left.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 f 1 1 f 1 1 1 . . . . . . . . 
        f f 2 f f 2 2 1 1 . . . . . . . 
        1 1 1 1 1 1 2 2 1 1 . . . . . . 
        2 f f f 2 1 1 2 2 1 1 . . . . . 
        f 1 1 1 f 2 1 1 2 2 1 1 . . . . 
        . . . 1 1 2 2 1 1 2 2 1 . . . . 
        . . . . 1 1 2 2 1 1 2 1 . . . . 
        . . . . . 1 1 2 2 1 2 1 . . . . 
        . . . . . . 1 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        `)
    anim4left.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 f 1 1 f 1 1 1 . . . . . . . . 
        f f 2 f f 2 2 1 1 . . . . . . . 
        1 1 1 1 1 1 2 2 1 1 . . . . . . 
        2 f f f 2 1 1 2 2 1 1 . . . . . 
        f 1 1 1 f 2 1 1 2 2 1 1 . . . . 
        . . . 1 1 2 2 1 1 2 2 1 . . . . 
        . . . . 1 1 2 2 1 1 2 1 . . . . 
        . . . . . 1 1 2 2 1 2 1 . . . . 
        . . . . . . 1 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        . . . . . . . 1 2 1 2 1 . . . . 
        `)
    animation.attachAnimation(Straw, anim4left)
    anim = animation.createAnimation(ActionKind.IDLE, 275)
    anim.addAnimationFrame(assets.tile`myTile0`)
    animation.attachAnimation(Straw, anim)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
    for (let index = 0; index < 115; index++) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . 4 4 d 7 4 . . . . . . 
            . . . 4 4 d d 4 4 4 4 . . . . . 
            . 4 4 5 7 4 4 5 d 7 4 . . . . . 
            4 5 5 7 d 5 5 d 7 7 4 . . . . . 
            7 4 4 5 5 5 5 5 7 4 4 . . . . . 
            7 d 5 d 7 7 4 4 4 . . . . . . . 
            4 4 4 4 7 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, sprite, randint(-100, 100), randint(-100, 100))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    tiles.setWallAt(location, true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
    if (sprite == TurtleRed) {
        info.player1.changeLifeBy(damage)
        TurtleRed.startEffect(effects.disintegrate, 2000)
    }
})
function make_map () {
    tiles.setTilemap(tilemap`level2`)
    for (let index = 0; index < 1200; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 254), randint(0, 254)), assets.tile`myTile9`)
    }
    for (let index = 0; index < 1200; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 254), randint(0, 254)), assets.tile`myTile7`)
    }
    for (let index = 0; index < 1200; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 254), randint(0, 254)), assets.tile`myTile4`)
    }
    for (let index = 0; index < 1200; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 254), randint(0, 254)), assets.tile`myTile6`)
    }
    for (let index = 0; index < 1200; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 254), randint(0, 254)), assets.tile`myTile5`)
    }
    for (let index = 0; index < 1200; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 254), randint(0, 254)), assets.tile`myTile8`)
    }
    for (let index = 0; index < 3000; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 225), randint(0, 225)), assets.tile`myTile3`)
    }
    for (let index = 0; index < 5000; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 225), randint(0, 225)), sprites.castle.tileGrass3)
    }
    for (let index = 0; index < 900; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 225), randint(0, 225)), assets.tile`myTile12`)
    }
    for (let index = 0; index < 700; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 225), randint(0, 225)), assets.tile`myTile15`)
    }
    for (let index = 0; index < 700; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 225), randint(0, 225)), assets.tile`myTile16`)
    }
    for (let index = 0; index < 300; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 225), randint(0, 225)), assets.tile`myTile17`)
    }
    for (let index = 0; index < 100; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 225), randint(0, 225)), assets.tile`myTile19`)
    }
}
function call_sprites () {
    CallPlayer1()
    CallEnemy()
    CallEnemyMinions()
    extra_sprites()
}
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile9`, function (sprite, location) {
    tiles.setWallAt(location, true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`myTile14`)
    info.changeScoreBy(20)
    sprite.startEffect(effects.confetti, 1000)
    mySprite = randint(1, 15)
    timer.after(5, function () {
        mySprite = 0
    })
    timer.after(4000, function () {
        tiles.setTileAt(location, sprites.castle.tileGrass3)
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    tiles.setWallAt(location, true)
})
function extra_sprites () {
	
}
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile5`, function (sprite, location) {
    tiles.setWallAt(location, true)
})
function CallPlayer1 () {
    info.setLife(10)
    TurtleRed = sprites.create(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 1 1 2 2 2 1 1 2 . . . 
        . . . . 2 1 f 2 2 2 f 1 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e 2 2 f f f f f 2 2 e . . 
        . 2 2 e 5 2 2 1 2 1 2 2 5 e 2 2 
        . 2 e e e e 5 5 5 5 5 e e e e 2 
        . 2 e e 5 5 e e e e e 5 5 e e 2 
        . 2 e 5 5 e e 5 5 5 e e 5 5 e 2 
        . 2 e 5 e e 5 5 5 5 5 e e 5 e 2 
        . 2 2 e e 5 e e e e e 5 e e 2 2 
        . 2 2 e 5 e e 5 5 5 e e 5 e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        `, SpriteKind.Player)
    anim1back = animation.createAnimation(ActionKind.Walk_Back, 175)
    anim1back.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 1 1 2 2 2 1 1 2 . . . 
        . . . . 2 1 f 2 2 2 f 1 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e 2 2 f f f f f 2 2 e . . 
        . 2 2 e 5 2 2 1 2 1 2 2 5 e 2 2 
        . 2 e e e e 5 5 5 5 5 e e e e 2 
        . 2 e e 5 5 e e e e e 5 5 e e 2 
        . 2 e 5 5 e e 5 5 5 e e 5 5 e 2 
        . 2 e 5 e e 5 5 5 5 5 e e 5 e 2 
        . 2 2 e e 5 e e e e e 5 e e 2 2 
        . 2 2 e 5 e e 5 5 5 e e 5 e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        `)
    anim1back.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 1 1 2 2 2 1 1 2 . . . 
        . . . . 2 1 f 2 2 2 f 1 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e 2 2 f f f f f 2 2 e . . 
        . 2 2 e 5 2 2 1 2 1 2 2 5 e 2 2 
        . 2 e e e e 5 5 5 5 5 e e e e 2 
        . 2 e e 5 5 e e e e e 5 5 e e 2 
        . 2 e 5 5 e e 5 5 5 e e 5 5 e 2 
        . 2 e 5 e e 5 5 5 5 5 e e 5 e 2 
        . 2 2 e e 5 e e e e e 5 e e 2 2 
        . 2 2 e 5 e e 5 5 5 e e 5 e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . . . . . . . 2 2 2 . . . 
        . . . . . . . . . . 2 2 2 . . . 
        `)
    anim1back.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 1 1 2 2 2 1 1 2 . . . 
        . . . . 2 1 f 2 2 2 f 1 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e 2 2 f f f f f 2 2 e . . 
        . 2 2 e 5 2 2 2 2 2 2 2 5 e 2 2 
        . 2 e e e e 5 5 5 5 5 e e e e 2 
        . 2 e e 5 5 e e e e e 5 5 e e 2 
        . 2 e 5 5 e e 5 5 5 e e 5 5 e 2 
        . 2 e 5 e e 5 5 5 5 5 e e 5 e 2 
        . 2 2 e e 5 e e e e e 5 e e 2 2 
        . 2 2 e 5 e e 5 5 5 e e 5 e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        `)
    anim1back.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 1 1 2 2 2 1 1 2 . . . 
        . . . . 2 1 f 2 2 2 f 1 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e 2 2 f f f f f 2 2 e . . 
        . 2 2 e 5 2 2 1 2 1 2 2 5 e 2 2 
        . 2 e e e e 5 5 5 5 5 e e e e 2 
        . 2 e e 5 5 e e e e e 5 5 e e 2 
        . 2 e 5 5 e e 5 5 5 e e 5 5 e 2 
        . 2 e 5 e e 5 5 5 5 5 e e 5 e 2 
        . 2 2 e e 5 e e e e e 5 e e 2 2 
        . 2 2 e 5 e e 5 5 5 e e 5 e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        `)
    animation.attachAnimation(TurtleRed, anim1back)
    anim2foward = animation.createAnimation(ActionKind.Walk_Foward, 175)
    anim2foward.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 e e e e e 2 2 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 e f f f 4 f 4 f 4 f f f e 2 
        . 2 e f f 4 4 f f f 4 4 f f e 2 
        . 2 e 4 f f f f 4 f f f f 4 e 2 
        . 2 e f f 4 4 f 4 f 4 4 f f e 2 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 2 e e f 4 f 4 f 4 f e e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 e e e e e 2 2 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 e f f f 4 f 4 f 4 f f f e 2 
        . 2 e f f 4 4 f f f 4 4 f f e 2 
        . 2 e 4 f f f f 4 f f f f 4 e 2 
        . 2 e f f 4 4 f 4 f 4 4 f f e 2 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 2 e e f 4 f 4 f 4 f e e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . . . . . . . 
        . . . . 2 2 2 . . . . . . . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 e e e e e 2 2 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 e f f f 4 f 4 f 4 f f f e 2 
        . 2 e f f 4 4 f f f 4 4 f f e 2 
        . 2 e 4 f f f f 4 f f f f 4 e 2 
        . 2 e f f 4 4 f 4 f 4 4 f f e 2 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 2 e e f 4 f 4 f 4 f e e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        `)
    anim2foward.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . 2 2 e e e e e 2 2 . . . 
        . . . e e e e f 4 f e e e e . . 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 e f f f 4 f 4 f 4 f f f e 2 
        . 2 e f f 4 4 f f f 4 4 f f e 2 
        . 2 e 4 f f f f 4 f f f f 4 e 2 
        . 2 e f f 4 4 f 4 f 4 4 f f e 2 
        . 2 2 e 4 f f f f f f f 4 e 2 2 
        . 2 2 e e f 4 f 4 f 4 f e e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . . . . . . . 2 2 2 . . . 
        . . . . . . . . . . 2 2 2 . . . 
        `)
    animation.attachAnimation(TurtleRed, anim2foward)
    anim3right = animation.createAnimation(ActionKind.Walk_Right, 275)
    anim3right.addAnimationFrame(img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 1 1 2 . . . . 
        . . . . . 2 2 2 2 1 f 2 2 . . . 
        . . . 4 . 2 2 2 2 2 2 2 2 . . . 
        . . 4 f e e 2 2 f f f f f . . . 
        . . f f 4 e 2 2 2 2 2 2 2 . . . 
        . f 4 f e f 2 2 5 e . . . . . . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . f 4 f e f 2 2 2 5 . . . . . . 
        . . f f 4 e 2 2 2 e . . . . . . 
        . . 4 f e e 2 2 e 5 . . . . . . 
        . . . 4 . . 2 2 5 5 . . . . . . 
        . . . . . . f 2 2 . . . . . . . 
        . . . . . . f 2 2 . . . . . . . 
        . . . . . . f 2 2 . . . . . . . 
        `)
    anim3right.addAnimationFrame(img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 1 1 2 . . . . 
        . . . . . 2 2 2 2 1 f 2 2 . . . 
        . . . 4 . 2 2 2 2 2 2 2 2 . . . 
        . . 4 f e e 2 2 f f f f f . . . 
        . . f f 4 e 2 2 2 2 2 2 2 . . . 
        . f 4 f e f 2 2 5 e . . . . . . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . f 4 f e f 2 2 2 5 . . . . . . 
        . . f f 4 e 2 2 2 e . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . f f f f 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim3right.addAnimationFrame(img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 1 1 2 . . . . 
        . . . . . 2 2 2 2 1 f 2 2 . . . 
        . . . 4 . 2 2 2 2 2 2 2 2 . . . 
        . . 4 f e e 2 2 f f f f f . . . 
        . . f f 4 e 2 2 2 2 2 2 2 . . . 
        . f 4 f e f 2 2 5 e . . . . . . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . f 4 f e f 2 2 2 5 . . . . . . 
        . . f f 4 e 2 2 2 e . . . . . . 
        . . 4 f e e 2 2 e 5 . . . . . . 
        . . . 4 . . 2 2 5 5 . . . . . . 
        . . . . . . f 2 2 . . . . . . . 
        . . . . . . f 2 2 . . . . . . . 
        . . . . . . f 2 2 . . . . . . . 
        `)
    anim3right.addAnimationFrame(img`
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 1 1 2 . . . . 
        . . . . . 2 2 2 2 1 f 2 2 . . . 
        . . . 4 . 2 2 2 2 2 2 2 2 . . . 
        . . 4 f e e 2 2 f f f f f . . . 
        . . f f 4 e 2 2 2 2 2 2 2 . . . 
        . f 4 f e f 2 2 5 e . . . . . . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . 4 f 4 e f 2 2 2 2 2 2 2 2 2 . 
        . f 4 f e f 2 2 2 5 . . . . . . 
        . . f f 4 e 2 2 2 e . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.attachAnimation(TurtleRed, anim3right)
    anim4left = animation.createAnimation(ActionKind.Walk_Left, 275)
    anim4left.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 1 1 2 2 2 2 . . . . . 
        . . . 2 2 f 1 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 . 4 . . . 
        . . . f f f f f 2 2 e e f 4 . . 
        . . . 2 2 2 2 2 2 2 e 4 f f . . 
        . . . . . . e 5 2 2 f e f 4 f . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . . . . . . 5 2 2 2 f e f 4 f . 
        . . . . . . e 2 2 2 e 4 f f . . 
        . . . . . . 5 e 2 2 e e f 4 . . 
        . . . . . . 5 5 2 2 . . 4 . . . 
        . . . . . . . 2 2 f . . . . . . 
        . . . . . . . 2 2 f . . . . . . 
        . . . . . . . 2 2 f . . . . . . 
        `)
    anim4left.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 1 1 2 2 2 2 . . . . . 
        . . . 2 2 f 1 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 . 4 . . . 
        . . . f f f f f 2 2 e e f 4 . . 
        . . . 2 2 2 2 2 2 2 e 4 f f . . 
        . . . . . . e 5 2 2 f e f 4 f . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . . . . . . 5 2 2 2 f e f 4 f . 
        . . . . . . e 2 2 2 e 4 f f . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim4left.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 1 1 2 2 2 2 . . . . . 
        . . . 2 2 f 1 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 . 4 . . . 
        . . . f f f f f 2 2 e e f 4 . . 
        . . . 2 2 2 2 2 2 2 e 4 f f . . 
        . . . . . . e 5 2 2 f e f 4 f . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . . . . . . 5 2 2 2 f e f 4 f . 
        . . . . . . e 2 2 2 e 4 f f . . 
        . . . . . . 5 e 2 2 e e f 4 . . 
        . . . . . . 5 5 2 2 . . 4 . . . 
        . . . . . . . 2 2 f . . . . . . 
        . . . . . . . 2 2 f . . . . . . 
        . . . . . . . 2 2 f . . . . . . 
        `)
    anim4left.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 1 1 2 2 2 2 . . . . . 
        . . . 2 2 f 1 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 . 4 . . . 
        . . . f f f f f 2 2 e e f 4 . . 
        . . . 2 2 2 2 2 2 2 e 4 f f . . 
        . . . . . . e 5 2 2 f e f 4 f . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . 2 2 2 2 2 2 2 2 2 f e 4 f 4 . 
        . . . . . . 5 2 2 2 f e f 4 f . 
        . . . . . . e 2 2 2 e 4 f f . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . f f f f 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    animation.attachAnimation(TurtleRed, anim4left)
    anim = animation.createAnimation(ActionKind.IDLE, 275)
    anim.addAnimationFrame(img`
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . 2 1 1 2 2 2 1 1 2 . . . 
        . . . . 2 1 f 2 2 2 f 1 2 . . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . e 2 2 f f f f f 2 2 e . . 
        . 2 2 e 5 2 2 1 2 1 2 2 5 e 2 2 
        . 2 e e e e 5 5 5 5 5 e e e e 2 
        . 2 e e 5 5 e e e e e 5 5 e e 2 
        . 2 e 5 5 e e 5 5 5 e e 5 5 e 2 
        . 2 e 5 e e 5 5 5 5 5 e e 5 e 2 
        . 2 2 e e 5 e e e e e 5 e e 2 2 
        . 2 2 e 5 e e 5 5 5 e e 5 e 2 2 
        . . . . e e e e e e e e e . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        `)
    animation.attachAnimation(TurtleRed, anim)
}
function CallEnemyMinions () {
    straw2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        `, SpriteKind.Enemy)
    straw4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        `, SpriteKind.Enemy)
    straw3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        `, SpriteKind.Enemy)
    straw5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        `, SpriteKind.Enemy)
    straw6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        `, SpriteKind.Enemy)
    straw7 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . f 2 1 2 f . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        . . . . . 1 2 1 2 1 . . . . . . 
        `, SpriteKind.Enemy)
}
function waves () {
    enemy_waves = 1
    game.showLongText("wave 1", DialogLayout.Bottom)
    timer.after(20000, function () {
        enemy_waves = 2
        game.showLongText("wave 2", DialogLayout.Bottom)
    })
    timer.after(40000, function () {
        enemy_waves = 3
        game.showLongText("wave 3", DialogLayout.Bottom)
    })
    timer.after(80000, function () {
        enemy_waves = 4
        game.showLongText("wave 4", DialogLayout.Bottom)
        mySprite2 = sprites.create(assets.image`PepsiBoss`, SpriteKind.boss)
    })
    timer.after(160000, function () {
        enemy_waves = 5
        game.showLongText("wave 5", DialogLayout.Bottom)
    })
    timer.after(320000, function () {
        enemy_waves = 6
        game.showLongText("wave 6", DialogLayout.Bottom)
    })
    timer.after(640000, function () {
        enemy_waves = 7
        game.showLongText("wave 7", DialogLayout.Bottom)
        mySprite2 = sprites.create(assets.image`Garbage can`, SpriteKind.boss)
    })
    timer.after(1280000, function () {
        enemy_waves = 8
        game.showLongText("wave 8", DialogLayout.Bottom)
    })
    timer.after(2560000, function () {
        enemy_waves = 9
        game.showLongText("wave 9", DialogLayout.Bottom)
    })
    timer.after(5120000, function () {
        enemy_waves = 10
        game.showLongText("wave 10", DialogLayout.Bottom)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . 5 5 5 7 5 5 5 5 5 5 . . . 
            . . c 7 7 5 7 7 5 5 7 5 c c . . 
            . . f 7 c f f f f f 7 7 c f . . 
            . . c 7 5 5 5 7 7 5 5 7 c c . . 
            . . . 5 f f 5 5 7 5 f f 5 . . . 
            . . . 5 f f f 5 5 f f f 5 . . . 
            . . . 5 5 f 7 5 5 5 f 5 5 . . . 
            . . . 5 7 7 7 f f 5 5 7 5 . . . 
            . . . 5 5 5 5 f f 7 7 7 5 . . . 
            . . . 5 7 f 5 5 5 7 f 5 5 . . . 
            . . . 5 7 7 f 5 5 f f f 5 . . . 
            . . . 7 f f 5 5 5 5 f f 5 . . . 
            . . c c 5 5 5 5 7 5 5 5 c c . . 
            . . f c c f f f 7 f f 7 c f . . 
            . . c c 5 5 7 7 5 5 5 7 7 c . . 
            `, SpriteKind.boss)
    })
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
    if (sprite == TurtleRed) {
        info.player1.changeLifeBy(damage)
        TurtleRed.startEffect(effects.fire, 2000)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
    if (sprite == TurtleRed) {
        info.player1.changeLifeBy(1)
        TurtleRed.startEffect(effects.hearts, 2000)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (otherSprite == TurtleRed) {
        if (mySprite == 2) {
            sprite.setPosition(randint(0, 225), randint(0, 225))
        } else {
            info.player1.changeLifeBy(damage)
            sprite.setPosition(randint(0, 225), randint(0, 225))
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.setWallAt(location, true)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile6`, function (sprite, location) {
    tiles.setWallAt(location, true)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.boss, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setPosition(randint(0, 225), randint(0, 225))
    sprite.destroy()
    info.changeScoreBy(10)
})
let redfire: Sprite = null
let mySprite2: Sprite = null
let enemy_waves = 0
let mySprite = 0
let projectile: Sprite = null
let anim: animation.Animation = null
let anim4left: animation.Animation = null
let anim3right: animation.Animation = null
let anim2foward: animation.Animation = null
let anim1back: animation.Animation = null
let straw7: Sprite = null
let straw6: Sprite = null
let straw5: Sprite = null
let straw4: Sprite = null
let straw3: Sprite = null
let straw2: Sprite = null
let Straw: Sprite = null
let damage = 0
let TurtleRed: Sprite = null
make_map()
call_sprites()
waves()
scene.cameraFollowSprite(TurtleRed)
TurtleRed.setStayInScreen(true)
info.setScore(0)
damage = -1
let speed = -1.5
let speed2 = 1.5
let ENEMYspeed = 3.5
Straw.follow(TurtleRed, ENEMYspeed)
straw2.follow(TurtleRed, ENEMYspeed)
straw3.follow(TurtleRed, ENEMYspeed)
straw4.follow(TurtleRed, ENEMYspeed)
straw5.follow(TurtleRed, ENEMYspeed)
straw6.follow(TurtleRed, ENEMYspeed)
straw7.follow(TurtleRed, ENEMYspeed)
forever(function () {
    if (controller.player1.isPressed(ControllerButton.Down)) {
        animation.setAction(TurtleRed, ActionKind.Walk_Back)
        TurtleRed.y += speed2
        animation.setAction(Straw, ActionKind.Walk_Back)
        Straw.y += 0.5
    } else if (controller.player1.isPressed(ControllerButton.Up)) {
        animation.setAction(TurtleRed, ActionKind.Walk_Foward)
        TurtleRed.y += speed
        animation.setAction(Straw, ActionKind.Walk_Foward)
        Straw.y += -0.5
    } else if (controller.player1.isPressed(ControllerButton.Right)) {
        animation.setAction(TurtleRed, ActionKind.Walk_Right)
        TurtleRed.x += speed2
        animation.setAction(Straw, ActionKind.Walk_Right)
        Straw.x += 0.5
    } else if (controller.player1.isPressed(ControllerButton.Left)) {
        animation.setAction(TurtleRed, ActionKind.Walk_Left)
        TurtleRed.x += speed
        animation.setAction(Straw, ActionKind.Walk_Left)
        Straw.x += -0.5
    } else {
        animation.setAction(TurtleRed, ActionKind.IDLE)
    }
    if (info.score() > 4) {
        if (controller.player1.isPressed(ControllerButton.A) && controller.player1.isPressed(ControllerButton.Right)) {
            scene.cameraShake(2, 100)
            redfire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . 4 4 d 7 4 . . . . . . 
                . . . 4 4 d d 4 4 4 4 . . . . . 
                . 4 4 5 7 4 4 5 d 7 4 . . . . . 
                4 5 5 7 d 5 5 d 7 7 4 . . . . . 
                7 4 4 5 5 5 5 5 7 4 4 . . . . . 
                7 d 5 d 7 7 4 4 4 . . . . . . . 
                4 4 4 4 7 . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, TurtleRed, 100, 0)
            info.changeScoreBy(-5)
        } else if (controller.player1.isPressed(ControllerButton.A) && controller.player1.isPressed(ControllerButton.Left)) {
            scene.cameraShake(2, 100)
            redfire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . 4 4 d 7 4 . . . . . . 
                . . . 4 4 d d 4 4 4 4 . . . . . 
                . 4 4 5 7 4 4 5 d 7 4 . . . . . 
                4 5 5 7 d 5 5 d 7 7 4 . . . . . 
                7 4 4 5 5 5 5 5 7 4 4 . . . . . 
                7 d 5 d 7 7 4 4 4 . . . . . . . 
                4 4 4 4 7 . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, TurtleRed, -100, 0)
            info.changeScoreBy(-5)
        } else if (controller.player1.isPressed(ControllerButton.A) && controller.player1.isPressed(ControllerButton.Down)) {
            scene.cameraShake(2, 100)
            redfire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . 4 4 d 7 4 . . . . . . 
                . . . 4 4 d d 4 4 4 4 . . . . . 
                . 4 4 5 7 4 4 5 d 7 4 . . . . . 
                4 5 5 7 d 5 5 d 7 7 4 . . . . . 
                7 4 4 5 5 5 5 5 7 4 4 . . . . . 
                7 d 5 d 7 7 4 4 4 . . . . . . . 
                4 4 4 4 7 . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, TurtleRed, 0, 100)
            info.changeScoreBy(-5)
        } else if (controller.player1.isPressed(ControllerButton.A) && controller.player1.isPressed(ControllerButton.Up)) {
            scene.cameraShake(2, 100)
            redfire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . 4 4 d 7 4 . . . . . . 
                . . . 4 4 d d 4 4 4 4 . . . . . 
                . 4 4 5 7 4 4 5 d 7 4 . . . . . 
                4 5 5 7 d 5 5 d 7 7 4 . . . . . 
                7 4 4 5 5 5 5 5 7 4 4 . . . . . 
                7 d 5 d 7 7 4 4 4 . . . . . . . 
                4 4 4 4 7 . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, TurtleRed, 0, -100)
            info.changeScoreBy(-5)
        }
    }
    if (mySprite == 1) {
        info.changeLifeBy(3)
    } else if (mySprite == 2) {
        damage = 0
        TurtleRed.startEffect(effects.rings, 5000)
        timer.after(14500, function () {
            damage = -1
        })
    } else if (mySprite == 3) {
        info.changeScoreBy(50)
    } else if (mySprite == 4) {
        info.changeScoreBy(100)
    } else if (mySprite == 5) {
        info.changeLifeBy(5)
    } else if (mySprite == 6) {
        for (let index = 0; index < 30; index++) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . 4 4 d 7 4 . . . . . . 
                . . . 4 4 d d 4 4 4 4 . . . . . 
                . 4 4 5 7 4 4 5 d 7 4 . . . . . 
                4 5 5 7 d 5 5 d 7 7 4 . . . . . 
                7 4 4 5 5 5 5 5 7 4 4 . . . . . 
                7 d 5 d 7 7 4 4 4 . . . . . . . 
                4 4 4 4 7 . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, TurtleRed, randint(-100, 100), randint(-100, 100))
        }
    } else if (mySprite == 7) {
        speed2 = 3
        speed = -3
        timer.after(20000, function () {
            speed2 = 1.5
            speed = -1.5
        })
    }
    if (info.score() > 200) {
        ENEMYspeed = 20
    } else if (info.score() > 400) {
        ENEMYspeed = 25
    } else if (info.score() > 400) {
        ENEMYspeed = 30
    } else if (info.score() > 600) {
        ENEMYspeed = 35
    } else if (info.score() > 800) {
        ENEMYspeed = 40
    } else if (info.score() > 900) {
        ENEMYspeed = 45
    } else if (info.score() > 1000) {
        ENEMYspeed = 50
    }
    Straw.follow(TurtleRed, enemy_waves * ENEMYspeed)
    straw2.follow(TurtleRed, enemy_waves * ENEMYspeed)
    straw3.follow(TurtleRed, enemy_waves * ENEMYspeed)
    straw4.follow(TurtleRed, enemy_waves * ENEMYspeed)
    straw5.follow(TurtleRed, enemy_waves * ENEMYspeed)
    straw6.follow(TurtleRed, enemy_waves * ENEMYspeed)
    straw7.follow(TurtleRed, enemy_waves * ENEMYspeed)
})
forever(function () {
	
})
