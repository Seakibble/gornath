let events = [
    {
        title: "Demonic Strike",
        type: "dilemma",
        text: "A gang of demons are attacking Gornath from the lower levels. We need someone to look into this matter before it becomes a problem.",
        options: [
            {
                title: "Do this thing",
                test: "DC 20 Military",
                outcomes: [{
                    name: 'Pass',
                    readiness: -1,  loyalty: 2,  stability: 0,  reverence: -5,  salvage: 0,  wealth: 0,
                    other: ""
                },
                {
                    name: 'Fail',
                    readiness: -5,  loyalty: 0,  stability: 0,  reverence: 0,  salvage: 0,  wealth: 0,
                    other: "Zorn dies"
                }
                ]
            },
            {
                title: "Do this other thing",
                outcomes: [
                    {
                        name: 'Effect',
                        readiness: 0,  loyalty: 0,  stability: 0,  reverence: 5,  salvage: 0,  wealth: 0,
                        other: ""
                    }
                ]
            },
        ]
    },
    {
        title: "Gate Malfunction",
        type: "crisis",
        text: "The gate his going critical! We need to stop it before it punches a hole in the fabric of reality.",
        options: [
            {
                title: "Try and fix it",
                test: "DC 20 Arcana",
                outcomes: [{
                    name: 'Pass',
                    readiness: 0,  loyalty: 0,  stability: 0,  reverence: 0,  salvage: 0,  wealth: 0,
                    other: "—"
                },
                {
                    name: 'Fail',
                    readiness: 0,  loyalty: 0,  stability: -5,  reverence: 0,  salvage: 0,  wealth: 0,
                    other: "Gate is lost"
                }
                ]
            },
            {
                title: "Destroy it",
                outcomes: [
                    {
                        name: 'Effect',
                        readiness: 0,  loyalty: 0,  stability: 0,  reverence: 0,  salvage: 0,  wealth: 0,
                        other: "Gate is lost"
                    }
                ]
            },
        ]
    },
    {
        title: "Quivicar Merchandise",
        type: "opportunity",
        text: "The mangy merchant is doing a flash sale. Perhaps we can get him to drop his prices a little?",
        options: [
            {
                title: "Talk him around",
                test: "DC 25 Persuasion",
                outcomes: [{
                    name: 'Pass',
                    readiness: 0,  loyalty: 0,  stability: 0,  reverence: 0,  salvage: 5,  wealth: 5,
                    other: "Lower prices"
                },
                {
                    name: 'Fail',
                    readiness: 0,  loyalty: 0,  stability: 0,  reverence: 0,  salvage: 0,  wealth: 0,
                    other: ""
                }
                ]
            },
            {
                title: "Use legal force",
                outcomes: [
                    {
                        name: 'Effect',
                        readiness: 0,  loyalty: -1,  stability: -1,  reverence: 0,  salvage: 5,  wealth: 5,
                        other: "Lower prices"
                    }
                ]
            },
        ]
    },
    {
        title: "Logus Attacks",
        type: "fight",
        text: "Logus as appeared suddenly and is attacking the town!.",
        options: [
            {
                title: "Fight him off!",
                test: "Combat",
                outcomes: [{
                    name: 'Pass',
                    readiness: 0,  loyalty: 0,  stability: 0,  reverence: 0,  salvage: 0,  wealth: 0,
                    other: ""
                },
                {
                    name: 'Fail',
                    readiness: 0,  loyalty: -3,  stability: -3,  reverence: 0,  salvage: 0,  wealth: 0,
                    other: ""
                }
                ]
            },
            {
                title: "Send in the Warriors",
                test: "DC 20 Military",
                outcomes: [
                    {
                        name: 'Pass',
                        readiness: -2,  loyalty: 0,  stability: 0,  reverence: 0,  salvage: 0,  wealth: 0,
                        other: ""
                    },
                    {
                        name: 'Fail',
                        readiness: -5,  loyalty: -1,  stability: -3,  reverence: 0,  salvage: 0,  wealth: 0,
                        other: ""
                    }
                ]
            },
        ]
    },
]

let i = 0
for (e of events) {
    e.id = i
    i++
}