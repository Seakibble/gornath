
function makeOptions(options) {
    let html = ''
    for (o of options) {
        let option = `<h3>${o.title}</h3>`
        if (o.test) option += `<p><b>${ICONS['test']}</b> ${o.test}</p>`

        for (outcome of o.outcomes) {
            let values = []
            if (outcome.m < 0) {
                values.push("<span class='fail'>"+outcome.m + "</span>" + ICONS.military)
            } else if (outcome.m > 0) {
                values.push("<span class='pass'>+" + outcome.m +"</span>"+ ICONS.military)
            }
            if (outcome.l < 0) {
                values.push("<span class='fail'>"+outcome.l + "</span>" + ICONS.loyalty)
            } else if (outcome.l > 0) {
                values.push("<span class='pass'>+" + outcome.l +"</span>"+ ICONS.loyalty)
            }
            if (outcome.s < 0) {
                values.push("<span class='fail'>" + outcome.s + "</span>" + ICONS.stability)
            } else if (outcome.s > 0) {
                values.push("<span class='pass'>+" + outcome.s +"</span>"+ ICONS.stability)
            }
            if (outcome.r < 0) {
                values.push("<span class='fail'>" + outcome.r + "</span>" + ICONS.reverence)
            } else if (outcome.r > 0) {
                values.push("<span class='pass'>+" + outcome.r +"</span>"+ ICONS.reverence)
            }
            if (outcome.sa < 0) {
                values.push("<span class='fail'>" + outcome.sa + "</span>" + ICONS.salvage)
            } else if (outcome.sa > 0) {
                values.push("<span class='pass'>+" + outcome.sa + "</span>" + ICONS.salvage)
            }
            if (outcome.w < 0) {
                values.push("<span class='fail'>" + outcome.w + "</span>" + ICONS.wealth)
            } else if (outcome.w > 0) {
                values.push("<span class='pass'>+" + outcome.w + "</span>" + ICONS.wealth)
            }
            if (outcome.other) values.push(outcome.other)
            
            let data = `data-m='${outcome.m}' data-l='${outcome.l}' data-s='${outcome.s}' data-r='${outcome.r}' data-sa='${outcome.sa}' data-w='${outcome.w}'`
            
            let text = ''
            if (outcome.name == 'Pass') {
                text = ICONS['pass'] + " |"
            } else if (outcome.name == 'Fail') {
                text = ICONS['fail'] + " |"
            }
            if (values.length == 1 && values[0] == "") {
                values[0] = '—'
            } else if (values.length == 0) {
                values.push('—')
            }
            option += `<button ${data}>
                <span class="${outcome.name.toLowerCase()}">${text}</span>
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
                <div class='inner'>
                    <h2>${ICONS[card.type]} <span>${card.title}</span></h2>
                </div>
                <div class='inner'>
                    <p>${card.text}</p>
                </div>
                
                ${makeOptions(card.options)}
                <div class="front">
                    <div class='inset'></div>
                </div>
                <div class="sheen"></div>
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
        && !e.target.closest('.option')
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
    
    game.changeStat('salvage', button.dataset.sa)
    game.changeStat('wealth', button.dataset.w)

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