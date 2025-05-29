let QUESTS = [
    {
        "name": "A Blind Old Man",
        "type": "main",
        "text": "Logus has been consumed by anger, and will attack Gornath soon in his vendetta against Bokaz. You must ensure Gornath is well defended before he makes his move.",
        "outcomes": [
            "Gornath falls to the demons",
            "Bokaz is killed",
            "Logus is defeated, sending the demons in this realm into disarray",
            "Logus is killed",
            "Logus joins the party as an ally against the demons and the grey ones",
        ],
        "status": "open"
    },
    {
        "name": "From The Depths of Hell...",
        "type": "main",
        "text": "The demons stem from Hell, where an ancient curse created by the Zakkori continues to fester. While this curse exists, Gornath - and Kavakos in general - will be in grave danger...",
        "outcomes": [
            "The curse is broken, and the demons are permanently expunged from Kavakos",
            "???",
        ],
        "status": "open"
    },
    {
        "name": "Heresey and Iron",
        "type": "main",
        "text": "Apostate, the exiled adherent leader of The Heretics has made her base within the very source of demonkind - Hell. Until she is killed, no doubt her Iron Sorcery will be put to work to make the demons even more dangerous.",
        "outcomes": [
            "The demons grow more powerful over time",
            "Whatever Apostate is planning may come to pass...",
        ],
        "status": "open"
    },
    {
        "name": "What Lurks Below",
        "type": "main",
        "text": "It lies in the darkness of the deepest depths of the mountain, patiently waiting to consume all. It is beyond your ability to deal with. Its thralls are nigh invincible. None have overcome them. It will devour this world.",
        "outcomes": [
            "There is no hope. Give up and accept your fate.",
        ],
        "status": "open"
    },



    {
        "name": "The Dust Lord",
        "type": "necropolis",
        "text": "On a previous delve, you encountered a violent dust storm inhabited by wraiths. A tribe of kobolds spoke of ‘the Dust Lord,’ an entity around which the storm is centered. You don’t know much about it, but now that you’re more experienced, you might be able to do something about it.",
        "outcomes": [
            "???",
        ],
        "status": "open"
    },
    {
        "name": "The Serpentine Goddess",
        "type": "necropolis",
        "text": "The guardian dragon of The Black Jungle, Rathkalagrion, has quested you with destroying Orizilexia, the serpentine goddess of the lizardlings that dwell in that region. However, the dragon’s capacity to help you may be limited. Gaining the favour of the lizardlings, whilst definitely risky, could be very beneficial…",
        "outcomes": [
            "Orizilexia is vanquished",
            "Alliance with Orizilexia joins Gornath",
        ],
        "status": "open"
    },
    {
        "name": "The Haunting of the Black Jungle",
        "type": "necropolis",
        "text": "For who knows how many ages, ghostly Vir-kegethen warriors have periodically attacked the Heart of the Black Jungle. If you can do something to end this conflict and put these spirits to rest, the Black Jungle may finally start to heal.",
        "outcomes": [
            "The Vir-kegethen ghosts are put to rest",
            "The Black Jungle becomes better regulated against both demons and magimecha",
        ],
        "status": "open"
    },
    {
        "name": "The Master of Vir-kegeth",
        "type": "necropolis",
        "text": "Skarikh, the enigmatic entity that controls the construct defenses of Vir-kegeth wants the Lichbane Corps to leave. In exchange, he has expressed willingness to provide safe passage through his territory, and possible access to the Vault.",
        "outcomes": [
            "Access to the Vault",
            "Alliance with Skarikh",
        ],
        "status": "open"
    },
    {
        "name": "The Lichbane Corps",
        "type": "necropolis",
        "text": "The extradimensional necromancer-hunting soldiers want to get back to their realm. Now that they’ve terminated their association with Logus, they have no stake in what’s going on in the Necropolis. As much as their principles would drive them towards fighting the undead in the mountain, they’ve been pushed to their limit. ",
        "outcomes": [
            "The Lichbane leave Kavakos (possibly with the Vulture’s assistance)",
            "Alliance with the Lichbane",
        ],
        "status": "open"
    },
    {
        "name": "The Severed Finger",
        "type": "necropolis",
        "text": "One of the leaders of the Severed Hand, Master Sidrion has taken the majority of their members and fled the Aperture, via Vir-kegeth. His intentions are unknown, but he clearly considers Master Kerriok and Enkitum his enemies. Whatever his notion of The Balance is, he will likely oppose the party’s actions. ",
        "outcomes": [
            "???",
        ],
        "status": "open"
    },
    {
        "name": "The Soulthief",
        "type": "necropolis",
        "text": "Little is known about this entity, save that its name is - or was - Cairn Sangaris, and it was once the brother of the ancient sorcerer Vith Sangaris. It seems connected to the undead wretches in the catacombs of the Necropolis. Its stance regarding the Demons and the Mindspider is unknown.",
        "outcomes": [
            "Alliance with the Soulthief?",
        ],
        "status": "open"
    },
    {
        "name": "The Winter Goddess",
        "type": "necropolis",
        "text": "Abeni has spread the faith of this mysterious goddess ‘Cleovaross’ throughout the Necropolis, reaching people within the Refuge, Gornath, even the Lichbane Corps. All that is known of her intentions is that she seeks to exert some control over the Demons, potentially protecting Gornath. She may be able to help, but what does she ultimately want?",
        "outcomes": [
            "Cleovaross’s followers are driven out",
            "Cleovaross’s favour is gained",
            "???",
        ],
        "status": "open"
    },
    {
        "name": "The Demon Child",
        "type": "necropolis",
        "text": "The Veskerion has taken charge of a small half-demon half-magimechanoid child, a product of Malevolent’s experimentation. Understanding this child could grant some insight into what the adherents were working towards with their research, and maybe even uncover some weakness. You'll need to find the Veskerion first though.",
        "outcomes": [
            "The Veskerion fights for Gornath",
            "Insights into the adherent demon-magimechanoid hybrids",
        ],
        "status": "open"
    },



    {
        "name": "The Zabijak Technique",
        "type": "personal",
        "text": "In the Bonebrooke Chronicle, it is stated that the soldiers of the Aperture had a technique that could be used to banish demons. If Corpus could learn this technique, then a significant advantage against the demons could be gained.",
        "outcomes": [
            "Corpus learns how to banish demons",
        ],
        "status": "open"
    },
    {
        "name": "The Starlit Vault",
        "type": "personal",
        "text": "Both Atanasya and Eideron have an interest in finding the ancient vault of the Vir-kegethen hold. Rumours speak of long lost elven heirlooms from Atanasya’s people lie within, which could be of great value in the coming trials. And Visions bestowed upon the acolyte of Astaris compel him to seek out the Reliquary of Onivexon held there.",
        "outcomes": [
            "Atanasya acquires her ancestral heirlooms",
            "Eideron fulfills his holy quest",
            "The wealth of the vault is plundered…",
        ],
        "status": "open"
    },
    {
        "name": "The Ancestral Gravesite",
        "type": "personal",
        "text": "The spirit Azira spoke of a second gravesite guarded by a fellow spirit, located somewhere in the Depths - the region of the Necropolis occupied by the demons. Azira’s site was desecrated by demons, but it’s possible that this other site may be intact. If so, Erlag may be able to commune with the Zakkori spirits that are interred there. Who knows what information they may be able to provide if this is the case.",
        "outcomes": [
            "Zakkori cultural knowledge is gained",
            "Information on how the demon curse was created",
        ],
        "status": "open"
    },
    {
        "name": "The Vengeful Revenant",
        "type": "personal",
        "text": "Enkitum’s old travelling companion turned revenant, Phyrix is fixated on punishing the rogue, blaming him for his part in Logus’ betrayal of their old party. If differences can be put aside, he would make a formidable ally against Logus and the demons.",
        "outcomes": [
            "Phyrix fights with Gornath",
        ],
        "status": "open"
    },
]