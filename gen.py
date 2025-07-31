import csv
import json

redirects = []

with open('redirects.csv', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        redirects.append({
            'path': row['resolvedUid'],
            'url': row['url'],
            'isDisabled': row.get('disabled', '').strip().lower() == 'true'
        })

# Output as JSON
with open('redirects.js', 'w') as jsfile:
    jsfile.write('export const redirects = ')
    json.dump(redirects, jsfile, indent=2)
    jsfile.write(';\n')
