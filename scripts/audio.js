let SFX_LIST = [
    'flip',
    'place',
    'deal-0',
    'deal-1',
    'deal-2',
    'resolve',
    'end'
]
let SFX = {}

for (sfx of SFX_LIST){
    SFX[sfx] = new Howl({
        src: ['audio/sfx-'+sfx+'.mp3'],
        volume: 1,
        preload: true
    })
}

let MUSIC = new Howl({
    src: ['audio/the-dead-city.mp3'],
    volume: 0.5,
    preload: true,
    loop: true
})

MUSIC.play()