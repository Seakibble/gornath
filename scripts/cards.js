
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
            
            option += '<button><span class="' + outcome.name.toLowerCase() +'">' + outcome.name + "</span> " + values.join(', ') + '</button>'
        }
        html += option
    }
    return html
}

function makeCard(card) {
    return `
        <div class='card-wrapper'><div class='card ${card.type} flipped'>
            <div class='inner'>
                <h2>${ICONS[card.type]} ${card.title}</h2>
                <p>${card.text}</p>

                ${makeOptions(card.options)}
            </div>
            <div class="front"></div>
        </div></div>
    `
}

let $panel = document.getElementById('panel')




$panel.innerHTML += makeCard(events[0]) + makeCard(events[1]) + makeCard(events[2])


$panel.addEventListener('animationend', (e) => {
    if (e.target.classList.contains('card')) {
        e.target.classList.remove('flipping')
    }
})

$panel.addEventListener('click', (e) => {
    let $card = e.target.closest('.card')
    if ($card.classList.contains('card') && e.target.tagName !== 'BUTTON') {
        $card.classList.toggle('flipped')
        // $card.classList.add('flipping')
        setTimeout(() => {
            $card.classList.toggle('hide')
        }, 500);
    }
})