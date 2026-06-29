# Payee Map (Spend Categorization Rules Engine)

Read on every `assist:handle-budget` run. Generated from YNAB transaction history (payee -> dominant category), refreshed by re-mining. Corrections live in [learned-rules.md](../learned-rules.md) under `## Spend Categorization` and OVERRIDE this file.

How to use it:

- **Skip** (never categorize, they are account moves): any payee whose name matches `Transfer`, `CRCARDPMT`, `AUTOPAY`, `External Transfer`, `P2P`, `RECURRING FROM CHK`, `Online Scheduled Payment`, `PAYMENT FROM CHK`, `Confirmation`, `Descriptive Withdrawal/Deposit`. Leave uncategorized.
- **Inflows** (income, route to `Inflow: Ready to Assign`, not a spend category): see the Inflows list below.
- **Auto-categorize**: payees below with a clear historical category. Apply silently.
- **Always confirm**: payees whose history is split. Ask before applying; do not auto-default.
- **New payees** (not listed): ask the user one-by-one, then append the decision to learned-rules.md so it sticks.

Trip handling: itemize each trip charge into its real category (coffee to Caffeine, meals to Dining Out) AND set the transaction memo to `<emoji> <Trip Name>` (e.g. `🏔️ Crested Butte`, `⛷️ Vail`). Forni's own convention, NOT a YNAB flag. This keeps everyday categories clean while letting a trip be totaled by its memo.

Note: `Matthew Bigelow` historically maps to Rent. After the 3033 Blake purchase (June 2026) that recurring housing line becomes a mortgage payment, not rent.

## Auto-Categorize (clear history, apply silently)

- **🛒 Groceries**: Sprouts (22), Safeway (19), King Soopers (13), Costco (7), Whole Foods (5), Natural Grocers (5), Trader Joe's (4), Lider Express (2), Merpago Proidencia (2), Target (2), Raquelitas Tortillas (2), Brothers Market (2), Raquelita's Tortillas (2), City Market (2), FamilyMart (2), Albertsons (2), Spinellis (2), Mountain Earth Grocery (2)
- **🍟 Fast Food**: Domino's (56), Illegal Pete's (23), Sliceworks (7), McDonald's (4), DoorDash (3)
- **🌏 Adventure**: Foreign Transaction Fee (20), Airbnb (10), United Airlines (10), Denver Parking (5), Inn the Clouds (3), Booking.com (3), Jetstar (3), Southwest Airlines (2), The Bidwell (2), Kuroneko Yamato (2), Hokkaido Resort Liner (2), Highway Bus (2), Kajiwara Kitchen Supply (2), Cajun Encounters (2)
- **🍾 Sobriety**: York Street Club (32), High Noon (20), Dakota Schwarz (2)
- **☕️ Caffeine**: Improper City (11), Blue Sparrow Coffee (5), Santiago Coffee (3), Starbucks (2), Copper Door Coffee (2), Before & After (2), Hearth (2), Crema Coffee House (2), Lazybird Coffee (2), Invigatorium (2), Huckleberry Roasters (2), Wash Perk (2), Bunny and Clyde's (2), Camp 4 Coffee (2)
- **🤲 Giving**: Project Angel Heart (12), Colorado Mountain Club (9), Charity: Water (9), CHARITY:WATER (3), We Dont Waste (3)
- **🍿 Entertainment**: Amazon Prime (8), Prime Video (7), Nick Titus "📺" (5), Spotify (4), Netflix (4), Hulu (2), Buffalo Exchange (2), AXS (2), Townie Books & Rumors (2)
- **🚙 Transportation**: Maverik (7), Suica (7), Sinclair (6), ExxonMobil (3), TRANSPORTES DEL ESTUARIO (2), Circle K (2), Public Works (2), JR East (2), Keisei Skyliner (2)
- **🍽️ Dining Out**: Himchuli Indian (3), The Corner Beet (3), Shibuya Tokyu Foodshow (3), Donde Rodrigo y Jose Luis (2), Willie's (2), Great Divide Brewery (2), New Moonlight Pizza (2)
- **🎒 Gear**: REI (10), Smith Optics (3)
- **⚡️ Utilities**: Xcel Energy (13)
- **🏡 Home Improvement**: Ace Hardware (6), Mill Industries (3), The Home Depot (2), Carbon Knife Co (2)
- **🧖‍♂️ Personal Care**: Cult of Mane Salon (6), CVS Pharmacy (3), Pratt Physical Therapy (3)
- **🏥 Benefits**: Elevate Health Plans (7), River North Dentistry (3), Epic Hospital & Clinic (2)
- **🏡 Rent**: Matthew Bigelow (11)
- **🧥 Clothing**: Keep it Local (3), Arc Thrift Stores (2), Goodwill (2)
- **🛋️ Therapy**: Elizabeth Sump (5)
- **🚬 Nicotine**: Phillips 66 (3), Nesbit's Magazine St Mkt (2)
- **🧖 Naosu Sauna**: Naosu Sauna (4)
- **🚙 Car Insurance**: GEICO (3)
- **🧗 Movement**: Movement RiNo (3)
- **👨‍🦱 Nutrafol**: Nutrafol (3)
- **🎁 Gifts**: Rapha Racing (2)
- **💳 Chase United Fee**: Annual Membership Fee (2)
- **❤️ Dating**: Nocturne (2)
- **🧽 Cleaning**: Blue Spruce Service (2)

## Always Confirm (history is split, ask first)

- **7-Eleven** (39 txns, 74% 🚬 Nicotine) - confirm; buys across categories.
- **Amazon** (36 txns, 52% 🏡 Home Improvement) - confirm; buys across categories.
- **Arc Thrift** (9 txns, 66% 🏡 Home Improvement) - confirm; buys across categories.
- **Conoco** (4 txns, 50% 🚙 Transportation) - confirm; buys across categories.
- **Shell** (4 txns, 75% 🚙 Transportation) - confirm; buys across categories.
- **QuikTrip** (4 txns, 75% 🚙 Transportation) - confirm; buys across categories.
- **USPS** (3 txns, 66% 🧥 Clothing) - confirm; buys across categories.
- **Joan of Clean** (3 txns, 66% 🧽 Cleaning) - confirm; buys across categories.
- **Azam Mughal** (3 txns, 66% 🌏 Adventure) - confirm; buys across categories.
- **Joe's Liquors** (3 txns, 66% ☕️ Caffeine) - confirm; buys across categories.
- **Monthly Maintenance Fee** (2 txns, 50% 💳 BOFA Alaska Fee) - confirm; buys across categories.
- **Guiry's** (2 txns, 50% 🏡 Home Improvement) - confirm; buys across categories.

## Inflows (route to Inflow: Ready to Assign, not spend)

Credit Dividend (12), RYLLC Income (8), Venmo (7), Fidelity (7), Zero Homes (7), Chase (5), Stacks Supplement (4), First Tech Federal Credit Union (4), Bank of America (2)
