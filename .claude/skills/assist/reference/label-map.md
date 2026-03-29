# Label Map

Full label taxonomy for routing emails. Label IDs are resolved at runtime via `list_email_labels`.

Always route to the most specific sublabel. Never label with just a parent pillar when a sublabel fits.

## Label Hierarchy

### Admin (📑)

- `📑 Admin` (parent)
- `📑 Admin/🛒 Purchases` -- order confirmations, receipts, shipping, delivery
- `📑 Admin/🏷 Offers` -- deals, coupons, promotional offers
- `📑 Admin/🏛️ Government` -- government correspondence, DMV, city forms
- `📑 Admin/🧾 Bills` -- utility statements, recurring bills
- `📑 Admin/🪪 Insurance` -- auto insurance, home insurance, renters insurance (NOT health insurance)
- `📑 Admin/⚖️ Legal` -- legal correspondence

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
- `🤝 Community/🏛 Brown/👬 Phi Psi` -- Phi Psi fraternity
- `🤝 Community/🏛 Brown/Interviews` -- Brown alumni interviews
- `🤝 Community/📚 Book Club` -- book club
- `🤝 Community/🌱 SCF` -- SCF
- `🤝 Community/🇮🇹 Italiano` -- Italian language learning
- `🤝 Community/🤲 Giving` -- charity, volunteering, donations
- `🤝 Community/🏙️ Cities` -- city based contacts (parent)
- `🤝 Community/🏙️ Cities/🌇 Denver` -- Denver community, local events
- `🤝 Community/🏙️ Cities/⚓ Seattle` -- Seattle contacts and community
- `🤝 Community/🏙️ Cities/🌆 Los Angeles` -- LA contacts and community
- `🤝 Community/🏙️ Cities/🌉 San Francisco` -- SF contacts and community

### Craft (🛠️)

- `🛠️ Craft` (parent)
- `🛠️ Craft/💼 Vocation` -- job search, career
- `🛠️ Craft/💼 Vocation/0️⃣ Zero` -- Zero Homes
- `🛠️ Craft/💼 Vocation/😈 Gremlin` -- Gremlin
- `🛠️ Craft/💼 Vocation/🏬 Salesforce` -- Salesforce
- `🛠️ Craft/💼 Vocation/🚯 QuitCarbon` -- QuitCarbon
- `🛠️ Craft/💼 Vocation/👨‍🏫 Mentorship` -- mentorship
- `🛠️ Craft/💼 Vocation/🕸 Networking` -- networking, intros, conferences
- `🛠️ Craft/💼 Vocation/💻 RYLLC` -- Reliably Yours LLC consulting
- `🛠️ Craft/💼 Vocation/💻 RYLLC/🎯 Atelic` -- Atelic project
- `🛠️ Craft/💼 Vocation/💻 TPF` -- The Product Forge, Titus
- `🛠️ Craft/💻 Development` -- software, dev tools, GitHub, tech subscriptions
- `🛠️ Craft/🌏 Adventure` -- travel, trips, flights, hotels
- `🛠️ Craft/🌏 Adventure/🇦🇺 Australia` -- Australia
- `🛠️ Craft/🌏 Adventure/🇦🇺 Australia/🦘 Tassie` -- Tasmania
- `🛠️ Craft/🌏 Adventure/🚙 Vehicles` -- vehicles, auto
- `🛠️ Craft/🌦️ Climate` -- climate tech
- `🛠️ Craft/🎨 Leisure` -- leisure, hobbies, art, gaming
- `🛠️ Craft/🎨 Leisure/📸 Photography` -- photography
- `🛠️ Craft/🌲 Outdoorsman` -- outdoor gear, REI, backcountry
