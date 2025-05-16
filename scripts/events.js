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
                    m: -1,
                    l: 2,
                    s: 0,
                    r: -5,
                    other: ""
                },
                {
                    name: 'Fail',
                    m: -5,
                    l: 0,
                    s: 0,
                    r: 0,
                    other: "Zorn dies"
                }
                ]
            },
            {
                title: "Do this other thing",
                outcomes: [
                    {
                        name: 'Effect',
                        m: 0,
                        l: 0,
                        s: 0,
                        r: 5,
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
                    m: 0,
                    l: 0,
                    s: 0,
                    r: 0,
                    other: "—"
                },
                {
                    name: 'Fail',
                    m: 0,
                    l: 0,
                    s: -5,
                    r: 0,
                    other: "Gate is lost"
                }
                ]
            },
            {
                title: "Destroy it",
                outcomes: [
                    {
                        name: 'Effect',
                        m: 0,
                        l: 0,
                        s: 0,
                        r: 0,
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
                    m: 0,
                    l: 0,
                    s: 0,
                    r: 0,
                    other: "Lower prices"
                },
                {
                    name: 'Fail',
                    m: 0,
                    l: 0,
                    s: 0,
                    r: 0,
                    other: ""
                }
                ]
            },
            {
                title: "Use legal force",
                outcomes: [
                    {
                        name: 'Effect',
                        m: 0,
                        l: -1,
                        s: -1,
                        r: 0,
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
                    m: 0,
                    l: 0,
                    s: 0,
                    r: 0,
                    other: ""
                },
                {
                    name: 'Fail',
                    m: 0,
                    l: -3,
                    s: -3,
                    r: 0,
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
                        m: -2,
                        l: 0,
                        s: 0,
                        r: 0,
                        other: ""
                    },
                    {
                        name: 'Fail',
                        m: -5,
                        l: -1,
                        s: -3,
                        r: 0,
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