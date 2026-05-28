import re

with open("src/app/programs/page.tsx", "r") as f:
    content = f.read()

# Define the section patterns
s1_start = content.find("{/* SECTION 02.5 — ONE DAY GATEWAY */}")
s2_start = content.find("{/* SECTION 02.75 — FRIDAY STEM CHALLENGE CLUB */}")
s3_start = content.find("{/* SECTION 03 — 10-DAY WORKSHOP */}")
s4_start = content.find("{/* SECTION 04 — YEAR-LONG PROGRAM */}")
s5_start = content.find("{/* SECTION 05 — QUICK COMPARISON */}")

if -1 in [s1_start, s2_start, s3_start, s4_start, s5_start]:
    print("Could not find all sections.")
    exit(1)

pre_content = content[:s1_start]
one_day = content[s1_start:s2_start]
friday = content[s2_start:s3_start]
workshop = content[s3_start:s4_start]
year_long = content[s4_start:s5_start]
post_content = content[s5_start:]

# Update Pricing in Year-Long
year_long = year_long.replace(
    '<p className="text-[#B7E3DD] text-base font-light">10 months · Ages 8–15</p>',
    '<p className="text-[#B7E3DD] text-base font-light mb-2">10 months · Ages 8–15</p>\n                  <p className="text-white text-base font-medium">₹12,000 including kit &nbsp;|&nbsp; ₹10,000 + kit separately</p>'
)

# Update Pricing in Friday Club
friday = friday.replace(
    '<p className="text-base font-serif font-bold text-white">Every Friday · Weekly · Ages 8–15</p>',
    '<p className="text-base font-serif font-bold text-white mb-2">Every Friday · Weekly · Ages 8–15</p>\n                    <p className="text-sm font-medium text-white/80">₹1,000 for the full academic year</p>'
)

# New order: Year-long, Friday, Workshop, One-day
new_content = pre_content + year_long + friday + workshop + one_day + post_content

with open("src/app/programs/page.tsx", "w") as f:
    f.write(new_content)

print("Done reordering and updating pricing.")
