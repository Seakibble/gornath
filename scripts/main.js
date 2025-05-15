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
    
    crisis: "💥",
    dilemma: "❓",
    opportunity: "🌠",
}

let game = {
    days: 30,
    data: {
            gateCooldown: 2,
        day: 3,
        stats: {
            military: 10,
            loyalty: 10,
            stability: 10,
            reverence: 10,
        },
    },
    elements: {},
    nextDay: function () {
        this.elements.$pips[this.data.day - 1].classList.remove('now')

        setTimeout(() => {
            this.data.day++
            this.elements.$pips[this.data.day - 1].classList.add('active')
            this.elements.$pips[this.data.day - 1].classList.add('now')
        },400)
        
        
        
        this.data.gateCooldown--
        if (this.data.day == this.days - 1) {
            this.elements.$next.innerHTML = `${ICONS['fight']} Begin Battle`
        }
        this.elements.$next.disabled = true

        if (this.data.day != this.days - 1) {
            setTimeout(() => {
                this.elements.$next.disabled = false
            }, 400)
        }
        // this.getDays()
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
    initCountdown: function() {
        this.elements.$countdown = document.getElementById('countdown')
        this.elements.$next = document.getElementById('next')

        for (let i = 0; i < this.days; i++) {
            let icon = ""
            if (i == this.data.day + this.data.gateCooldown) {
                icon += `<div class='countdown__icon'>${ICONS['gate']}</div>`
            }
            if (i == this.days-1) {
                icon += `<div class='countdown__icon'>${ICONS['logus']}</div>`
            }
            if (icon == '') {
                icon = `<div class='countdown__icon countdown__date'>${this.days-i-1}</div>`
            }
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
                <div class="stats__value">${value}</div>
            </div>`
        }
    },
    init: function() {
        this.initStats()
        this.initCountdown()
    }
}

game.init()