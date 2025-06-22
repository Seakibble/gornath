let EVENTS = [
    {
        "title": "The Galdarians Arrive",
        "type": "galdarians",
        "rarity": "special",
        "scheduled": "26",
        "priority": "standard",
        "locked": false,
        "text": "Erlag's people have arrived.",
        "options": [
            {
                "title": "Send them home",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 1,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Get Gornath to accept them",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": -1,
                        "order": -1,
                        "reverence": -1,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "Erlag's people stay",
                        "unlocks": "19"
                    },
                    {
                        "name": "Fail",
                        "warriors": 0,
                        "loyalty": -2,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 0
    },
    {
        "title": "Gate Malfunction",
        "type": "dilemma",
        "rarity": "common",
        "scheduled": "",
        "priority": "standard",
        "locked": false,
        "text": "The gate his going critical! We need to stop it before it punches a hole in the fabric of reality.",
        "options": [
            {
                "title": "Try and fix it",
                "test": "DC 20 Arcana",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "—",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": -5,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "Gate is lost",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Destroy it",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "Gate is lost",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 1
    },
    {
        "title": "Quivicar Merchandise",
        "type": "opportunity",
        "rarity": "common",
        "scheduled": "",
        "priority": "standard",
        "locked": false,
        "text": "The mangy merchant is doing a flash sale.",
        "options": [
            {
                "title": "Buy salvage",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 2,
                        "wealth": -2,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 4,
                        "wealth": -4,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Sell salvage",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": -2,
                        "wealth": 2,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": -4,
                        "wealth": 4,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Haggle",
                "test": "DC 22 Persuasion",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 2,
                        "wealth": -1,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 4,
                        "wealth": -3,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": -1,
                        "wealth": 2,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": -3,
                        "wealth": 4,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": -1,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 2
    },
    {
        "title": "Logus Attacks",
        "type": "fight",
        "rarity": "common",
        "scheduled": "",
        "priority": "standard",
        "locked": true,
        "text": "Logus as appeared suddenly and is attacking the town!",
        "options": [
            {
                "title": "Fight him off!",
                "test": "Combat",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": 0,
                        "loyalty": -3,
                        "order": -3,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Send in the Warriors",
                "test": "DC 20 Military",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": -2,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": -5,
                        "loyalty": -1,
                        "order": -3,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 3
    },
    {
        "title": "Unworthy to Stay",
        "type": "unworthy",
        "rarity": "special",
        "scheduled": "27",
        "priority": "standard",
        "locked": false,
        "text": "We promised Unworthy that we'd get him Bokaz' sanction to conduct Adherent research within the City of Gornath. But the Chief seems unwilling to let him stay.",
        "options": [
            {
                "title": "Let Bokaz condemn Unworthy",
                "outcomes": [
                    {
                        "name": "Effect",
                        "warriors": 0,
                        "loyalty": 2,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Try to convince Bokaz",
                "test": "Social Encounter",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": -1,
                        "order": 0,
                        "reverence": -5,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "Unworthy Stays",
                        "unlocks": "26"
                    },
                    {
                        "name": "Fail",
                        "warriors": 0,
                        "loyalty": -1,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": 0,
                        "loyalty": -5,
                        "order": 0,
                        "reverence": -5,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "Unworthy Stays",
                        "unlocks": "26"
                    }
                ]
            }
        ],
        "id": 4
    },
    {
        "title": "Returning Emigrants",
        "type": "opportunity",
        "rarity": "common",
        "scheduled": "",
        "priority": "standard",
        "locked": false,
        "text": "In the years following the fall of the Demon Kings, many people have come and gone from Gornath. News has spread of how Gornath is in danger, and a number of former warriors have returned to join us in the coming battle.",
        "options": [
            {
                "title": "Accept them with open arms",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 2,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "They must swear fealty to Bokaz ",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 2,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 5
    },
    {
        "title": "Taxation",
        "type": "dilemma",
        "rarity": "common",
        "scheduled": "",
        "priority": "standard",
        "locked": false,
        "text": "It is time for the seasonal taxes to be levied.",
        "options": [
            {
                "title": "Demand the usual rate",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": -1,
                        "order": -1,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 3,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Demand more than usual",
                "test": "DC 20 Stability",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": -1,
                        "order": -1,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 5,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": 0,
                        "loyalty": -2,
                        "order": -2,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 5,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Waive the taxes!",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 2,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Overhaul the tax code",
                "test": "DC 20 History + DC 20 Investigation + DC 20 Stability",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": 2,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 6,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": 0,
                        "loyalty": -2,
                        "order": -2,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 2,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 6
    },
    {
        "title": "Skittering in the Night",
        "type": "fight",
        "rarity": "rare",
        "scheduled": "",
        "priority": "standard",
        "locked": false,
        "text": "There are reports of strange activity in the lower level. People are disappearing. It all seems uncomfortably familiar after what happened with the adherents a few weeks ago. We need to look into this.",
        "options": [
            {
                "title": "We don't have time for this",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "It probably doesn't matter...",
                        "unlocks": "25"
                    }
                ]
            },
            {
                "title": "Investigate it personally",
                "test": "Encounter",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": 1,
                        "order": -1,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": -4,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Send in the warriors",
                "test": "DC 20 Warriors",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": -2,
                        "loyalty": 0,
                        "order": -1,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": -4,
                        "loyalty": 0,
                        "order": -4,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 7
    },
    {
        "title": "To Delve Greedily...",
        "type": "opportunity",
        "rarity": "common",
        "scheduled": "",
        "priority": "standard",
        "locked": false,
        "text": "The dwarven archaeologist wants to mount a proper, extensive expedition to Vir-kegeth, following your rather brilliant venture. He's proposing a number of warriors are spared so he can investigate safely.",
        "options": [
            {
                "title": "Send some warriors",
                "outcomes": [
                    {
                        "name": "A couple",
                        "warriors": -1,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "A handful",
                        "warriors": -3,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "A dozen",
                        "warriors": -5,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "This is a waste of valuable boots",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 8
    },
    {
        "title": "Glory to the Gods!",
        "type": "opportunity",
        "rarity": "common",
        "scheduled": "",
        "priority": "standard",
        "locked": false,
        "text": "A few of our priests are urging Bokaz to declare a festival in honour of the Kavak gods that have guided our way for three centuries. It could be expensive, but perhaps it might yield beneficial results.",
        "options": [
            {
                "title": "Spare no expense",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 1,
                        "order": 0,
                        "reverence": 3,
                        "salvage": 0,
                        "wealth": -4,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Throw a small party",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 2,
                        "salvage": 0,
                        "wealth": -2,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "It's not a priority",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 9
    },
    {
        "title": "In Cleovaross' Name",
        "type": "dilemma",
        "rarity": "common",
        "scheduled": "",
        "priority": "standard",
        "locked": false,
        "text": "Abeni and her followers are requesting that a temple be built in honour of Cleovaross, the Winter Goddess.",
        "options": [
            {
                "title": "Request granted",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": -3,
                        "salvage": 0,
                        "wealth": -2,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Fine, but you pay for it",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": -3,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Absolutely not!",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 1,
                        "order": -3,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 10
    },
    {
        "title": "The Summoning",
        "type": "fight",
        "rarity": "common",
        "scheduled": "",
        "priority": "standard",
        "locked": false,
        "text": "Reports are coming in of a commotion in the upper levels. Screams and acts of violence have been heard. We need to sort this out immediately.",
        "options": [
            {
                "title": "Investigate it personally",
                "test": "Encounter",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": 1,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": -3,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Have the warriors deal with it",
                "test": "DC 16 Warriors",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": -1,
                        "loyalty": 0,
                        "order": -1,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": -3,
                        "loyalty": 0,
                        "order": -3,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 11
    },
    {
        "title": "Sweet Dreams",
        "type": "logus",
        "rarity": "special",
        "scheduled": "",
        "priority": "standard",
        "locked": false,
        "text": "[Redacted]",
        "options": [
            {
                "title": "???",
                "test": "DC 20 Insight",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "???",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "???",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 12
    },
    {
        "title": "Magimecha Attack",
        "type": "crisis",
        "rarity": "common",
        "scheduled": "",
        "priority": "standard",
        "locked": false,
        "text": "Wild magimecha are assaulting the entrance to the city! ",
        "options": [
            {
                "title": "Defend!",
                "test": "DC 15 Military",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 3,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": -2,
                        "loyalty": 0,
                        "order": -2,
                        "reverence": 0,
                        "salvage": 1,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 13
    },
    {
        "title": "Earthquake!",
        "type": "crisis",
        "rarity": "uncommon",
        "scheduled": "",
        "priority": "standard",
        "locked": false,
        "text": "A violent tremor shook the mountain today, causing a substantial amount of damage, most notably, the collapse of one of the bridges on the upper levels. A few people are dead, and many are wounded.",
        "options": [
            {
                "title": "Establish a Triage Centre",
                "test": "DC 20 Medicine",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": -3,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": -7,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Recruit Volunteers to Help",
                "test": "DC 15 Stability",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": -4,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": -7,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 14
    },
    {
        "title": "Caught Red Handed",
        "type": "dilemma",
        "rarity": "common",
        "scheduled": "",
        "priority": "standard",
        "locked": false,
        "text": "A thief has been found stealing food and weapons from the warriors' barracks. In her interrogation, she claimed that she wanted to help the town. But it's quite likely she was just an opportunist.",
        "options": [
            {
                "title": "Execute her",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 1,
                        "order": -1,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Conscript her",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 1,
                        "loyalty": 0,
                        "order": -1,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Make her fear the gods",
                "test": "DC 16 Religion",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 1,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": -1,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 15
    },
    {
        "title": "Arakos Coffee Deficit",
        "type": "dilemma",
        "rarity": "common",
        "scheduled": "",
        "priority": "standard",
        "locked": false,
        "text": "Our coffee reserves have dried up! We need to do something about this or our society may fall apart before Logus even sets foot in Gornath!",
        "options": [
            {
                "title": "That's an overreaction, surely",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": "17"
                    }
                ]
            },
            {
                "title": "No it isn't! Import more!",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": -3,
                        "intel": 0,
                        "other": "Coffee will be acquired",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Quivicar must have a stash!",
                "test": "DC 20 Insight",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": -1,
                        "intel": 0,
                        "other": "Coffee will be acquired",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": "17"
                    }
                ]
            }
        ],
        "id": 16
    },
    {
        "title": "Caffine Crisis!",
        "type": "crisis",
        "rarity": "special",
        "scheduled": "",
        "priority": "high",
        "locked": true,
        "text": "Disaster strikes! What fools we were!",
        "options": [
            {
                "title": "Option",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": -2,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 17
    },
    {
        "title": "Visions of the Witch",
        "type": "opportunity",
        "rarity": "common",
        "scheduled": "",
        "priority": "standard",
        "locked": false,
        "text": "Magra has caught glimpses of the future! Perhaps we can learn something about what he is going to bring to bear against us! But such visions are dangerous and who knows what the price may be...",
        "options": [
            {
                "title": "Do not look",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Gaze deeply",
                "test": "Magra may die",
                "outcomes": [
                    {
                        "name": "15% chance",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 1,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "30% chance",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 2,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "45% chance",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 3,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "60% chance",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 4,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 18
    },
    {
        "title": "Cultural Troubles",
        "type": "galdarians",
        "rarity": "common",
        "scheduled": "",
        "priority": "high",
        "locked": true,
        "text": "Seems the Galdarians are having trouble fitting in her in Gornath. They're being loud, interfering with the goings on of the locals. Some are saying we made a mistake in letting them live here.",
        "options": [
            {
                "title": "Make them see reason",
                "test": "DC 20 Persuasion (Intelligence)",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": -1,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": 0,
                        "loyalty": -1,
                        "order": -2,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Get them to back down",
                "test": "DC 20 Intimidation (Strength)",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": 0,
                        "loyalty": -1,
                        "order": -2,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Drive them out!",
                "test": "DC 15 Military",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "Erlag's People will leave",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": -3,
                        "loyalty": -1,
                        "order": -1,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 19
    },
    {
        "title": "The Copycat",
        "type": "chaos",
        "rarity": "common",
        "scheduled": "",
        "priority": "standard",
        "locked": false,
        "text": "There are reports of someone practising blood magic in the city. On investigation, it appears someone is imitating Atanasya. And poorly at that. We can't have this.",
        "options": [
            {
                "title": "Arrest them",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": -1,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Teach them REAL blood magic",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": -1,
                        "reverence": -4,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "Atanasya gains an apprentice",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 20
    },
    {
        "title": "Last Rites",
        "type": "zen",
        "rarity": "common",
        "scheduled": "27",
        "priority": "standard",
        "locked": false,
        "text": "Our friend has fallen. We need to honour him. What can we say about him?",
        "options": [
            {
                "title": "He carried the blade well",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 1,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "He served Astaris to the end",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 1,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "He put his duty before all else",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 1,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "He was a friend to Gornath",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 1,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 21
    },
    {
        "title": "Trouble Below",
        "type": "magnus",
        "rarity": "common",
        "scheduled": "",
        "priority": "standard",
        "locked": false,
        "text": "We've received word from Magnus. He needs supplies sent down to the Aperture to help look after the refugees there. ",
        "options": [
            {
                "title": "We can spare nothing",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Put together what we can",
                "outcomes": [
                    {
                        "name": "A little",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": -2,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "A lot",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": -5,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 22
    },
    {
        "title": "Sharpening the Blade",
        "type": "corpus",
        "rarity": "special",
        "scheduled": "25",
        "priority": "standard",
        "locked": false,
        "text": "No one in Gornath knows as much about fighting demons as Corpus Bonebrooke. Our warriors could learn a lot from his experience. What should their priority be?",
        "options": [
            {
                "title": "They must kill demons",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": 4,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": 2,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ],
                "test": "DC 18 Attack"
            },
            {
                "title": "The must revere the Watchers",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 4,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 2,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ],
                "test": "DC 18 Religion"
            },
            {
                "title": "A balance must be struck",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 2,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 2,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 23
    },
    {
        "title": "The Stars Guide Us",
        "type": "eideron",
        "rarity": "special",
        "scheduled": "",
        "priority": "standard",
        "locked": false,
        "text": "Xaltor has reported an increased interest in the worship of Astaris. But what should they pray for?",
        "options": [
            {
                "title": "Protection and Valour",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 2,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 1,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Wisdom and Knowledge",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 3,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Peace and Order",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 2,
                        "reverence": 1,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Visions and Prophecy",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 1,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 2,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 24
    },
    {
        "title": "Chysalid Infestation!",
        "type": "crisis",
        "rarity": "common",
        "scheduled": "",
        "priority": "standard",
        "locked": true,
        "text": "We made a big mistake! The goings on down below were the workings of demons! Now there's an infestation of Chrysilid demons in the lower levels!",
        "options": [
            {
                "title": "Lock the section down!",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": -1,
                        "order": -4,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            },
            {
                "title": "Purge the demons",
                "test": "DC 20 Military",
                "outcomes": [
                    {
                        "name": "Pass",
                        "warriors": -1,
                        "loyalty": 0,
                        "order": -2,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    },
                    {
                        "name": "Fail",
                        "warriors": -4,
                        "loyalty": -2,
                        "order": -4,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": ""
                    }
                ]
            }
        ],
        "id": 25
    },
    {
        "title": "Unworthy Remains",
        "type": "unworthy",
        "rarity": "special",
        "priority": "immediate",
        "locked": true,
        "scheduled": "",
        "text": "We've set Unworthy up in the old adherent lab. <br><br><b>New options are available in the projects menu!</b>",
        "options": [
            {
                "title": "Hopefully we don't regret this...",
                "outcomes": [
                    {
                        "name": "",
                        "warriors": 0,
                        "loyalty": 0,
                        "order": 0,
                        "reverence": 0,
                        "salvage": 0,
                        "wealth": 0,
                        "intel": 0,
                        "other": "",
                        "unlocks": "",
                        "flags": "unworthy"
                    }
                ]
            }
        ],
        "id": 26
    }
]