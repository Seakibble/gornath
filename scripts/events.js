let events = [
    {
        title: "DEMONIC STRIKE",
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
                    other: "Zorn will die"
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
        title: "GATE MALFUNCTION",
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
                    other: "We keep the gate"
                },
                {
                    name: 'Fail',
                    m: 0,
                    l: 0,
                    s: -5,
                    r: 0,
                    other: "We lose the gate"
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
                        other: "We lose the gate"
                    }
                ]
            },
        ]
    },
    {
        title: "QUIVICAR MERCH",
        type: "opportunity",
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
                    other: "We keep the gate"
                },
                {
                    name: 'Fail',
                    m: 0,
                    l: 0,
                    s: -5,
                    r: 0,
                    other: "We lose the gate"
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
                        other: "We lose the gate"
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