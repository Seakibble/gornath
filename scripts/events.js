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
                    warriors: -1,  loyalty: 2,  order: 0,  reverence: -5,  salvage: 0,  wealth: 0,
                    other: ""
                },
                {
                    name: 'Fail',
                    warriors: -5,  loyalty: 0,  order: 0,  reverence: 0,  salvage: 0,  wealth: 0,
                    other: "Zorn dies"
                }
                ]
            },
            {
                title: "Do this other thing",
                outcomes: [
                    {
                        name: 'Effect',
                        warriors: 0,  loyalty: 0,  order: 0,  reverence: 5,  salvage: 0,  wealth: 0,
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
                    warriors: 0,  loyalty: 0,  order: 0,  reverence: 0,  salvage: 0,  wealth: 0,
                    other: "—"
                },
                {
                    name: 'Fail',
                    warriors: 0,  loyalty: 0,  order: -5,  reverence: 0,  salvage: 0,  wealth: 0,
                    other: "Gate is lost"
                }
                ]
            },
            {
                title: "Destroy it",
                outcomes: [
                    {
                        name: 'Effect',
                        warriors: 0,  loyalty: 0,  order: 0,  reverence: 0,  salvage: 0,  wealth: 0,
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
                    warriors: 0,  loyalty: 0,  order: 0,  reverence: 0,  salvage: 5,  wealth: 5,
                    other: "Lower prices"
                },
                {
                    name: 'Fail',
                    warriors: 0,  loyalty: 0,  order: 0,  reverence: 0,  salvage: 0,  wealth: 0,
                    other: ""
                }
                ]
            },
            {
                title: "Use legal force",
                outcomes: [
                    {
                        name: 'Effect',
                        warriors: 0,  loyalty: -1,  order: -1,  reverence: 0,  salvage: 5,  wealth: 5,
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
                    warriors: 0,  loyalty: 0,  order: 0,  reverence: 0,  salvage: 0,  wealth: 0,
                    other: ""
                },
                {
                    name: 'Fail',
                    warriors: 0,  loyalty: -3,  order: -3,  reverence: 0,  salvage: 0,  wealth: 0,
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
                        warriors: -2,  loyalty: 0,  order: 0,  reverence: 0,  salvage: 0,  wealth: 0,
                        other: ""
                    },
                    {
                        name: 'Fail',
                        warriors: -5,  loyalty: -1,  order: -3,  reverence: 0,  salvage: 0,  wealth: 0,
                        other: ""
                    }
                ]
            },
        ]
    },
    {
        title: "Unworthy to Stay",
        type: "unworthy",
        text: "We promised Unworthy that we'd get him Bokaz' sanction to conduct Adherent research within the City of Gornath. But the Chief seems unwilling to let him stay.",
        options: [
            {
                title: "Let Bokaz condemn Unworthy",
                outcomes: [
                    {
                        name: 'Effect',
                        warriors: 0, loyalty: 2, order: 0, reverence: 0, salvage: 0, wealth: 0,
                        other: "Lose Unworthy"
                    }
                ]
            },
            {
                title: "Try to convince Bokaz",
                test: "DC 25 Persuasion",
                outcomes: [{
                    name: 'Pass',
                    warriors: 0, loyalty: -1, order: 0, reverence: -5, salvage: 0, wealth: 0,
                    other: "Gain Unworthy"
                },
                {
                    name: 'Fail',
                    warriors: 0, loyalty: -1, order: 0, reverence: 0, salvage: 0, wealth: 0,
                    other: "Lose Unworthy"
                },
                {
                    name: 'Fail',
                    warriors: 0, loyalty: -5, order: 0, reverence: -5, salvage: 0, wealth: 0,
                    other: "Gain Unworthy"
                },
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