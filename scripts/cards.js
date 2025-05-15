
function makeOptions(options) {
    let html = ''
    for (o of options) {
        let option = `<h3>${o.title}</h3>`
        if (o.test) option += `<p><b>Test</b> ${o.test}</p>`

        for (outcome of o.outcomes) {
            let values = []
            if (outcome.m < 0) {
                values.push(outcome.m + " " + ICONS.military)
            } else if (outcome.m > 0) {
                values.push("+" + outcome.m +" "+ ICONS.military)
            }
            if (outcome.l < 0) {
                values.push(outcome.l + " " + ICONS.loyalty)
            } else if (outcome.l > 0) {
                values.push("+" + outcome.l +" "+ ICONS.loyalty)
            }
            if (outcome.s < 0) {
                values.push(outcome.s + " " + ICONS.stability)
            } else if (outcome.s > 0) {
                values.push("+" + outcome.s +" "+ ICONS.stability)
            }
            if (outcome.r < 0) {
                values.push(outcome.r + " " + ICONS.reverence)
            } else if (outcome.r > 0) {
                values.push("+" + outcome.r +" "+ ICONS.reverence)
            }
            if (outcome.other) values.push(outcome.other)
            
            let data = `data-m='${outcome.m}' data-l='${outcome.l}' data-s='${outcome.s}' data-r='${outcome.r}'`
            
            option += `<button ${data}>
                <span class="${outcome.name.toLowerCase()}">${outcome.name}</span>
                ${values.join(', ')}
                </button>`
        }
        html += "<div class='inner option'>"+option+"</div>"
    }
    return html
}

function makeCard(card) {
    let $card = document.createElement('div')
    $card.classList.add('card-wrapper')
    $card.innerHTML = `
        <div class='card-bumper'>
            <div class='card ${card.type} flipped'>
                <div class=''>
                    <h2>${ICONS[card.type]} <span>${card.title}</span></h2>
                </div>
                <div class='inner'>
                    <p><i>${card.text}</i></p>
                </div>
                
                ${makeOptions(card.options)}
                <div class="front"></div>
            </div>
        </div>
    `
    return $card
}

game.elements.$panel = document.getElementById('panel')

game.elements.$panel.addEventListener('click', (e) => {
    let $card = e.target.closest('.card')
    if (!$card) {
        return
    }
    if ($card.classList.contains('card')
        && e.target.tagName !== 'BUTTON'
        && e.target.parentElement.tagName !== 'BUTTON'
        && !$card.classList.contains('locked'))
    {
        $card.classList.toggle('flipped')
        $card.classList.add('locked')
        $card.parentElement.classList.add('bump')
        
        setTimeout(() => {
            $card.classList.toggle('hide')
            $card.parentElement.classList.remove('bump')
        }, 500)

        setTimeout(()=> {
            $card.classList.remove('locked')
        }, 900)
    }

    if (e.target.tagName == "BUTTON") {
        resolve(e.target)
    }
})

function resolve(button) {
    let $card = button.closest('.card-wrapper')

    game.changeStat('military', button.dataset.m)
    game.changeStat('loyalty', button.dataset.l)
    game.changeStat('stability', button.dataset.s)
    game.changeStat('reverence', button.dataset.r)

    $card.classList.add('remove')
    $card.addEventListener('animationend', cleanupCard)
} 

function cleanupCard(e) {
    if (e.target.classList.contains('card-wrapper')) {
        e.target.remove()
        game.data.cards--
        game.checkCards()

        e.target.removeEventListener('animationend', cleanupCard)
    }
}