const ICONS = {
    warriors: "🛡️",
    economy: "💎",
    loyalty: "👑",
    order: "⚖️",
    reverence: "🧿",

    salvage: '⚙️',
    wealth: '💎',

    unworthy: "💡",
    logus: "👿",
    gate: "🌀",
    time: "⌛",
    fight: "⚔️",
    rest: '💤',
    test: '🎲',

    pass: '✔️',
    fail: '❌',
    
    crisis: "💥",
    dilemma: "❓",
    opportunity: "🌠",
}

let game = {
    activeMenu: null,
    days: 30,
    initialStats: {
        loyalty: 6,
        warriors: 9,
        order: 10,
        reverence: 12,
        salvage: 10,
        wealth: 10,
    },
    data: {
        cards: 0,
        gateCooldown: 2,
        restCooldown: -1,
        day: 3,
        stats: {
            loyalty: 0,
            warriors: 0,
            order: 0,
            reverence: 0,
            salvage: 0,
            wealth: 0,
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
                this.elements.$next.innerHTML = `${ICONS['fight']} <div>Begin Battle</div>`
            }
            this.elements.$next.disabled = true

            setTimeout(()=> {
                this.dealCards()
            }, 1000)
        }, 400)
    },
    dealCards: function() {
        let x = Math.floor(Math.random() * 3) + 1
        let y = Math.floor(Math.random() * 3) + 1
        if (y > x) x = y
        
        for (let i = 0; i < x; i++) {
            let $card = makeCard(events[Math.floor(Math.random() * events.length)])

            this.elements.$panel.appendChild($card)
            this.data.cards++
            this.checkCards()
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
            let stat = this.data.stats[name]

            let $stat = this.elements['$' + name]
            let $newStat = document.createElement('div')
            switch (name) {
                case 'loyalty':
                case 'warriors':
                case 'order':
                case 'reverence':
                    $newStat.innerHTML = addSign(stat)
                    $stat.innerHTML = ''
                    $stat.appendChild($newStat)

                    if (stat <= -5) {
                        $stat.parentElement.classList.remove('redline')
                        $stat.parentElement.classList.add('purpleline')
                    } else if (stat < 0) {
                        $stat.parentElement.classList.add('redline')
                        $stat.parentElement.classList.remove('purpleline')
                    } else {
                        $stat.parentElement.classList.remove('redline')
                        $stat.parentElement.classList.remove('purpleline')
                    }

                    break
                default:
                    $newStat.innerHTML = stat
                    $stat.innerHTML = ''
                    $stat.appendChild($newStat)
            }
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
        let $pip = this.elements.$pips[day]
        if (!$pip) {
            console.log("COULDN'T FIND PIP " + icon + ", " + day)
            return
        }
        switch(icon) {
            case 'gate':
                $pip.innerHTML = `<div class='countdown__icon countdown__icon--${icon}'><div class='spin'>${ICONS[icon]}</div></div>` + $pip.innerHTML
                break
            case 'logus':
                $pip.innerHTML = `<div class='countdown__icon countdown__icon--${icon}'><div class='pulse'>${ICONS[icon]}</div></div>` + $pip.innerHTML
                break
            case 'rest':
                $pip.innerHTML = `<div class='countdown__icon countdown__icon--${icon}'><div class='pulse'>${ICONS[icon]}</div></div>` + $pip.innerHTML
                break
            default:
                $pip.innerHTML = `<div class='countdown__icon countdown__icon--${icon}'><div>${ICONS[icon]}</div></div>` + $pip.innerHTML
                break
        }
    },
    toggleMenu: function(menu) {
        this.elements.$settings.classList.remove('visible')
        this.elements.$quests.classList.remove('visible')
        this.elements.$projects.classList.remove('visible')
        this.elements.$allies.classList.remove('visible')

        this.elements.$settingsBtn.classList.remove('active')
        this.elements.$questsBtn.classList.remove('active')
        this.elements.$projectsBtn.classList.remove('active')
        this.elements.$alliesBtn.classList.remove('active')

        if (this.activeMenu !== menu) {
            if (this.activeMenu !== null) {
                this.elements.$panel.classList.add('switch')
            } else {
                this.elements.$panel.classList.remove('switch')
            }
            this.elements['$'+menu+'Btn'].classList.add('active')
            this.elements['$'+menu].classList.add('visible')

            this.elements.$panel.classList.add('blur')
            
            this.activeMenu = menu
        } else {
            this.elements.$panel.classList.remove('switch')
            this.elements.$panel.classList.remove('blur')
            this.activeMenu = null
        }
    },
    initCountdown: function() {
        this.elements.$countdown = document.getElementById('countdown')
        this.elements.$next = document.getElementById('next')
        this.elements.$next.disabled = true

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
                    this.elements.$next.disabled = false
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
        }, this.data.day * 200 + 1500)

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
        this.elements.$warriors = document.getElementById('stat__warriors')
        this.elements.$loyalty = document.getElementById('stat__loyalty')
        this.elements.$order = document.getElementById('stat__order')
        this.elements.$reverence = document.getElementById('stat__reverence')
        
        this.elements.$salvage = document.getElementById('stat__salvage')
        this.elements.$wealth = document.getElementById('stat__wealth')

        this.changeStat('warriors', game.initialStats.warriors)
        this.changeStat('loyalty', game.initialStats.loyalty)
        this.changeStat('order', game.initialStats.order)
        this.changeStat('reverence', game.initialStats.reverence)

        this.changeStat('salvage', game.initialStats.salvage)
        this.changeStat('wealth', game.initialStats.wealth)
    },
    init: function() {
        this.elements.$gate = document.getElementById('gate')
        this.elements.$rest = document.getElementById('rest')

        this.elements.$settings = document.getElementById('menu__settings')
        this.elements.$settingsBtn = document.getElementById('toggle__settings')
        this.elements.$quests = document.getElementById('menu__quests')
        this.elements.$questsBtn = document.getElementById('toggle__quests')
        this.elements.$projects = document.getElementById('menu__projects')
        this.elements.$projectsBtn = document.getElementById('toggle__projects')
        this.elements.$allies = document.getElementById('menu__allies')
        this.elements.$alliesBtn = document.getElementById('toggle__allies')
        
        this.initStats()
        
        this.initCountdown()
    }
}

game.init()