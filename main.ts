info.player4.onLifeZero(function () {
    game.setDialogTextColor(1)
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        `)
    if (!(info.player1.hasLife()) && (!(info.player2.hasLife()) && !(info.player3.hasLife()))) {
        game.showLongText("Player 4 Wins!", DialogLayout.Bottom)
        game.over(true)
    } else {
        game.showLongText("Player 4 is out :-(", DialogLayout.Bottom)
        player4.destroy()
    }
})
info.player3.onLifeZero(function () {
    game.setDialogTextColor(1)
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        `)
    if (!(info.player1.hasLife()) && (!(info.player2.hasLife()) && !(info.player4.hasLife()))) {
        game.showLongText("Player 3 Wins!", DialogLayout.Bottom)
        game.over(true)
    } else {
        game.showLongText("Player 3 is out :-(", DialogLayout.Bottom)
        player3.destroy()
    }
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (info.player3.hasLife()) {
        dart3 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 5 a a 8 . . . . . . . . . . . 
            5 5 a 8 8 8 8 4 4 4 4 . . . . . 
            . 5 a a 8 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player3, 200, 0)
    }
})
info.player1.onLifeZero(function () {
    game.setDialogTextColor(1)
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        `)
    if (!(info.player2.hasLife()) && (!(info.player3.hasLife()) && !(info.player4.hasLife()))) {
        game.showLongText("Player 1 Wins!", DialogLayout.Bottom)
        game.over(true)
    } else {
        game.showLongText("Player 1 is out :-(", DialogLayout.Bottom)
        player1.destroy()
    }
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (info.player4.hasLife()) {
        dart4 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 5 a a 5 . . . . . . . . . . . 
            5 5 a 5 5 5 5 4 4 4 4 . . . . . 
            . 5 a a 5 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player4, 200, 0)
    }
})
info.player2.onLifeZero(function () {
    game.setDialogTextColor(1)
    game.setDialogFrame(img`
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f 
        `)
    if (!(info.player1.hasLife()) && (!(info.player3.hasLife()) && !(info.player4.hasLife()))) {
        game.showLongText("Player 2 Wins!", DialogLayout.Bottom)
        game.over(true)
    } else {
        game.showLongText("Player 2 is out :-(", DialogLayout.Bottom)
        player2.destroy()
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (info.player2.hasLife()) {
        dart2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 5 a a 7 . . . . . . . . . . . 
            5 5 a 7 7 7 7 4 4 4 4 . . . . . 
            . 5 a a 7 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player2, 200, 0)
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (info.player1.hasLife()) {
        dart1 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 5 a a 6 . . . . . . . . . . . 
            5 5 a 6 6 6 6 4 4 4 4 . . . . . 
            . 5 a a 6 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, player1, 200, 0)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == dart1) {
        info.player1.changeScoreBy(1)
    } else if (sprite == dart2) {
        info.player2.changeScoreBy(1)
    } else if (sprite == dart3) {
        info.player3.changeScoreBy(1)
    } else {
        info.player4.changeScoreBy(1)
    }
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == player1) {
        info.player1.changeLifeBy(-1)
        scene.cameraShake(4, 200)
    } else if (sprite == player2) {
        info.player2.changeLifeBy(-1)
        scene.cameraShake(4, 200)
    } else if (sprite == player3) {
        info.player3.changeLifeBy(-1)
        scene.cameraShake(4, 200)
    } else {
        info.player4.changeLifeBy(-1)
        scene.cameraShake(4, 200)
    }
    otherSprite.destroy(effects.fire, 200)
})
let bogey: Sprite = null
let dart1: Sprite = null
let dart2: Sprite = null
let dart4: Sprite = null
let dart3: Sprite = null
let player3: Sprite = null
let player4: Sprite = null
let player2: Sprite = null
let player1: Sprite = null
game.splash("Ask your friends to join", "Then press A")
effects.starField.startScreenEffect()
player1 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ....82..........................
    ....111.....999999..............
    ....2222...99999999.............
    .444.8222222999999222...........
    422.22222222222222222222........
    .44.288822222222222222222.......
    ..44.88.....222222222222........
    ...........22222228.............
    ...........2222228..............
    ..........2222228...............
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
player1.setPosition(20, 15)
player1.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(player1, 200, 200)
info.player1.setLife(3)
info.player1.setScore(0)
player2 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ....8a..........................
    ....111.....999999..............
    ....aaaa...99999999.............
    .aaa.c888888999999888...........
    a88.88888888888888888888........
    .aa.8ccc88888888888888888.......
    ..aa.cc.....888888888888........
    ...........88888885.............
    ...........8888885..............
    ..........8888885...............
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
player2.setPosition(20, 45)
player2.setFlag(SpriteFlag.StayInScreen, true)
controller.player2.moveSprite(player2, 200, 200)
info.player2.setLife(3)
info.player2.setScore(0)
game.onUpdateInterval(500, function () {
    if (true) {
        bogey = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 . . . . . 5 . . . . 
            . . . 9 9 9 9 . . . 5 5 . . . . 
            2 2 2 2 9 9 2 2 2 2 2 . 4 4 . . 
            . . 2 2 2 2 5 5 5 2 2 . 4 4 4 . 
            . . . . . . 5 5 5 . . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        bogey.setVelocity(-50, 0)
        bogey.setPosition(180, randint(0, 120))
    } else {
    	
    }
})
