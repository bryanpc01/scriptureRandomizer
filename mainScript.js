let Moses_bk    = "Pentateuch"
let History_bk  = "Historical Books"
let Poetry_bk   = "Poetry Books"
let Major_p_bk  = "Major Prophets"
let Minor_p_bk  = "Minor Prophets"
let Gospels_bk  = "The Gospels"
let Church_bk   = "History of the Church"
let Paul_bk     = "Pauline Epistles"
let Epstles_bk  = "General Epistles"
let End_bk      = "Apocalyptic Writings"

// Each reading is a curated passage with a specific chapter range and description.
// chapters = number of chapters in the range (used for Light/Medium/Heavy filtering).
let readings = [

  // ── Pentateuch ──────────────────────────────────────────────────────────────
  { passage: "Genesis 1–2",      title: "The Creation Account",             testament: "old", section: Moses_bk,   chapters: 2,
    description: "God speaks the world into existence in six days, culminating in the formation of humanity in His own image. The stage is set for the entire biblical story." },
  { passage: "Genesis 3",        title: "The Fall of Humanity",             testament: "old", section: Moses_bk,   chapters: 1,
    description: "The serpent's deception, the first sin, and its devastating consequences. God judges yet also promises a descendant who will one day crush the serpent's head." },
  { passage: "Genesis 6–9",      title: "Noah and the Flood",               testament: "old", section: Moses_bk,   chapters: 4,
    description: "God grieves the world's violence and calls one righteous man to build an ark. The flood comes, the earth is cleansed, and God establishes His first covenant with a rainbow as its sign." },
  { passage: "Genesis 12–15",    title: "God's Covenant with Abraham",      testament: "old", section: Moses_bk,   chapters: 4,
    description: "God calls Abram out of Ur and makes extraordinary promises — a land, a nation, and blessing for all peoples of the earth. God ratifies His covenant with Abram in a dramatic nighttime ceremony." },
  { passage: "Genesis 22",       title: "The Binding of Isaac",             testament: "old", section: Moses_bk,   chapters: 1,
    description: "God tests Abraham by asking him to sacrifice his only son. At the last moment God provides a ram, and Abraham receives the covenant promise renewed with an oath." },
  { passage: "Genesis 37–41",    title: "Joseph Sold and Rising",           testament: "old", section: Moses_bk,   chapters: 5,
    description: "Joseph is sold into slavery by his brothers, falsely accused, and imprisoned — yet God's hand is on him. His ability to interpret dreams eventually brings him before Pharaoh himself." },
  { passage: "Genesis 42–50",    title: "Joseph's Forgiveness and Reunion", testament: "old", section: Moses_bk,   chapters: 9,
    description: "Joseph reveals himself to his brothers in one of Scripture's most dramatic reunion scenes. What they meant for evil, God meant for good — Joseph forgives them and provides for his family." },
  { passage: "Exodus 1–5",       title: "Moses and the Burning Bush",       testament: "old", section: Moses_bk,   chapters: 5,
    description: "Israel suffers under a Pharaoh who enslaves them. God appears to Moses in a burning bush, reveals His name — I AM — and sends him back to Egypt with a mission: 'Let My people go.'" },
  { passage: "Exodus 7–12",      title: "The Ten Plagues and the Passover", testament: "old", section: Moses_bk,   chapters: 6,
    description: "Ten plagues fall on Egypt one by one as Pharaoh repeatedly hardens his heart. The final plague — death of the firstborn — is averted for Israel by the blood of the Passover lamb." },
  { passage: "Exodus 13–15",     title: "Crossing the Red Sea",             testament: "old", section: Moses_bk,   chapters: 3,
    description: "Israel escapes through the parted Red Sea as Pharaoh's army pursues them. When the waters close, Moses and Miriam lead the nation in a song of triumph — the first recorded worship song in the Bible." },
  { passage: "Exodus 19–20",     title: "The Ten Commandments",             testament: "old", section: Moses_bk,   chapters: 2,
    description: "Israel arrives at Sinai amid thunder, fire, and smoke. God speaks the Ten Commandments directly to the people — the moral foundation of the covenant relationship between God and His nation." },
  { passage: "Exodus 32–34",     title: "The Golden Calf and God's Mercy",  testament: "old", section: Moses_bk,   chapters: 3,
    description: "While Moses is on the mountain, Israel melts gold into a calf idol. Moses intercedes, God relents, and reveals His character: 'Compassionate, gracious, slow to anger, abounding in love.'" },
  { passage: "Leviticus 16",     title: "The Day of Atonement",             testament: "old", section: Moses_bk,   chapters: 1,
    description: "Israel's most solemn annual ritual — the high priest enters the Most Holy Place with blood for the people's sins, and a scapegoat carries those sins away into the wilderness." },
  { passage: "Numbers 11–14",    title: "Rebellion in the Wilderness",      testament: "old", section: Moses_bk,   chapters: 4,
    description: "Israel grumbles about food, and the twelve spies return from Canaan. Ten give a fearful report; the people rebel. God's judgment: this generation will wander forty years and never enter the Promised Land." },
  { passage: "Numbers 22–24",    title: "Balaam and His Donkey",            testament: "old", section: Moses_bk,   chapters: 3,
    description: "Balak, king of Moab, hires the prophet Balaam to curse Israel — but God turns every curse into a blessing. Even Balaam's donkey speaks, a strange window into God's sovereign protection." },
  { passage: "Deuteronomy 4–6",  title: "Love the LORD Your God",           testament: "old", section: Moses_bk,   chapters: 3,
    description: "Moses calls Israel to love God with all their heart, soul, and strength — the Shema, which Jesus will later call the greatest commandment. Don't forget; don't drift; teach these words to your children." },
  { passage: "Deuteronomy 28–30",title: "Choose Life",                      testament: "old", section: Moses_bk,   chapters: 3,
    description: "The blessings of obedience and the curses of rebellion laid out with brutal clarity. Moses ends with an urgent appeal: 'I set before you life and death — choose life, that you and your children may live.'" },
  { passage: "Deuteronomy 31–34",title: "Moses' Final Days",                testament: "old", section: Moses_bk,   chapters: 4,
    description: "Moses hands leadership to Joshua, sings a warning song over Israel, blesses each tribe, climbs Mount Nebo, sees the Promised Land from a distance, and dies. The end of an era." },

  // ── Historical Books ────────────────────────────────────────────────────────
  { passage: "Joshua 1–5",       title: "Crossing into the Promised Land",  testament: "old", section: History_bk, chapters: 5,
    description: "God commissions Joshua, Rahab hides the spies, and Israel crosses the Jordan on dry ground. A new generation enters what their parents were too afraid to claim." },
  { passage: "Joshua 6–7",       title: "Jericho Falls, Achan Sins",        testament: "old", section: History_bk, chapters: 2,
    description: "The walls of Jericho fall at a shout — but a hidden sin by one man named Achan brings defeat at Ai. Corporate obedience matters, and hidden compromise has public consequences." },
  { passage: "Joshua 23–24",     title: "Joshua's Farewell",                testament: "old", section: History_bk, chapters: 2,
    description: "Joshua reviews God's faithfulness and issues a final challenge: 'Choose for yourselves this day whom you will serve.' The people renew the covenant at Shechem." },
  { passage: "Judges 4–5",       title: "Deborah and Barak",                testament: "old", section: History_bk, chapters: 2,
    description: "Deborah, Israel's only female judge and prophet, leads the nation to victory alongside Barak. Chapter 5 records her victory song — one of the oldest pieces of Hebrew poetry in the Bible." },
  { passage: "Judges 6–8",       title: "Gideon the Reluctant Judge",       testament: "old", section: History_bk, chapters: 3,
    description: "Gideon is hiding in a winepress when the angel calls him 'mighty warrior.' He asks for signs, trims his army from 32,000 to 300, and defeats the Midianites with torches and trumpets." },
  { passage: "Judges 13–16",     title: "Samson's Strength and Fall",       testament: "old", section: History_bk, chapters: 4,
    description: "Samson has supernatural strength, reckless choices, and a fatal infatuation with Delilah. A cautionary tale about gifting without character — and a final act of desperate sacrifice." },
  { passage: "Ruth 1–4",         title: "Ruth and Boaz",                    testament: "old", section: History_bk, chapters: 4,
    description: "Ruth chooses to stay with her widowed mother-in-law Naomi and follow her to Bethlehem. Her loyalty leads to Boaz's fields and eventually to marriage — a beautiful picture of covenant love and redemption." },
  { passage: "1 Samuel 1–3",     title: "Hannah's Prayer and Samuel's Call",testament: "old", section: History_bk, chapters: 3,
    description: "Hannah pours out her grief to God and receives the son she prayed for. She dedicates young Samuel to the LORD, and as a boy he hears God's voice calling him in the night for the first time." },
  { passage: "1 Samuel 16–17",   title: "David Anointed and Goliath Defeated",testament:"old",section: History_bk, chapters: 2,
    description: "God sends Samuel to anoint a king — not the tallest or strongest of Jesse's sons, but the youngest shepherd, David. Then that same shepherd steps out to face the giant Goliath with a sling and a stone." },
  { passage: "1 Samuel 24–26",   title: "David Spares His Enemy",           testament: "old", section: History_bk, chapters: 3,
    description: "David has two opportunities to kill Saul, who is hunting him — and refuses both. 'I will not lift my hand against God's anointed.' Remarkable restraint from a man with every reason to take revenge." },
  { passage: "2 Samuel 5–7",     title: "David's Kingdom and the Covenant", testament: "old", section: History_bk, chapters: 3,
    description: "David is crowned over all Israel, captures Jerusalem, and brings the ark into the city with dancing. God then makes a stunning covenant with David: his throne will be established forever." },
  { passage: "2 Samuel 11–12",   title: "David and Bathsheba",              testament: "old", section: History_bk, chapters: 2,
    description: "David sees Bathsheba, takes her, and has her husband Uriah killed to cover it up. The prophet Nathan confronts him: 'You are the man.' David's broken confession and its lasting consequences." },
  { passage: "1 Kings 3–4",      title: "Solomon's Wisdom",                 testament: "old", section: History_bk, chapters: 2,
    description: "God appears to Solomon and offers him whatever he wants. He asks for wisdom to govern God's people — and God grants it, along with wealth and honor beyond what he asked." },
  { passage: "1 Kings 8",        title: "Dedication of the Temple",         testament: "old", section: History_bk, chapters: 1,
    description: "Solomon dedicates the Temple with a sweeping prayer acknowledging that no building can contain God — yet asking Him to hear every prayer made toward this place. The glory of the LORD fills the house." },
  { passage: "1 Kings 17–19",    title: "Elijah and the Prophets of Baal",  testament: "old", section: History_bk, chapters: 3,
    description: "Elijah challenges 450 prophets of Baal on Mount Carmel and calls down fire from heaven — then flees into the wilderness, exhausted and suicidal. God meets him not in fire, but in a gentle whisper." },
  { passage: "2 Kings 2",        title: "Elijah Taken Up to Heaven",        testament: "old", section: History_bk, chapters: 1,
    description: "Elijah is taken up to heaven in a chariot of fire as Elisha watches. Elisha picks up his master's cloak, strikes the Jordan, and the water parts — confirming that the Spirit of Elijah now rests on him." },
  { passage: "2 Kings 4–5",      title: "Elisha's Miracles",                testament: "old", section: History_bk, chapters: 2,
    description: "Elisha multiplies a widow's oil to pay her debts, raises a boy from the dead, and heals Naaman the Syrian commander of leprosy — but only after Naaman nearly refuses the embarrassingly simple instructions." },
  { passage: "2 Kings 18–19",    title: "Hezekiah's Faith in Crisis",       testament: "old", section: History_bk, chapters: 2,
    description: "The Assyrian army surrounds Jerusalem and mocks Hezekiah's God publicly. Hezekiah spreads the enemy's letter before God and prays. That night, 185,000 Assyrian soldiers are found dead." },
  { passage: "Nehemiah 1–2",     title: "Nehemiah's Prayer and Mission",    testament: "old", section: History_bk, chapters: 2,
    description: "Nehemiah hears that Jerusalem's walls are in ruins and weeps, fasts, and prays for months. Then he summons the courage to ask the king of Persia — his employer — for permission to go and rebuild." },
  { passage: "Nehemiah 4–6",     title: "Building Under Opposition",        testament: "old", section: History_bk, chapters: 3,
    description: "The wall-builders face mocking, threats of attack, and internal conflict over debt. Nehemiah organizes defense, addresses injustice, refuses intimidation, and the wall is completed in 52 days." },
  { passage: "Nehemiah 8–9",     title: "The Law Read and Repentance Given",testament: "old", section: History_bk, chapters: 2,
    description: "Ezra reads the law to the assembled people — they weep when they understand it. Nehemiah tells them: 'The joy of the LORD is your strength.' The next day they confess their sins in one of Scripture's longest corporate prayers." },
  { passage: "Esther 1–5",       title: "Esther Becomes Queen",             testament: "old", section: History_bk, chapters: 5,
    description: "A young Jewish exile named Esther becomes queen of Persia. When Haman plots to destroy every Jew in the empire, Mordecai urges her: 'Who knows whether you have not come to the kingdom for such a time as this?'" },
  { passage: "Esther 6–10",      title: "The Great Reversal",               testament: "old", section: History_bk, chapters: 5,
    description: "The plot reverses overnight — Mordecai is honored and Haman is hanged on the gallows he built for his enemy. The Jewish people are saved, and the feast of Purim is established." },

  // ── Poetry Books ───────────────────────────────────────────────────────────
  { passage: "Job 1–3",          title: "Job's Testing and Lament",         testament: "old", section: Poetry_bk,  chapters: 3,
    description: "Job, described as blameless and upright, loses everything in rapid succession — his wealth, his children, his health. He sits in ashes while his wife tells him to curse God and die. Job mourns, but does not sin." },
  { passage: "Job 38–42",        title: "God Speaks from the Whirlwind",    testament: "old", section: Poetry_bk,  chapters: 5,
    description: "God speaks from a whirlwind with a barrage of unanswerable questions — 'Where were you when I laid the foundations of the earth?' Job is undone, repents, and is restored. The answer to suffering is an encounter, not an explanation." },
  { passage: "Psalms 22–24",     title: "Forsaken, Shepherd, and King",     testament: "old", section: Poetry_bk,  chapters: 3,
    description: "Three contrasting psalms: Psalm 22 begins with 'My God, why have you forsaken me?' — quoted by Jesus from the cross. Psalm 23 is the beloved shepherd psalm. Psalm 24 celebrates the LORD as the triumphant King of glory." },
  { passage: "Psalms 46–48",     title: "God Our Fortress",                 testament: "old", section: Poetry_bk,  chapters: 3,
    description: "Three psalms celebrating God as the unshakeable refuge of His people. Psalm 46 inspired Luther's 'A Mighty Fortress.' 'Be still, and know that He is God.'" },
  { passage: "Psalm 51",         title: "A Prayer of Repentance",           testament: "old", section: Poetry_bk,  chapters: 1,
    description: "David's prayer after his sin with Bathsheba — raw, honest, and one of the most personal psalms in Scripture. 'Create in me a clean heart, O God, and renew a right spirit within me.'" },
  { passage: "Psalms 90–91",     title: "From Mortality to Refuge",         testament: "old", section: Poetry_bk,  chapters: 2,
    description: "Psalm 90, attributed to Moses, meditates on the brevity of human life against God's eternal nature — 'Teach us to number our days.' Psalm 91 answers with some of Scripture's most reassuring promises of protection." },
  { passage: "Psalms 103–104",   title: "Praise for God's Love and Creation",testament:"old", section: Poetry_bk,  chapters: 2,
    description: "Psalm 103 catalogs God's compassion — He forgives, heals, redeems, and crowns His people with love. Psalm 104 celebrates Him as Creator, tenderly sustaining every creature He has made." },
  { passage: "Psalms 130–134",   title: "Songs of Ascent",                  testament: "old", section: Poetry_bk,  chapters: 5,
    description: "Five short pilgrim songs sung on the way up to Jerusalem. They move from the depths of repentance and watchful hope to joyful trust and the blessing of brothers dwelling together in unity." },
  { passage: "Proverbs 1–4",     title: "The Call to Wisdom",               testament: "old", section: Poetry_bk,  chapters: 4,
    description: "A father's impassioned appeal to his son to pursue wisdom above everything else. Wisdom is personified as a woman calling out in the streets. The fear of the LORD is where wisdom begins." },
  { passage: "Proverbs 10–12",   title: "Wisdom and Folly Contrasted",      testament: "old", section: Poetry_bk,  chapters: 3,
    description: "Contrasting proverbs on the wise and foolish, the righteous and wicked. Read slowly, one at a time — each is a small window into how God sees the way we live." },
  { passage: "Proverbs 31",      title: "The Capable Woman",                testament: "old", section: Poetry_bk,  chapters: 1,
    description: "A mother's warning to her king-son, followed by an acrostic poem in Hebrew celebrating a woman not for beauty or charm, but because she fears the LORD." },
  { passage: "Ecclesiastes 1–4", title: "The Search for Meaning",           testament: "old", section: Poetry_bk,  chapters: 4,
    description: "Qohelet surveys wisdom, pleasure, work, and wealth — all pursued to their fullest — and finds them hollow. 'Vanity of vanities, all is vanity.' The question is what life means apart from God." },
  { passage: "Ecclesiastes 9–12",title: "Wisdom and the Final Word",        testament: "old", section: Poetry_bk,  chapters: 4,
    description: "Practical advice for living wisely in an uncertain world, followed by imagery of old age as a crumbling house. The conclusion: 'Fear God and keep His commandments, for this is the whole duty of man.'" },
  { passage: "Song of Solomon 1–4",title:"The Song of Love",                testament: "old", section: Poetry_bk,  chapters: 4,
    description: "The opening movement of this love poem — the beloved and her lover exchange admiration and longing. Whether read as a celebration of human intimacy or an allegory of God's pursuit of His people, it is striking and beautiful." },

  // ── Major Prophets ──────────────────────────────────────────────────────────
  { passage: "Isaiah 1–5",       title: "God's Case Against Jerusalem",     testament: "old", section: Major_p_bk, chapters: 5,
    description: "Isaiah opens with God's indictment of Judah — a people who offer religious rituals while practicing injustice. 'Cease to do evil, learn to do good; seek justice, correct oppression.' Judgment is coming, but so is hope." },
  { passage: "Isaiah 6",         title: "Isaiah's Vision and Call",         testament: "old", section: Major_p_bk, chapters: 1,
    description: "Isaiah sees the LORD high and lifted up, surrounded by seraphim crying 'Holy, holy, holy.' Undone by his own sinfulness, he is cleansed by a coal from the altar and responds: 'Here I am. Send me.'" },
  { passage: "Isaiah 9, 11",     title: "The Messiah Foretold",             testament: "old", section: Major_p_bk, chapters: 2,
    description: "Chapter 9 announces the birth of a child — Wonderful Counselor, Mighty God, Prince of Peace — whose government will never end. Chapter 11 describes the righteous Branch from Jesse's stump who will usher in a new creation." },
  { passage: "Isaiah 40–43",     title: "Comfort for God's People",         testament: "old", section: Major_p_bk, chapters: 4,
    description: "God speaks tenderly to a weary, exiled people. 'He gives power to the faint and strength to those who have no might. Those who wait upon the LORD shall renew their strength — they shall mount up with wings like eagles.'" },
  { passage: "Isaiah 52–53",     title: "The Suffering Servant",            testament: "old", section: Major_p_bk, chapters: 2,
    description: "The most detailed Old Testament prophecy of the crucifixion — written 700 years before the cross. 'He was pierced for our transgressions; He was crushed for our iniquities; the punishment that brought us peace was upon Him.'" },
  { passage: "Isaiah 55–56",     title: "Come to the Waters",               testament: "old", section: Major_p_bk, chapters: 2,
    description: "An open invitation to come and drink freely, without money and without price. God's word will accomplish what He sends it to do. The covenant is extended even to foreigners and those long excluded from Israel." },
  { passage: "Jeremiah 1–3",     title: "Jeremiah's Call",                  testament: "old", section: Major_p_bk, chapters: 3,
    description: "God calls Jeremiah before he was born, tells him not to be afraid, and appoints him prophet to the nations. His early messages compare Israel's abandonment of God to a bride forsaking her husband on their wedding day." },
  { passage: "Jeremiah 17–20",   title: "The Prophet's Personal Struggles", testament: "old", section: Major_p_bk, chapters: 4,
    description: "Jeremiah's 'confessions' — where he argues with God, regrets his birth, and accuses God of deceiving him. Honest, raw, and deeply human. Yet God holds him, and Jeremiah keeps preaching." },
  { passage: "Jeremiah 29–31",   title: "Letter to the Exiles and the New Covenant",testament:"old",section:Major_p_bk,chapters:3,
    description: "A letter to the exiles in Babylon: plant gardens, seek the peace of the city. 'I know the plans I have for you — plans for welfare and not for evil.' Then the great promise: a New Covenant written on the heart." },
  { passage: "Lamentations 1–5", title: "Grief Over Jerusalem",             testament: "old", section: Major_p_bk, chapters: 5,
    description: "Five poems of grief written in the ruins of Jerusalem after Babylon destroyed it. Chapter 3 turns the corner: 'The steadfast love of the LORD never ceases; His mercies never come to an end. Great is Your faithfulness.'" },
  { passage: "Lamentations 3",   title: "Great Is Your Faithfulness",       testament: "old", section: Major_p_bk, chapters: 1,
    description: "A man in affliction and darkness who wrestles through to hope. In the middle of suffering he remembers: 'The LORD is my portion, therefore I will hope in Him.' One of Scripture's most honest and hopeful chapters." },
  { passage: "Ezekiel 1–3",      title: "Ezekiel's Throne Vision",          testament: "old", section: Major_p_bk, chapters: 3,
    description: "Ezekiel's overwhelming inaugural vision — a storm cloud, four living creatures, gleaming wheels full of eyes, and a human figure on a sapphire throne. He falls on his face. God tells him to stand and sends him to a rebellious people." },
  { passage: "Ezekiel 34",       title: "The Good Shepherd",                testament: "old", section: Major_p_bk, chapters: 1,
    description: "God rebukes Israel's shepherds who fed themselves instead of the flock. Then a promise: 'I myself will search for my sheep.' God will tend them in good pasture, bind up the injured, and strengthen the weak." },
  { passage: "Ezekiel 36–37",    title: "New Hearts and Dry Bones",         testament: "old", section: Major_p_bk, chapters: 2,
    description: "God promises to give His people a new heart and put His Spirit within them. Then Ezekiel stands in a valley of dry bones and prophesies — the bones rattle, connect, and stand up as a vast living army." },
  { passage: "Daniel 1–3",       title: "Faithful in Babylon",              testament: "old", section: Major_p_bk, chapters: 3,
    description: "Daniel and his friends refuse the king's food and are found healthier than the rest. Later, Shadrach, Meshach, and Abednego refuse to bow to a golden statue and are thrown into a furnace — but a fourth figure walks with them in the fire." },
  { passage: "Daniel 4–6",       title: "The Handwriting on the Wall",      testament: "old", section: Major_p_bk, chapters: 3,
    description: "Nebuchadnezzar loses his mind for seven years until he acknowledges God's sovereignty. A disembodied hand writes on a palace wall; Daniel interprets it. Then Daniel is thrown into a lion's den — and comes out unharmed at dawn." },
  { passage: "Daniel 7–9",       title: "Visions of Future Kingdoms",       testament: "old", section: Major_p_bk, chapters: 3,
    description: "Four beasts represent world empires, the Ancient of Days sits enthroned in glory, and the Son of Man comes on clouds to receive an eternal kingdom. Then Daniel's seventy-weeks prophecy pointing toward the Messiah." },

  // ── Minor Prophets ──────────────────────────────────────────────────────────
  { passage: "Hosea 1–3",        title: "The Unfaithful Wife and Pursuing God",testament:"old",section:Minor_p_bk,chapters:3,
    description: "God commands Hosea to marry Gomer, who will be unfaithful — and then to take her back when she leaves. The marriage is a lived-out parable of God's relationship with Israel, and of a love that pursues even the unfaithful." },
  { passage: "Joel 1–3",         title: "The Day of the Lord and the Spirit",testament:"old", section: Minor_p_bk, chapters: 3,
    description: "A devastating locust plague strips the land bare — Joel calls the nation to fasting and repentance. God promises restoration and, in a passage quoted at Pentecost, the outpouring of His Spirit on all flesh." },
  { passage: "Amos 5–7",         title: "Justice Like a River",             testament: "old", section: Minor_p_bk, chapters: 3,
    description: "Amos confronts Israel's hollow worship and exploitation of the poor. 'I hate, I despise your religious festivals.' What God wants instead is for justice to roll down like water and righteousness like an ever-flowing stream." },
  { passage: "Obadiah 1",        title: "Judgment on Edom",                 testament: "old", section: Minor_p_bk, chapters: 1,
    description: "The Bible's shortest book — one chapter pronouncing judgment on Edom for standing by while Jerusalem fell and joining in the looting. 'As you have done, it shall be done to you.'" },
  { passage: "Jonah 1–4",        title: "Running from God",                 testament: "old", section: Minor_p_bk, chapters: 4,
    description: "Jonah runs from God, is swallowed by a great fish, prays from inside it, is vomited onto shore, preaches in Nineveh — and the whole city repents. Then Jonah sulks because God was merciful to his enemies. The book ends with a question." },
  { passage: "Micah 4–7",        title: "Justice, Kindness, and Humility",  testament: "old", section: Minor_p_bk, chapters: 4,
    description: "Swords beaten into plowshares, the Messiah's birth in Bethlehem, and the famous summary of what God requires: 'Do justice, love kindness, and walk humbly with your God.'" },
  { passage: "Habakkuk 1–3",     title: "Wrestling with God",               testament: "old", section: Minor_p_bk, chapters: 3,
    description: "Habakkuk dares to complain to God: 'Why do you tolerate evil?' God's answer is unsettling. Habakkuk closes with a declaration of radical trust even if everything falls apart: 'Yet I will rejoice in the LORD.'" },
  { passage: "Zephaniah 1–3",    title: "Judgment and God's Song",          testament: "old", section: Minor_p_bk, chapters: 3,
    description: "Judgment on Judah and the nations for pride and idolatry — but the book ends with one of the Bible's most tender images: 'The LORD your God is in your midst; He will rejoice over you with singing.'" },
  { passage: "Zechariah 9–14",   title: "The Coming King",                  testament: "old", section: Minor_p_bk, chapters: 6,
    description: "Prophecies that read like a preview of the Gospels — the humble king coming on a donkey, thirty pieces of silver, the shepherd struck and the sheep scattered, and the pierced one whom all nations will mourn." },
  { passage: "Malachi 1–4",      title: "God's Final Word Before Silence",  testament: "old", section: Minor_p_bk, chapters: 4,
    description: "The last Old Testament prophet confronts a weary, half-hearted people going through the motions. He promises to send Elijah before the great Day of the LORD. The Old Testament closes here — 400 years of silence follow." },

  // ── The Gospels ─────────────────────────────────────────────────────────────
  { passage: "Matthew 1–4",      title: "The Birth and Temptation of Jesus",testament:"new",  section: Gospels_bk, chapters: 4,
    description: "The genealogy linking Jesus to Abraham and David, the birth narrative, the Magi, the flight to Egypt, John the Baptist, Jesus' baptism, and His forty days of temptation in the wilderness." },
  { passage: "Matthew 5–7",      title: "The Sermon on the Mount",          testament: "new", section: Gospels_bk, chapters: 3,
    description: "The most concentrated collection of Jesus' teaching in Scripture. The Beatitudes, salt and light, the true meaning of the law, the Lord's Prayer, not worrying, and the narrow gate." },
  { passage: "Matthew 13",       title: "Parables of the Kingdom",          testament: "new", section: Gospels_bk, chapters: 1,
    description: "Seven parables of the Kingdom of Heaven: the sower, the weeds, the mustard seed, the yeast, the hidden treasure, the pearl, and the net. Jesus explains what the Kingdom is like and why He teaches in parables." },
  { passage: "Matthew 26–28",    title: "The Passion and Resurrection",     testament: "new", section: Gospels_bk, chapters: 3,
    description: "The Last Supper, Gethsemane, the arrest, Peter's denial, the trial before Pilate, the crucifixion, and the resurrection. Matthew closes with the risen Jesus commissioning His disciples to go to all nations." },
  { passage: "Mark 1–3",         title: "Jesus' Ministry Begins",           testament: "new", section: Gospels_bk, chapters: 3,
    description: "Mark wastes no time — Jesus is baptized, tempted, calls His first disciples, heals and teaches with astonishing authority, and is already drawing opposition from the religious leaders, all within the first few chapters." },
  { passage: "Mark 4–5",         title: "Storms, Demons, and Healing",      testament: "new", section: Gospels_bk, chapters: 2,
    description: "Jesus calms a storm with a word, casts a legion of demons into pigs, raises a twelve-year-old girl from the dead, and heals a woman who had been bleeding for twelve years. Authority over nature, demons, disease, and death." },
  { passage: "Mark 14–16",       title: "The Passion and Empty Tomb",       testament: "new", section: Gospels_bk, chapters: 3,
    description: "The anointing, the Last Supper, Gethsemane, the arrest, Peter's denial, the trial, the crucifixion, and the empty tomb. The original ending of Mark is abrupt and unresolved — read it and sit with the open question." },
  { passage: "Luke 1–2",         title: "The Birth of Jesus",               testament: "new", section: Gospels_bk, chapters: 2,
    description: "Gabriel's announcement, Elizabeth and Zechariah, Mary's Magnificat, the birth in Bethlehem, the shepherds, and Simeon and Anna in the Temple. The most detailed account of Jesus' arrival in the world." },
  { passage: "Luke 10–11",       title: "The Good Samaritan and Prayer",    testament: "new", section: Gospels_bk, chapters: 2,
    description: "The seventy-two sent out, the Good Samaritan told in response to 'Who is my neighbor?', Mary sitting at Jesus' feet while Martha works, and Jesus teaching the disciples how to pray." },
  { passage: "Luke 15",          title: "The Lost and Found",               testament: "new", section: Gospels_bk, chapters: 1,
    description: "Three parables of things lost: a sheep, a coin, and a son. The father in the parable of the Prodigal Son runs toward his returning child while still a long way off — one of the Bible's most beloved portraits of God's character." },
  { passage: "Luke 22–24",       title: "Last Supper to the Emmaus Road",   testament: "new", section: Gospels_bk, chapters: 3,
    description: "The Last Supper, Gethsemane, the arrest, Peter's denial, the trial, the crucifixion, and the resurrection. Luke adds the road to Emmaus — two disciples walk with the risen Jesus without recognizing Him until He breaks bread." },
  { passage: "John 1–3",         title: "The Word Made Flesh",              testament: "new", section: Gospels_bk, chapters: 3,
    description: "John opens with cosmic poetry: 'In the beginning was the Word.' The Word becomes flesh. John the Baptist points to the Lamb of God. Water is turned to wine. Nicodemus visits at night: 'You must be born again.'" },
  { passage: "John 6",           title: "The Bread of Life",                testament: "new", section: Gospels_bk, chapters: 1,
    description: "Jesus feeds five thousand with five loaves and two fish, then walks on water. The next day the crowd wants more bread. Jesus says: 'I am the bread of life. Whoever comes to me shall not hunger; whoever believes in me shall never thirst.'" },
  { passage: "John 14–17",       title: "The Upper Room Discourse",         testament: "new", section: Gospels_bk, chapters: 4,
    description: "Jesus' most intimate teaching on the night before He died — the promise of the Holy Spirit, abiding in Him like branches in a vine, and His high-priestly prayer for His disciples and all who will ever believe." },
  { passage: "John 18–21",       title: "The Passion and Resurrection",     testament: "new", section: Gospels_bk, chapters: 4,
    description: "The arrest, Peter's denial, the trial before Pilate, the crucifixion, Mary in the garden, Thomas: 'My Lord and my God.' Ends with Jesus restoring Peter over breakfast on the beach." },

  // ── History of the Church ───────────────────────────────────────────────────
  { passage: "Acts 1–4",         title: "Pentecost and the Early Church",   testament: "new", section: Church_bk,  chapters: 4,
    description: "Jesus ascends; the disciples wait and pray. At Pentecost, tongues of fire fill the room, the disciples speak in every language, and three thousand are baptized. The early community shares everything. The church begins." },
  { passage: "Acts 7–9",         title: "Stephen's Martyrdom and Paul's Conversion",testament:"new",section:Church_bk,chapters:3,
    description: "Stephen preaches a sweeping history of Israel's resistance to God and is stoned — the first martyr. Saul approves. Then on the road to Damascus, the same Saul is knocked down by a blinding light and hears Jesus' voice." },
  { passage: "Acts 13–15",       title: "The First Missionary Journey",     testament: "new", section: Church_bk,  chapters: 3,
    description: "Paul and Barnabas are commissioned by the church at Antioch and set out. They preach in synagogues, face persecution, see Gentiles come to faith, and return to report what God has opened. The first church council debates circumcision." },
  { passage: "Acts 16–18",       title: "Paul in Macedonia and Greece",     testament: "new", section: Church_bk,  chapters: 3,
    description: "Paul and Silas sing hymns in a Philippian jail and an earthquake opens the cells — the jailer converts. Then Athens, where Paul debates philosophers at the Areopagus. Then Corinth, where he stays eighteen months." },
  { passage: "Acts 27–28",       title: "Shipwrecked but Unhindered",       testament: "new", section: Church_bk,  chapters: 2,
    description: "Paul's voyage to Rome — a ferocious storm, two weeks adrift, a shipwreck on Malta, a viper bite that doesn't kill him. He arrives as a prisoner and immediately begins preaching the Kingdom of God. The book ends with him doing so, unhindered." },

  // ── Pauline Epistles ────────────────────────────────────────────────────────
  { passage: "Romans 1–4",       title: "Sin, Faith, and Justification",    testament: "new", section: Paul_bk,    chapters: 4,
    description: "All humanity stands guilty before God — Gentiles who suppress the truth and Jews who have the law but don't keep it. The only way to be declared righteous: faith in Jesus Christ, just as it was for Abraham." },
  { passage: "Romans 5–8",       title: "Life in the Spirit",               testament: "new", section: Paul_bk,    chapters: 4,
    description: "Peace with God, hope in suffering, the old self crucified with Christ, life in the Spirit. Ends with one of the Bible's greatest declarations: nothing in all creation can separate us from the love of God in Christ Jesus." },
  { passage: "Romans 12–15",     title: "The Transformed Life",             testament: "new", section: Paul_bk,    chapters: 4,
    description: "Living sacrifices, renewed minds, genuine love, blessing those who persecute you, caring for the weak. Theology applied to every area of everyday life and community." },
  { passage: "1 Corinthians 1–4",title: "The Wisdom of the Cross",          testament: "new", section: Paul_bk,    chapters: 4,
    description: "The Corinthian church is divided over which leader to follow. Paul rebukes them: Christ is not divided. The message of the cross is foolishness to the wise, but it is God's power to those who are being saved." },
  { passage: "1 Corinthians 12–13",title:"Gifts and the Supremacy of Love", testament: "new", section: Paul_bk,    chapters: 2,
    description: "Spiritual gifts are given to different members for the common good — the body cannot function if every part is the same. Then chapter 13: love is the more excellent way. Without love, every gift is empty noise." },
  { passage: "1 Corinthians 15", title: "The Resurrection Chapter",         testament: "new", section: Paul_bk,    chapters: 1,
    description: "If Christ was not raised, the faith is worthless. But He was raised — the firstfruits of those who have fallen asleep. Death has lost its sting. The victory belongs to God. The most important argument Paul ever made." },
  { passage: "2 Corinthians 1–5",title: "Jars of Clay",                     testament: "new", section: Paul_bk,    chapters: 5,
    description: "Paul writes about being afflicted but not crushed — carrying the death of Jesus in his body so that His life may be revealed. We are jars of clay holding a treasure. We fix our eyes not on what is seen, but on what is unseen." },
  { passage: "2 Corinthians 10–13",title:"Power in Weakness",               testament: "new", section: Paul_bk,    chapters: 4,
    description: "Paul defends his apostleship against those who prefer polished leaders. He recounts beatings, shipwrecks, and sleepless nights. A thorn in his flesh he begged God to remove — God said no: 'My grace is sufficient for you.'" },
  { passage: "Galatians 1–6",    title: "Freedom from the Law",             testament: "new", section: Paul_bk,    chapters: 6,
    description: "Paul is furious — someone has told the Galatians that faith in Christ isn't enough. He dismantles this with sharp arguments and a passionate appeal: 'It is for freedom that Christ has set us free. Stand firm, then, and do not be burdened again by a yoke of slavery.'" },
  { passage: "Ephesians 1–3",    title: "Every Spiritual Blessing",         testament: "new", section: Paul_bk,    chapters: 3,
    description: "Chosen before the foundation of the world, adopted as sons, sealed by the Holy Spirit. Dead in sin, made alive together with Christ. The mystery now revealed: Jew and Gentile united in one body." },
  { passage: "Ephesians 4–6",    title: "The Armor of God",                 testament: "new", section: Paul_bk,    chapters: 3,
    description: "Walk worthy of the calling — put off the old self, put on the new. Speak truth, deal with anger, forgive. Every relationship reordered by the Gospel. Put on the full armor of God and stand firm." },
  { passage: "Philippians 1–4",  title: "Rejoice in All Circumstances",     testament: "new", section: Paul_bk,    chapters: 4,
    description: "Written from prison, yet overflowing with joy. 'For me to live is Christ, and to die is gain.' Rejoice always. Don't be anxious — pray with thanksgiving. Think on whatever is true, noble, and lovely. The peace of God will guard your heart." },
  { passage: "Colossians 1–4",   title: "Christ Supreme",                   testament: "new", section: Paul_bk,    chapters: 4,
    description: "Christ is the image of the invisible God, firstborn over all creation — all things were created by Him and for Him. Don't let anyone take your prize with hollow philosophy. Set your minds on things above." },
  { passage: "2 Timothy 1–4",    title: "Fight the Good Fight",             testament: "new", section: Paul_bk,    chapters: 4,
    description: "Paul's final letter, written facing execution. He charges Timothy: guard the Gospel, preach the word in season and out of season, endure hardship, finish the race. 'I have fought the good fight. I have kept the faith.'" },

  // ── General Epistles ────────────────────────────────────────────────────────
  { passage: "Hebrews 1–4",      title: "Jesus Greater Than All",           testament: "new", section: Epstles_bk, chapters: 4,
    description: "Jesus is greater than the angels who delivered the law, greater than Moses who gave it, and greater than Joshua who led Israel to rest. The word of God is living and active, sharper than any two-edged sword." },
  { passage: "Hebrews 10–12",    title: "Run the Race",                     testament: "new", section: Epstles_bk, chapters: 3,
    description: "A warning not to turn back, followed by the great hall of faith — Abel, Enoch, Noah, Abraham, and those who were sawn in two. Then: throw off everything that hinders and run with endurance, fixing your eyes on Jesus." },
  { passage: "James 1–5",        title: "Faith That Works",                 testament: "new", section: Epstles_bk, chapters: 5,
    description: "James writes with bluntness — don't just hear the word, do it; don't show favoritism; tame the tongue; submit to God and resist the devil; pray for one another. Faith that produces no action is dead." },
  { passage: "1 Peter 1–5",      title: "Living as Strangers",              testament: "new", section: Epstles_bk, chapters: 5,
    description: "Written to scattered believers under pressure — a call to holy living, genuine love, and patient endurance. Don't be surprised by fiery trials. Humble yourselves. Cast all your anxiety on God, because He cares for you." },
  { passage: "1 John 1–5",       title: "Love as the Mark of True Faith",   testament: "new", section: Epstles_bk, chapters: 5,
    description: "Tests of genuine faith — walk in the light, not the darkness; love one another, not just in word; believe that Jesus came in the flesh. God is love. Perfect love drives out fear." },
  { passage: "Jude 1",           title: "Contend for the Faith",            testament: "new", section: Epstles_bk, chapters: 1,
    description: "Jude writes urgently against those who have crept into the church and turned grace into a license for immorality. Build yourself up in faith, show mercy, and contend for the truth. Closes with one of Scripture's greatest doxologies." },

  // ── Apocalyptic Writings ────────────────────────────────────────────────────
  { passage: "Revelation 1–3",   title: "Letters to the Seven Churches",    testament: "new", section: End_bk,     chapters: 3,
    description: "John receives a vision of the risen Christ — eyes like fire, voice like rushing water — and dictates seven letters to seven churches: commendations, rebukes, and urgent calls to repent and hold on." },
  { passage: "Revelation 4–5",   title: "Heaven's Throne Room",             testament: "new", section: End_bk,     chapters: 2,
    description: "A door opens in heaven. John sees the throne of God surrounded by elders and living creatures crying 'Holy, holy, holy.' A sealed scroll no one can open — until the Lamb who was slain steps forward. Heaven erupts in worship." },
  { passage: "Revelation 19–22", title: "The Return of Christ and New Creation",testament:"new",section:End_bk,    chapters: 4,
    description: "The rider on the white horse, the defeat of evil, Satan bound, the final judgment, and the new heaven and new earth. 'He will wipe away every tear.' The river of life, the tree of life. 'Come, Lord Jesus.'" }
]

// ── Section themes ────────────────────────────────────────────────────────────

let sectionThemes = {
  "Pentateuch":            "Foundation of Faith",
  "Historical Books":      "Character Study",
  "Poetry Books":          "Devotional Reading",
  "Major Prophets":        "Prophetic Vision",
  "Minor Prophets":        "Prophetic Call",
  "The Gospels":           "Meet Jesus",
  "History of the Church": "Early Church",
  "Pauline Epistles":      "Theological Depth",
  "General Epistles":      "Practical Faith",
  "Apocalyptic Writings":  "Ultimate Hope"
}

// ── Helpers ───────────────────────────────────────────────────────────────────

let getFilteredReadings = function () {
  let testamentChoice = document.querySelector('input[name="testament"]:checked').value
  let readingChoice   = document.querySelector('input[name="reading"]:checked').value
  let ranges = { light: [1, 2], medium: [3, 5], heavy: [6, 99] }
  let [min, max] = ranges[readingChoice]

  let pool = readings.filter(r => {
    let tMatch = testamentChoice === 'both' || r.testament === testamentChoice
    let cMatch = r.chapters >= min && r.chapters <= max
    return tMatch && cMatch
  })

  if (pool.length === 0) {
    pool = readings.filter(r => testamentChoice === 'both' || r.testament === testamentChoice)
  }
  return pool
}

let pickRandom = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// ── Storage ───────────────────────────────────────────────────────────────────

let loadJSON = function (key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback } catch { return fallback }
}

let saveJSON = function (key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}

// ── Profile ───────────────────────────────────────────────────────────────────

let profileModal     = document.getElementById('profileModal')
let profileNameInput = document.getElementById('profileName')
let profileGreeting  = document.getElementById('profileGreeting')
let profileAvatar    = document.getElementById('profileAvatar')
let profileBtn       = document.getElementById('profileBtn')

let refreshGreeting = function () {
  let name = localStorage.getItem('profileName')
  if (name) {
    profileGreeting.textContent = `Hi, ${name}`
    profileAvatar.className = 'avatar-initial'
    profileAvatar.textContent = name.charAt(0).toUpperCase()
  } else {
    profileGreeting.textContent = ''
    profileAvatar.className = 'avatar'
    profileAvatar.innerHTML = '&#9786;'
  }
}

profileBtn.addEventListener('click', () => {
  profileNameInput.value = localStorage.getItem('profileName') || ''
  profileModal.classList.remove('hidden')
})

document.getElementById('profileSave').addEventListener('click', () => {
  let name = profileNameInput.value.trim()
  if (name) localStorage.setItem('profileName', name)
  profileModal.classList.add('hidden')
  refreshGreeting()
})

document.getElementById('profileCancel').addEventListener('click', () => {
  profileModal.classList.add('hidden')
})

profileModal.addEventListener('click', (e) => {
  if (e.target === profileModal) profileModal.classList.add('hidden')
})

refreshGreeting()

// ── Reading log & starred ─────────────────────────────────────────────────────

let renderList = function (listEl, items, onRemove) {
  listEl.innerHTML = ''
  if (items.length === 0) {
    listEl.innerHTML = '<li class="history-empty">Nothing here yet.</li>'
    return
  }
  items.forEach((item, idx) => {
    let li = document.createElement('li')
    li.className = 'history-item'
    let left = document.createElement('span')
    let titlePart = item.title ? `<span class="log-title">${item.title}</span> ` : ''
    let passagePart = `<span class="log-passage">${item.text}</span>`
    let datePart = item.date ? ` <span class="history-item-date">${item.date}</span>` : ''
    left.innerHTML = titlePart + passagePart + datePart
    let removeBtn = document.createElement('button')
    removeBtn.className = 'btn-remove'
    removeBtn.textContent = '×'
    removeBtn.addEventListener('click', () => onRemove(idx))
    li.appendChild(left)
    li.appendChild(removeBtn)
    listEl.appendChild(li)
  })
}

let refreshLog = function () {
  let log = loadJSON('readingLog', [])
  renderList(document.getElementById('logList'), log, (idx) => {
    log.splice(idx, 1)
    saveJSON('readingLog', log)
    refreshLog()
  })
}

let refreshStarred = function () {
  let starred = loadJSON('starredScriptures', [])
  renderList(document.getElementById('starredList'), starred, (idx) => {
    starred.splice(idx, 1)
    saveJSON('starredScriptures', starred)
    refreshStarred()
  })
}

document.getElementById('clearLogBtn').addEventListener('click', () => {
  saveJSON('readingLog', [])
  refreshLog()
})

document.getElementById('clearStarredBtn').addEventListener('click', () => {
  saveJSON('starredScriptures', [])
  refreshStarred()
})

// ── Tab switching ─────────────────────────────────────────────────────────────

document.querySelectorAll('.history-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.history-tab').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    let target = btn.dataset.target
    document.getElementById('logPanel').style.display  = target === 'logPanel'     ? '' : 'none'
    document.getElementById('starredPanel').style.display = target === 'starredPanel' ? '' : 'none'
  })
})

// ── Toggle history panel ──────────────────────────────────────────────────────

let historyVisible   = false
let toggleHistoryBtn = document.getElementById('toggleHistoryBtn')
let historySection   = document.getElementById('historySection')
let toggleArrow      = document.getElementById('toggleHistoryArrow')

toggleHistoryBtn.addEventListener('click', () => {
  historyVisible = !historyVisible
  historySection.classList.toggle('hidden', !historyVisible)
  toggleArrow.classList.toggle('open', historyVisible)
  if (historyVisible) { refreshLog(); refreshStarred() }
})

// ── Current result ────────────────────────────────────────────────────────────

let currentResult    = null
let resultCard       = document.getElementById('resultCard')
let starBtn          = document.getElementById('starBtn')
let readingTitleEl   = document.getElementById('readingTitle')
let readingPrompt    = document.getElementById('randomBook')
let contextThemeEl   = document.getElementById('contextTheme')
let contextPromptEl  = document.getElementById('contextPrompt')

starBtn.addEventListener('click', () => {
  if (!currentResult) return
  let starred = loadJSON('starredScriptures', [])
  if (!starred.some(s => s.text === currentResult.text)) {
    starred.unshift(currentResult)
    saveJSON('starredScriptures', starred)
  }
  starBtn.classList.add('starred')
  if (historyVisible) refreshStarred()
})

// ── Main randomizer ───────────────────────────────────────────────────────────

document.getElementById('randomizer').addEventListener('click', () => {
  let pool    = getFilteredReadings()
  let reading = pickRandom(pool)
  let date    = new Date().toLocaleDateString()

  readingTitleEl.textContent  = reading.title
  readingPrompt.textContent   = reading.passage
  contextThemeEl.textContent  = sectionThemes[reading.section] || reading.section
  contextPromptEl.textContent = reading.description
  currentResult = { title: reading.title, text: reading.passage, date }

  let log = loadJSON('readingLog', [])
  log.unshift({ title: reading.title, text: reading.passage, date })
  if (log.length > 50) log.pop()
  saveJSON('readingLog', log)
  if (historyVisible) refreshLog()

  resultCard.classList.remove('hidden')
  starBtn.classList.remove('starred')
  toggleHistoryBtn.classList.remove('hidden')
})
