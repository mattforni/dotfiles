# Label Map

Full label taxonomy for routing emails. Label IDs are resolved at runtime via `list_email_labels`.

Always route to the most specific sublabel. Never label with just a parent pillar when a sublabel fits.

## Active Label Hierarchy

### Admin (📑)
- `📑 Admin` (parent)
- `📑 Admin/🛒 Purchases` -- order confirmations, receipts, shipping, delivery
- `📑 Admin/🏷 Offers` -- deals, coupons, promotional offers
- `📑 Admin/🏛️ Government` -- government correspondence, DMV, city forms

### Constitution (🍏)
- `🍏 Constitution` (parent)
- `🍏 Constitution/💰 Financial` -- banking, investments, financial planning
- `🍏 Constitution/💰 Financial/💸 Taxes` -- tax documents, W2s, returns
- `🍏 Constitution/💰 Financial/📜 Trust` -- trust, estate planning
- `🍏 Constitution/💪 Athlete` -- gym, fitness, running, climbing, training
- `🍏 Constitution/🏥 Healthcare` -- medical, dental, vision, health insurance
- `🍏 Constitution/🥕 Nutrition` -- supplements, diet, meal planning
- `🍏 Constitution/🧖 Personal Care` -- grooming, skincare
- `🍏 Constitution/🍾 Sobriety` -- sobriety related
- `🍏 Constitution/🛌 Recovery` -- twelve step, meetings, sponsorship

### Contemplation (🧠)
- `🧠 Contemplation` (parent)
- `🧠 Contemplation/📖 Reading` -- books, reading lists, Kindle, Audible
- `🧠 Contemplation/🍿 Entertainment` -- streaming, TV, movies, music, podcasts
- `🧠 Contemplation/🛋️ Therapy` -- therapy, counseling
- `🧠 Contemplation/👨‍🎓 Education` -- courses, MOOCs, certifications, learning

### Community (🤝)
- `🤝 Community` (parent)
- `🤝 Community/😘 Jasmine` -- Jasmine
- `🤝 Community/🤗 Friends` -- personal friends
- `🤝 Community/👨‍👩‍👦‍👦 Family` -- family members (always surface for response)
- `🤝 Community/🏛 Brown` -- Brown University
- `🤝 Community/🏛 Brown/Interviews` -- Brown alumni interviews
- `🤝 Community/📚 Book Club` -- book club
- `🤝 Community/🌱 SCF` -- SCF
- `🤝 Community/🌇 Denver` -- Denver community, local events
- `🤝 Community/🇮🇹 Italiano` -- Italian language learning
- `🤝 Community/🤲 Giving` -- charity, volunteering, donations
- `🤝 Community/⚓ Seattle` -- Seattle contacts and community

### Craft (🛠️)
- `🛠️ Craft` (parent)
- `🛠️ Craft/💼 Vocation` -- job search, career
- `🛠️ Craft/💼 Vocation/0️⃣ Zero` -- Zero Homes
- `🛠️ Craft/💼 Vocation/😈 Gremlin` -- Gremlin
- `🛠️ Craft/💼 Vocation/🏬 Salesforce` -- Salesforce
- `🛠️ Craft/💼 Vocation/🚯 QuitCarbon` -- QuitCarbon
- `🛠️ Craft/💼 Vocation/👨‍🏫 Mentorship` -- mentorship
- `🛠️ Craft/💼 Vocation/🕸 Networking` -- networking, intros, conferences
- `🛠️ Craft/💻 Development` -- software, dev tools, GitHub, tech subscriptions
- `🛠️ Craft/💻 RYLLC` -- Reliably Yours LLC consulting
- `🛠️ Craft/💻 RYLLC/🎯 Atelic` -- Atelic project
- `🛠️ Craft/💻 TPF` -- The Product Forge, Titus
- `🛠️ Craft/🌏 Adventure` -- travel, trips, flights, hotels
- `🛠️ Craft/🌏 Adventure/🇦🇺 Australia` -- Australia
- `🛠️ Craft/🌏 Adventure/🇦🇺 Australia/🦘 Tassie` -- Tasmania
- `🛠️ Craft/🌏 Adventure/🚙 Vehicles` -- vehicles, auto
- `🛠️ Craft/🌦️ Climate` -- climate tech
- `🛠️ Craft/🎨 Leisure` -- leisure, hobbies
- `🛠️ Craft/🎨 Leisure/📸 Photography` -- photography
- `🛠️ Craft/🌲 Outdoorsman` -- outdoor gear, REI, backcountry

## Legacy Labels (cleanup targets)

These labels predate the pillar system. Use `cleanup` mode to merge them.

| Legacy Label | Merge Target | Notes |
|---|---|---|
| People/Connor Foody | 🤝 Community/⚓ Seattle | User confirmed |
| People/Clare Vivarelli | Review and route | Australia era contact |
| People/Brad Phillipi | 🤝 Community/🤗 Friends | |
| Animation | 🛠️ Craft/🎨 Leisure | 2011-2012 content |
| Courses | 🧠 Contemplation/👨‍🎓 Education | Brown 2010 courses |
| Jobs | 🛠️ Craft/💼 Vocation | 2016 job search |
| Registration | 📑 Admin | Old signups |
| Art | 🛠️ Craft/🎨 Leisure | 2019 art events |
| Design | 🛠️ Craft/💻 Development | 2014-2019 design work |
| Tahoe | 🛠️ Craft/🌏 Adventure | 2020 trip planning |
| Boxing | 🍏 Constitution/💪 Athlete | 2020 gym |
| Kickstarter | 🛠️ Craft | Various projects |
| Craigslist | 📑 Admin/🛒 Purchases | Marketplace transactions |
| Amazon | 📑 Admin/🛒 Purchases | Prime, orders |
| Paypal | 📑 Admin/🛒 Purchases | Payment receipts |
| Inspiration | 🧠 Contemplation | General inspiration |
| The Great Migration | Review | 2021 relocation docs |
| Conferences | 🛠️ Craft/💼 Vocation/🕸 Networking | 2019 conference |
| Burning Man | 🛠️ Craft/🌏 Adventure | 2017 event |
| Los Angeles | 🤝 Community | 2023 LA events |
| Press | 🛠️ Craft/💼 Vocation | 2023 interviews |
| San Francisco | 🤝 Community | 2025 SF events |
| Documents | 📑 Admin | Library scans |
| Phi Psi | 🤝 Community/🤗 Friends | Fraternity |
| 🎮 GameFlo | 🛠️ Craft/🎨 Leisure | Gaming newsletters |
| 🎒 Gear | 🛠️ Craft/🌲 Outdoorsman | Outdoor gear |
| ⚖️ Legal | 📑 Admin | Legal correspondence |
| 🪪 Insurance | 🍏 Constitution/🏥 Healthcare | GEICO, auto |
| 🧾 Bills | 🍏 Constitution/💰 Financial | Utility statements |
| 🚌 Transportation | 📑 Admin | Parking, transit |
| 🌉 San Francisco | 🤝 Community | SF events |
| [Imap]/Trash | Delete | Truly empty |
