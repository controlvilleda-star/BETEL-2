import json
import re
from collections import Counter

with open('c:/Users/control/Desktop/page 1/app.js', 'r', encoding='utf-8') as f:
    js = f.read()

ids = re.findall(r'id:\s*[\'\"`]?([GH]\d+)[\'\"`]?', js)
print(f'Found {len(ids)} IDs')

counter = Counter(ids)
duplicates = [item for item, count in counter.items() if count > 1]
print('Duplicates:', duplicates)

for d in duplicates:
    print(d, 'appears', counter[d], 'times')
