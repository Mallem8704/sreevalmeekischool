import os

terms = ['The Foundations of', 'MOUNIKA BAI', 'READ FULL MESSAGE', 'Estd. 6th June', 'Late Sri', '594', 'Janani']

for root, dirs, files in os.walk('..'):
    if any(x in root for x in ['node_modules', '.next', '.git']):
        continue
    for f in files:
        if f.endswith(('.tsx', '.ts', '.jsx', '.js', '.json', '.html')):
            path = os.path.join(root, f)
            try:
                with open(path, 'r', encoding='utf-8', errors='ignore') as fp:
                    content = fp.read()
                    for term in terms:
                        if term.lower() in content.lower():
                            print(f"{path} -> MATCH: {term}")
            except Exception as e:
                pass
