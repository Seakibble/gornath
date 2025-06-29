

let game = {
    activeMenu: null,
    days: 30,
    initialStats: {
        loyalty: 6,
        warriors: 9,
      
        order: 10,
        reverence: 12,
        salvage: 3,
        wealth: 3,
        intel: 0,
    },
    data: {
        flags: [],
        cards: {
            locked: [],
            unlocked: [],
            scheduled: [],
            inPlay: [],
            discarded: [],
        },
        gateCooldown: 1,
        restCooldown: -1,
        day: 4,
        stats: {
            loyalty: 0,
            warriors: 0,
            order: 0,
            reverence: 0,
            salvage: 0,
            wealth: 0,
            intel: 0,
        },
        projects: [],
        quests: [],
        newProjects: [],
        intelligence: [],
    },
    undoStack: [],
    elements: {},
    nextDay: function () {includes
        if (this.data.cards.inPlay > 0) {
            alert("CARDS STILL IN PLAY")
            return
        }
        this.setUndoState("Next Day")
        this.elements.$pips[this.data.day - 1].classList.remove('now')
        this.toggleMenu()
        SFX.end.play()

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
        let scheduledCards = []
        for(let i = game.data.cards.scheduled.length-1; i >= 0; i--) {
            let deck = game.data.cards.scheduled

            let cardData = EVENTS[deck[i]]

            
            if (cardData.scheduled && parseInt(cardData.scheduled) >= this.days-this.data.day) {
                let card = deck.splice(i, 1)[0]
                if (!cardData.locked) {
                    scheduledCards.push(card)
                }
            }
        }

        let x = Math.floor(Math.random() * 3) + 1
        // let y = Math.floor(Math.random() * 3) + 1
        // if (y > x) x = y

        // if (game.data.day === 3) x = 2
        // y = 0

        for(let i = scheduledCards.length -1; i >= 0; i--) {
            this.drawCard(scheduledCards, i)
            x--
        }

        if (game.data.cards.unlocked.length < x) {
            x = game.data.cards.unlocked.length
            
            if (x = 0) {
                alert("OUT OF CARDS!")
                return
            }
        }
        
        for (let i = 0; i < x; i++) {
            this.drawCard(game.data.cards.unlocked, i+x)
        }
    },
    drawCard(deck, cardNum = 0) {
        let num = Math.floor(Math.random() * deck.length)
        let cardIndex = deck.splice(num, 1)[0]

        let $card = makeCard(EVENTS[cardIndex], cardNum)

        this.elements.$panel.appendChild($card)
        this.data.cards.inPlay.push(cardIndex)
        this.checkCards()

    },
    forceEvent(id) {
        let $card = makeCard(EVENTS[id])

        this.elements.$panel.appendChild($card)
        this.data.cards.inPlay.push(id)
        let isInUnlockedDeck = this.data.cards.unlocked.findIndex(x => x == id)
        if (isInUnlockedDeck) {
            this.data.cards.unlocked.splice(isInUnlockedDeck, 1)
        }

        let isInLockedDeck = this.data.cards.locked.findIndex(x => x == id)
        if (isInLockedDeck) {
            this.data.cards.locked.splice(isInLockedDeck, 1)
        }
        this.checkCards()
    },
    checkCards: function() {
        if (this.data.cards.inPlay.length > 0) {
            this.elements.$next.disabled = true
        } else {
            let immediateCards = []
            for (let i = this.data.cards.unlocked.length-1; i >= 0; i--) {
                if (EVENTS[this.data.cards.unlocked[i]].priority == 'immediate') {
                    immediateCards.push(this.data.cards.unlocked.splice(i, 1)[0])
                }
            }
            if (immediateCards.length > 0) {
                let i = 0
                for (let i = 0; i < immediateCards.length; i++) {
                    setTimeout(() => {
                        this.drawCard(immediateCards)
                    }, i * 250);
                }
            } else {
                this.elements.$next.disabled = false
            }  
        }
        this.saveData()
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
    changeStat: function(name, change, flash = false){
        if (parseInt(change) !== 0 || flash) {
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
            if(name == 'intel' && this.data.stats.intel > 0) {
                this.alert('allies')
            }
        }
    },
    rest: function(){
        if (this.data.restCooldown < 0) {
            this.setUndoState("Start Rest")
            this.data.restCooldown = 3
            this.elements.$rest.querySelector('.text').innerText = "Cancel Rest"
            this.addIcon('rest', this.data.day + this.data.restCooldown)
        } else if (this.data.restCooldown >= 0) {
            this.setUndoState("Cancel Rest")
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
        this.setUndoState("Activate Gate")
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
    declaration: function(h1,h2) {
        let $dec = document.createElement('div')
        $dec.classList.add('declaration__outer')
        $dec.innerHTML = `
            <div class="declaration__inner">
                <h1>${h1}</h1>
                <h2>${h2}</h2>
            </div>`

        this.elements.$declaration.appendChild($dec)
    },
    alert: function(menu) {
        this.elements['$'+menu+'Btn'].classList.add('alert')
    },
    alertClear: function(menu) {
        this.elements['$'+menu+'Btn'].classList.remove('alert')
    },
    populateMenu: function(menu) {
        let content = ''
        switch(menu) {
            case 'quests':
                this.elements.$questList.innerHTML = ''
                this.elements.$questDetails.innerHTML = ''
                
                QUESTS.sort((a, b) => {
                    if (a.type > b.type) return 1
                    else if (a.type < b.type) return -1
                    else if (a.name > b.name) return 1
                    else if (a.name < b.name) return -1
                    else return 0
                })

                QUESTS.sort((a, b) => {
                    if (a.status == 'open' && b.status == 'complete') return -1
                    else if (a.status == 'closed' && b.status == 'open') return 1
                    else return 0
                })
                
                let questList = ''
                let type = null
                let status = null
                for (quest of QUESTS) {
                    let text = quest.type
                    switch(quest.type) {
                        case 'main': text = 'Main Story'; break
                        case 'personal': text = 'Personal Missions'; break
                        case 'necropolis': text = 'Within the Necropolis'; break
                        case 'xgornath': text = 'Within Gornath'; break
                    }
                    if (quest.status == 'complete') {
                        text = "Completed"
                    }

                    if (quest.status == 'open' && type != quest.type 
                        || quest.status == 'complete' && status == 'open') {
                        questList += `<h2>${text}</h2>`
                    }

                    type = quest.type
                    status = quest.status                        
 
                    questList += `
                    <div id="quest-${quest.id}" class='quest__item quest--${quest.type} quest--${quest.status}' data-id=${quest.id}>
                        ${quest.name}
                    </div>`
                }
                this.elements.$questList.innerHTML = questList + '</div>'
                
                this.selectQuest(QUESTS[0].id)
                break
            case 'projects':
                this.alertClear('projects')

                for (pro of PROJECTS) {
                    pro.purchased = this.data.projects.includes(pro.id)
                }
                PROJECTS.sort((x, y)=> {
                    let xNew = this.data.newProjects.includes(x.id)
                    let yNew = this.data.newProjects.includes(y.id)

                    if (xNew && !yNew) return -1
                    if (!xNew && yNew) return 1

                    return (x.purchased === y.purchased) ? 0 : x.purchased ? 1 : -1;
                })
                PROJECTS.forEach((pro) => {
                    if (pro.requires && !this.data.flags.includes(pro.requires)) {
                        return
                    }
                    let purchased = ''
                    if (this.data.projects.includes(pro.id)) {
                        purchased = 'purchased'
                    }
                    let newProject = ''
                    if (this.data.newProjects.includes(pro.id)) {
                        newProject = 'new'
                    }

                    let time = pro.time
                    if (time == 0) {
                        time = 'Instant'
                    } else if (time == 1) {
                        time = time + " Day"
                    } else {
                        time = time + " Days"
                    }

                    let unaffordable =  this.isAffordable(pro) ? '' : 'unaffordable'

                    let cost = []
                    if (pro.cost.loyalty > 0) { cost.push(pro.cost.loyalty +" "+ ICONS['loyalty']) }
                    if (pro.cost.warriors > 0) { cost.push(pro.cost.warriors +" "+ ICONS['warriors']) }
                    if (pro.cost.order > 0) { cost.push(pro.cost.order +" "+ ICONS['order']) }
                    if (pro.cost.reverence > 0) { cost.push(pro.cost.reverence +" "+ ICONS['reverence']) }
                    if (pro.cost.salvage > 0) { cost.push(pro.cost.salvage +" "+ ICONS['salvage']) }
                    if (pro.cost.wealth > 0) { cost.push(pro.cost.wealth +" "+ ICONS['wealth']) }
                    if (pro.cost.intel > 0) { cost.push(pro.cost.intel +" "+ ICONS['intel']) }
                    if (cost.length == 0) {
                        cost = ['—']
                    }

                    let confers = []
                    if (pro.return.loyalty > 0) { confers.push(pro.return.loyalty +" "+ ICONS['loyalty']) }
                    if (pro.return.warriors > 0) { confers.push(pro.return.warriors +" "+ ICONS['warriors']) }
                    if (pro.return.order > 0) { confers.push(pro.return.order +" "+ ICONS['order']) }
                    if (pro.return.reverence > 0) { confers.push(pro.return.reverence +" "+ ICONS['reverence']) }
                    if (pro.return.salvage > 0) { confers.push(pro.return.salvage +" "+ ICONS['salvage']) }
                    if (pro.return.wealth > 0) { confers.push(pro.return.wealth +" "+ ICONS['wealth']) }
                    if (pro.return.intel > 0) { confers.push(pro.return.intel +" "+ ICONS['intel']) }
                    if (confers.length == 0) {
                        confers = ['—']
                    }

                    if (purchased) { unaffordable = ''}

                    content += `<div id='project-${pro.id}' class='project ${newProject} ${purchased} ${unaffordable}' data-id='${pro.id}'>
                        <h2>${pro.name}</h2>
                        <!-- <p><b>TIME:</b> ${time}</p> -->
                        <div class="project__details">
                            <p><b>Cost:</b> ${cost.join(' ')}</p>
                            <p><b>Provides:</b> ${confers.join(' ')}</p>
                        </div>
                        <p>${pro.text}</p>
                        
                        <button onclick="game.purchase(${pro.id})" ${(purchased === "" && unaffordable === '') ? '' : 'disabled'}>Authorize</button>
                        <div class='banner'></div>
                    </div>`
                })
                this.elements.$projects.innerHTML = content

                PROJECTS.sort((x, y)=> {
                    return x.id - y.id
                })
                this.data.newProjects = []
                break

            case 'allies':
                this.elements.$allies.innerHTML = ''
                
                if (game.data.stats.intel > 0) {
                    this.elements.$allies.classList.add('has--intel')
                }
                
                INTEL.sort((a, b) => {
                    return a.type === b.type ? 0 : a.type > b.type ? 1 : -1
                })
                
                let currentType = null
                for (intelligence of INTEL) {
                    let $card = makeIntelCard(intelligence)
                    if (currentType !== intelligence.type) {
                        $card.classList.add('first')
                        currentType = intelligence.type
                    }
                    this.elements.$allies.appendChild($card)
                }
                break
        }
    },
    isAffordable: function(pro) {
        return (this.data.stats.wealth >= pro.cost.wealth
                && this.data.stats.salvage >= pro.cost.salvage
                && this.data.stats.intel >= pro.cost.intel)
    },
    purchase: function(id) {
        let pro = PROJECTS.find((project) => project.id === id)
        if (pro.cost.wealth <= game.data.stats.wealth && pro.cost.salvage <= game.data.stats.salvage && pro.cost.intel <= game.data.stats.intel) {
            this.setUndoState("Purchase " + pro.name)
            let $project = document.getElementById('project-'+id)
            $project.classList.add('purchased')
            $project.querySelector('button').disabled = true
            game.data.projects.push(id)

            
            game.changeStat('loyalty', pro.return.loyalty - pro.cost.loyalty)
            game.changeStat('warriors', pro.return.warriors - pro.cost.warriors)
            game.changeStat('order', pro.return.order - pro.cost.order)
            game.changeStat('reverence', pro.return.reverence - pro.cost.reverence)
            game.changeStat('wealth', pro.return.wealth - pro.cost.wealth)
            game.changeStat('salvage', pro.return.salvage - pro.cost.salvage)
            game.changeStat('intel', pro.return.intel - pro.cost.intel)

            if (pro.callback) {
                eval(pro.callback)
            }
            if (pro.declaration) {
                this.declaration(pro.declaration[0], pro.declaration[1])
            }

            let $projectsList = this.elements.$projects.children

            for ($pro of $projectsList) {
                if (!this.isAffordable(PROJECTS[$pro.dataset.id])) {
                    $pro.classList.add('unaffordable')
                    $pro.querySelector('button').disabled = true
                } else if (!$pro.classList.contains('purchased')) {
                    $pro.classList.remove('unaffordable')
                    $pro.querySelector('button').disabled = false
                }
            }

            console.log(pro)
            if (pro.major == true) {
                SFX.bigSting.play()
            } else {
                SFX.mediumSting.play()
            }

            this.saveData()
        }
    },
    selectQuest: function(id) {
        let $selected = this.elements.$questList.querySelector('.selected')
        if ($selected) {
            $selected.classList.remove('selected')
        }
        if (id == null) {
            this.elements.$questDetails.innerHTML = ''
            return
        }
        
        $selected = document.getElementById('quest-'+id)

        if (!$selected) {
            console.log('ERROR! Could not find quest ' + id + '!')
            return
        }
        $selected.classList.add('selected')
        
        let quest = QUESTS.find((quest) => quest.id == id)

        let toggleStatus = 'Mark as Completed'
        if (quest.status == 'complete') {
            toggleStatus = 'Mark as Open'
        }

        this.elements.$questDetails.innerHTML = `
            <h2>${quest.name}</h2>
            <p>${quest.text}</p>
            <h3>Possible Outcomes</h3>
            <ul><li>${quest.outcomes.join("</li><li>")}</li></ul>
            <button onclick="game.toggleQuest(${quest.id})">${toggleStatus}</button>`
    },
    toggleQuest(id) {
        let quest = QUESTS.find((q)=>{ return q.id == id })
        if (!this.data.quests.includes(id)) {
            this.data.quests.push(id)
        } else {
            this.data.quests.splice(this.data.quests.findIndex((q) => {q.id == id}),1)
        }

        SFX.mediumSting.play()
        if (quest.status == 'open') {
            quest.status = 'complete'

            this.populateMenu('quests')
            this.selectQuest(null)
        } else {
            quest.status = 'open'
            this.populateMenu('quests')
            this.selectQuest(quest.id)

            let $el = document.getElementById(`quest-${quest.id}`)

            while ($el.tagName !== 'H2') {
                $el = $el.previousSibling
            }

            $el.scrollIntoView()
        }
        this.saveData()
    },
    toggleMenu: function(menu = '') {
        this.elements.$settingsTab.classList.remove('visible')
        this.elements.$questsTab.classList.remove('visible')
        this.elements.$projectsTab.classList.remove('visible')
        this.elements.$alliesTab.classList.remove('visible')

        this.elements.$settingsBtn.classList.remove('active')
        this.elements.$questsBtn.classList.remove('active')
        this.elements.$projectsBtn.classList.remove('active')
        this.elements.$alliesBtn.classList.remove('active')

        if (this.activeMenu !== menu && menu !== '') {
            if (this.activeMenu !== null) {
                this.elements.$panel.classList.add('switch')
            } else {
                this.elements.$panel.classList.remove('switch')
            }
            this.elements['$'+menu+'Btn'].classList.add('active')
            this.elements['$'+menu+"Tab"].classList.add('visible')

            this.elements.$panel.classList.add('blur')
            
            this.activeMenu = menu

            this.populateMenu(menu)
        } else {
            this.elements.$panel.classList.remove('switch')
            this.elements.$panel.classList.remove('blur')
            this.activeMenu = null
        }
    },
    undo: function(actions = 1) {
        if (this.undoStack.length > 0) { 
            while (actions > 0 && this.undoStack.length > 0) {
                this.data = this.undoStack.pop()
                actions--
            }
            this.saveData()
            location.reload()
        } else {
            console.log("Nothing to undo!")
        }
    },
    checkUndo() {
        if (!this.undoStack) {
            this.undoStack = []
        }
        if (this.undoStack.length == 0) {
            this.elements.$undo.classList.add('disabled')
        } else {
            this.elements.$undo.classList.remove('disabled')

            let undoHTML = ``
            for (let i = this.undoStack.length-1; i >= 0; i--) {
                undoHTML += `<button onclick="game.undo(${this.undoStack.length-i})"><span>${this.undoStack.length-i}.</span> ${this.undoStack[i].action}</button>`
            }
            this.elements.$undo.innerHTML = `⏮️ <div class="undoList"><h3>Undo How Many Actions?</h3>${undoHTML}</div>`
        }
    },
    setUndoState: function(action = "") {
        let lastState = JSON.parse(JSON.stringify(this.data))
        lastState.action = action
        lastState.undoStack = []
        this.undoStack.push(lastState)
        if (this.undoStack.length > 15) {
            this.undoStack.shift()
        }
        console.log('Undo State Set!')
    },
    loadData: function() {
        let data = localStorage.getItem('data')
        let undoStack = localStorage.getItem('undo')

        if (data) {
            this.data = JSON.parse(data)
            if(undoStack) {
                this.undoStack = JSON.parse(undoStack)
            }
            return true
        } else {
            return false
        }
    },
    saveData: function() {
        localStorage.setItem('data', JSON.stringify(this.data))
        localStorage.setItem('undo', JSON.stringify(this.undoStack))

        console.log('Saved!')
        this.checkUndo()
    },
    clearData: function() {
        if (confirm("WARNING! You are about to delete all your local data!")) {
            localStorage.clear()
            location.reload()
        }
    },
    copyData: function($btn) {
        let json = 'let events = ' + JSON.stringify(this.data, null, 2);
        navigator.clipboard.writeText(json).then(() => {
            $btn.textContent = "Copied!";
            setTimeout(() => { $btn.textContent = "Copy Data"; }, 1200);
        })
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
        this.elements.$stats = document.getElementById('stats__panel')

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
        this.elements.$intel = document.getElementById('stat__intel')

        this.changeStat('warriors', 0, true)
        this.changeStat('loyalty', 0, true)
        this.changeStat('order', 0, true)
        this.changeStat('reverence', 0, true)
        this.changeStat('salvage', 0, true)
        this.changeStat('wealth', 0, true)
        this.changeStat('intel', 0, true)
    },
    setDefaultStats: function () {
        this.changeStat('warriors', game.initialStats.warriors)
        this.changeStat('loyalty', game.initialStats.loyalty)
        this.changeStat('order', game.initialStats.order)
        this.changeStat('reverence', game.initialStats.reverence)

        this.changeStat('salvage', game.initialStats.salvage)
        this.changeStat('wealth', game.initialStats.wealth)
        this.changeStat('intel', game.initialStats.intel)
    },
    initAudio: function () {
        this.sfx.flip = document.getElementById('audio_flip')
        this.sfx.place = document.getElementById('audio_place')
        this.sfx.deal0 = document.getElementById('audio_deal_0')
        this.sfx.deal1 = document.getElementById('audio_deal_1')
        this.sfx.deal2 = document.getElementById('audio_deal_2')
    },
    initEvents: function() {
        let i = 0
        for (e of EVENTS) {
            e.id = i
            i++

            if (e.scheduled) {
                game.data.cards.scheduled.push(e.id)
            } else if (e.locked) {
                game.data.cards.locked.push(e.id)
            } else {
                game.data.cards.unlocked.push(e.id)
            }
        }
    },
    initIntel: function() {
        let i = 0
        for (e of INTEL) {
            e.id = i
            i++
        }
    },
    initProjects: function() {
        let i = 0
        for (e of PROJECTS) {
            e.id = i
            i++
        }
    },
    initQuests: function() {
        let i = 0
        for (e of QUESTS) {
            e.id = i
            i++
            if (this.data.quests.includes(e.id)) {
                e.status = 'complete'
            }
        }
    },
    init: function() {
        this.elements.$gate = document.getElementById('gate')
        this.elements.$rest = document.getElementById('rest')

        this.elements.$settingsTab = document.getElementById('menu__settings')
        this.elements.$settingsBtn = document.getElementById('toggle__settings')
        this.elements.$questsTab = document.getElementById('menu__quests')
        this.elements.$questsBtn = document.getElementById('toggle__quests')
        this.elements.$projectsTab = document.getElementById('menu__projects')
        this.elements.$projectsBtn = document.getElementById('toggle__projects')
        this.elements.$alliesTab = document.getElementById('menu__allies')
        this.elements.$alliesBtn = document.getElementById('toggle__allies')

        this.elements.$projects = document.getElementById('projects')
        this.elements.$allies = document.getElementById('allies')

        this.elements.$questList = document.getElementById('quest__list')
        this.elements.$questDetails = document.getElementById('quest__details')
        this.elements.$questList.addEventListener('click', (e) => {
            if (e.target.classList.contains('quest__item')) {
                this.selectQuest(e.target.dataset.id)
            }
        }) 

        this.elements.$undo = document.getElementById('undo')

        this.elements.$declaration = document.getElementById('declaration')
        this.elements.$declaration.addEventListener('animationend', (e) => {
            if (e.target.classList.contains('declaration__outer')) {
                e.target.remove()
            }
        })

        
        if (this.loadData()) {
            this.initProjects()
            this.initIntel()
            this.initQuests()

            this.initStats()
            this.initCountdown()

            if (this.data.newProjects.length > 0 ) {
                this.alert('projects')
            }

            setTimeout(()=>{
                if (game.data.cards.inPlay.length > 0) {
                    for(let i = 0; i < game.data.cards.inPlay.length; i++) {
                        let card = game.data.cards.inPlay[i]
                        let $card = makeCard(EVENTS[card], i)
                        this.elements.$panel.appendChild($card)
                        this.checkCards()
                    }
                }
            }, 3000)
        } else {
            this.initProjects()
            this.initIntel()
            this.initQuests()

            this.initStats()
            this.setDefaultStats()
            this.initCountdown()
            this.initEvents()
        }

        if (this.data.quests == undefined) {
            this.data.quests = []
        }
        
        this.checkUndo()
    }
}

game.init()