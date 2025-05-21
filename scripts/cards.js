
function makeOptions(options) {
    let html = ''
    for (o of options) {
        let option = `<h3>${o.title}</h3>`
        if (o.test) option += `<p><b>${ICONS['test']}</b> ${o.test}</p>`

        for (outcome of o.outcomes) {
            let values = []
            if (outcome.readiness < 0) {
                values.push("<span class='fail'>"+outcome.readiness + "</span>" + ICONS.readiness)
            } else if (outcome.readiness > 0) {
                values.push("<span class='pass'>+" + outcome.readiness +"</span>"+ ICONS.readiness)
            }
            if (outcome.loyalty < 0) {
                values.push("<span class='fail'>"+outcome.loyalty + "</span>" + ICONS.loyalty)
            } else if (outcome.loyalty > 0) {
                values.push("<span class='pass'>+" + outcome.loyalty +"</span>"+ ICONS.loyalty)
            }
            if (outcome.stability < 0) {
                values.push("<span class='fail'>" + outcome.stability + "</span>" + ICONS.stability)
            } else if (outcome.stability > 0) {
                values.push("<span class='pass'>+" + outcome.stability +"</span>"+ ICONS.stability)
            }
            if (outcome.reverence < 0) {
                values.push("<span class='fail'>" + outcome.reverence + "</span>" + ICONS.reverence)
            } else if (outcome.reverence > 0) {
                values.push("<span class='pass'>+" + outcome.reverence +"</span>"+ ICONS.reverence)
            }
            if (outcome.salvage < 0) {
                values.push("<span class='fail'>" + outcome.salvage + "</span>" + ICONS.salvage)
            } else if (outcome.salvage > 0) {
                values.push("<span class='pass'>+" + outcome.salvage + "</span>" + ICONS.salvage)
            }
            if (outcome.wealth < 0) {
                values.push("<span class='fail'>" + outcome.wealth + "</span>" + ICONS.wealth)
            } else if (outcome.wealth > 0) {
                values.push("<span class='pass'>+" + outcome.wealth + "</span>" + ICONS.wealth)
            }
            if (outcome.other) values.push(outcome.other)
            
            let data = `data-readiness='${outcome.readiness}' data-loyalty='${outcome.loyalty}' data-stability='${outcome.stability}' data-reverence='${outcome.reverence}' data-salvage='${outcome.salvage}' data-wealth='${outcome.wealth}'`
            
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

    game.changeStat('readiness', button.dataset.readiness)
    game.changeStat('loyalty', button.dataset.loyalty)
    game.changeStat('stability', button.dataset.stability)
    game.changeStat('reverence', button.dataset.reverence)
    
    game.changeStat('salvage', button.dataset.salvage)
    game.changeStat('wealth', button.dataset.wealth)

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