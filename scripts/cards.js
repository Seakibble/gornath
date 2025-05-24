
function makeOptions(options) {
    let html = ''
    for (o of options) {
        let option = `<h3>${o.title}</h3>`
        if (o.test) option += `<p><b>${ICONS['test']}</b> ${o.test}</p>`

        for (outcome of o.outcomes) {
            let values = []
            if (outcome.warriors < 0) {
                values.push("<span class='fail'>"+outcome.warriors + "</span>" + ICONS.warriors)
            } else if (outcome.warriors > 0) {
                values.push("<span class='pass'>+" + outcome.warriors +"</span>"+ ICONS.warriors)
            }
            if (outcome.loyalty < 0) {
                values.push("<span class='fail'>"+outcome.loyalty + "</span>" + ICONS.loyalty)
            } else if (outcome.loyalty > 0) {
                values.push("<span class='pass'>+" + outcome.loyalty +"</span>"+ ICONS.loyalty)
            }
            if (outcome.order < 0) {
                values.push("<span class='fail'>" + outcome.order + "</span>" + ICONS.order)
            } else if (outcome.order > 0) {
                values.push("<span class='pass'>+" + outcome.order +"</span>"+ ICONS.order)
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
            if (outcome.intel < 0) {
                values.push("<span class='fail'>" + outcome.intel + "</span>" + ICONS.intel)
            } else if (outcome.intel > 0) {
                values.push("<span class='pass'>+" + outcome.intel + "</span>" + ICONS.intel)
            }
            if (outcome.other) values.push(outcome.other)
            
            let data = `data-warriors='${outcome.warriors}' data-loyalty='${outcome.loyalty}' data-order='${outcome.order}' data-reverence='${outcome.reverence}' data-salvage='${outcome.salvage}' data-wealth='${outcome.wealth}' data-intel='${outcome.intel}'`
            
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
    $card.dataset.id = card.id
    $card.innerHTML = `
        <div class='card-bumper'>
            <div class='card ${card.type} flipped'>
                <div class='inner'>
                    <h2>${ICONS[card.type]} <span>${card.title}</span></h2>
                </div>
                <div class='card-scroller'>
                    <div class='inner'>
                        <p>${card.text}</p>
                    </div>
                    
                    ${makeOptions(card.options)}
                </div>
                <div class="front">
                    <div class='image'></div>    
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
        }, 350)
        setTimeout(() => {
            $card.parentElement.classList.remove('bump')
            game.sfx.place.play()
        }, 415);

        setTimeout(()=> {
            $card.classList.remove('locked')
        }, 900)

        game.sfx.flip.play()
    }

    if (e.target.tagName == "BUTTON") {
        resolve(e.target)
    }
})

function resolve(button) {
    let $card = button.closest('.card-wrapper')

    game.changeStat('warriors', button.dataset.warriors)
    game.changeStat('loyalty', button.dataset.loyalty)
    game.changeStat('order', button.dataset.order)
    game.changeStat('reverence', button.dataset.reverence)
    
    game.changeStat('salvage', button.dataset.salvage)
    game.changeStat('wealth', button.dataset.wealth)
    game.changeStat('intel', button.dataset.intel)

    $card.classList.add('remove')
    $card.addEventListener('animationend', cleanupCard)
} 

function cleanupCard(e) {
    if (e.target.classList.contains('card-wrapper')) {
        e.target.remove()
        let id = e.target.dataset.id
        game.data.cards.inPlay.splice(game.data.cards.inPlay.findIndex((card)=>{return card.id == id}), 1)
        game.checkCards()
        game.data.cards.discarded.push(id)

        e.target.removeEventListener('animationend', cleanupCard)
    }
}