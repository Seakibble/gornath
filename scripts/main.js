const ICONS = {
    military: "[M]",
    economy: "[E]",
    loyalty: "[L]",
    stability: "[S]",
    logus: ":("
}

let game = {
    days: 30,
    data: {
        day: 3,
        stats: {
            military: 10,
            economy: 10,
            loyalty: 10,
            stability: 10,
        },
    },
    elements: {},
    nextDay: function() {
        this.data.day++
        this.elements.$pips[this.data.day-1].classList.add('active')
        this.elements.$days.innerText = this.days - this.data.day
    },
    initCountdown: function() {
        this.elements.$countdown = document.getElementById('countdown')

        for (let i = 0; i < this.days; i++) {
            let icon =""
            if (i == this.days-1) {
                icon =`<div class='countdown__icon'>${ICONS['logus']}</div>`
            }
            this.elements.$countdown.innerHTML += `<div class="countdown__pip">${icon}</div>`
        }

        this.elements.$pips = this.elements.$countdown.querySelectorAll('.countdown__pip')

        for (let i = 0; i < this.data.day; i++) {
            setTimeout(()=>{
                this.elements.$pips[i].classList.add('active')
            }, i*100)
        }

        this.elements.$days = document.getElementById('days')
        this.elements.$days.innerText = this.days - this.data.day
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