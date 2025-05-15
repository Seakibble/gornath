const ICONS = {
    military: "🛡️",
    economy: "💎",
    loyalty: "❤️",
    stability: "⚖️",
    reverence: "📿",
    logus: "👿",
    gate: "🌀",
    time: "⌛",
    fight: "⚔️",
    rest: '🛏️',
    
    crisis: "💥",
    dilemma: "❓",
    opportunity: "🌠",
}

let game = {
    days: 30,
    data: {
        cards: 0,
        gateCooldown: -1,
        restCooldown: -1,
        day: 3,
        stats: {
            military: 9,
            loyalty: 6,
            stability: 10,
            reverence: 12,
        },
    },
    elements: {},
    nextDay: function () {
        if (this.data.cards > 0) {
            alert("CARDS STILL IN PLAY")
            return
        }
        this.elements.$pips[this.data.day - 1].classList.remove('now')

        setTimeout(() => {
            this.data.day++
            this.elements.$pips[this.data.day - 1].classList.add('active')
            this.elements.$pips[this.data.day - 1].classList.add('now')

            this.data.gateCooldown--
            if (this.data.gateCooldown < 0) {
                this.elements.$gate.disabled = false

                let $gate = this.elements.$pips[this.data.day-1].querySelector('.countdown__icon--gate')
                if ($gate) $gate.remove()
            }

            this.tickRest()
            
            if (this.data.day == this.days - 1) {
                this.elements.$next.innerHTML = `${ICONS['fight']} Begin Battle`
            }
            this.elements.$next.disabled = true

            setTimeout(()=> {
                this.dealCards()
            }, 1000)
        }, 400)
    },
    dealCards: function() {
        let x = Math.floor(Math.random()*3)+1
        for (let i = 0; i < x; i++) {
            setTimeout(()=>{
                this.elements.$panel.innerHTML += makeCard(events[i])
                this.data.cards++
                this.checkCards()
            }, i*500)
        }
    },
    checkCards: function() {
        if (this.data.cards > 0) {
            this.elements.$next.disabled = true
        } else {
            this.elements.$next.disabled = false
        }
    },
    getDays: function () {
        let remaining = this.days - this.data.day
        if (remaining > 1) {
            this.elements.$days.innerText = remaining + " days remain"
        } else if (remaining == 1) {
            this.elements.$days.innerText = "Tomorrow, we fight for Gornath..."
        } else if (remaining == 0) {
            this.elements.$days.innerText = "May the Gods watch over us all..."
        }
    },
    changeStat: function(name, change){
        if (parseInt(change) !== 0) {
            this.data.stats[name] += parseInt(change)
            let $stat = document.createElement('div')
            $stat.innerText = this.data.stats[name]
            this.elements['$'+name].innerHTML = ''
            this.elements['$'+name].appendChild($stat)
        }
    },
    rest: function(){
        if (this.data.restCooldown < 0) {
            this.data.restCooldown = 3
            this.elements.$rest.querySelector('.text').innerText = "Cancel Rest"
            this.addIcon('rest', this.data.day + this.data.restCooldown)
        } else if (this.data.restCooldown >= 0) {
            this.elements.$rest.querySelector('.text').innerText = "Begin Rest"
            this.elements.$pips[this.data.day+this.data.restCooldown].querySelector('.countdown__icon--rest').remove()
            this.data.restCooldown = -1
        }
    },
    tickRest() {
        this.data.restCooldown--
        if(this.data.restCooldown == -1) {
            this.elements.$rest.querySelector('.text').innerText = "Begin Rest"
            this.elements.$pips[this.data.day+this.data.restCooldown].querySelector('.countdown__icon--rest').remove()
        }
    },
    useGate: function(){
        if (this.data.gateCooldown < 0) {
            this.data.gateCooldown = Math.floor(Math.random()*4)+2
            this.elements.$gate.disabled = true
            this.addIcon('gate', this.data.day + this.data.gateCooldown)

        }
    },
    addIcon: function (icon, day) {
        switch(icon) {
            case 'gate':
                this.elements.$pips[day].innerHTML += `<div class='countdown__icon countdown__icon--${icon}'><div class='spin'>${ICONS[icon]}</div></div>`
                break
            case 'logus':
                this.elements.$pips[day].innerHTML += `<div class='countdown__icon countdown__icon--${icon}'><div class='pulse'>${ICONS[icon]}</div></div>`
                break
            default:
                this.elements.$pips[day].innerHTML += `<div class='countdown__icon countdown__icon--${icon}'><div>${ICONS[icon]}</div></div>`
                break
        }
    },
    initCountdown: function() {
        this.elements.$countdown = document.getElementById('countdown')
        this.elements.$next = document.getElementById('next')

        for (let i = 0; i < this.days; i++) {
            let icon = ""

            icon += `<div class='countdown__icon countdown__date'>${this.days-i-1}</div>`

            this.elements.$countdown.innerHTML += `<div class="countdown__pip">${icon}</div>`
        }

        this.elements.$pips = this.elements.$countdown.querySelectorAll('.countdown__pip')
    

        for (let i = 0; i < this.data.day; i++) {
            setTimeout(()=>{
                this.elements.$pips[i].classList.add('active')
            }, i * 200 + 500)
            
            if (i == this.data.day - 1) {
                setTimeout(() => {
                    this.elements.$pips[i].classList.add('now')
                }, i * 200 + 800)
            }
        }

        if (this.data.gateCooldown >= 0) {
            this.elements.$gate.disabled = true
            setTimeout(() => {
                this.addIcon('gate', this.data.day + this.data.gateCooldown)
            }, this.data.day * 200 + 1500)
        }

        setTimeout(() => {
            this.addIcon('logus', 29)
        }, this.data.day * 200 + 2500)

        for (let i = 0; i < this.days; i++) {
            if (i < 10) {
                this.elements.$pips[i].classList.add('early')
            } else if (i < 19) {
                this.elements.$pips[i].classList.add('mid')
            } else if (i < 26) {
                this.elements.$pips[i].classList.add('late')
            } else {
                this.elements.$pips[i].classList.add('end')
            }
        }

        this.elements.$days = document.getElementById('days')
        // this.getDays()
    },
    initStats: function() {
        this.elements.$stats = document.getElementById('stats')

        for (const [key, value] of Object.entries(this.data.stats)) {
            this.elements.$stats.innerHTML += `<div class="stats__stat">
                <div class="stats__icon">${ICONS[key]}</div>
                <div class="stats__name">${pretty(key)}</div>
                <div id="stat__${key}" class="stats__value">${value}</div>
            </div>`
        }
        this.elements.$military = document.getElementById('stat__military')
        this.elements.$loyalty = document.getElementById('stat__loyalty')
        this.elements.$stability = document.getElementById('stat__stability')
        this.elements.$reverence = document.getElementById('stat__reverence')
    },
    init: function() {
        this.elements.$gate = document.getElementById('gate')
        this.elements.$rest = document.getElementById('rest')
        
        this.initStats()
        this.initCountdown()
    }
}

game.init()