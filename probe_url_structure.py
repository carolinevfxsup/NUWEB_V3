import urllib.request
import concurrent.futures

PROJECT_ID = 'muncxkojigqqaakscbjs'
BUCKET = 'Src'

# Let's test different base paths
prefixes = [
    f'https://{PROJECT_ID}.supabase.co/storage/v1/object/public/{BUCKET}/NOS',
    f'https://{PROJECT_ID}.supabase.co/storage/v1/object/public/{BUCKET}/assets/NOS',
]

test_files = [
    'Audio/Pedro.mp3',
    'Audio/pedro.mp3',
    'Audio/pedro_presenter.mp3',
    'Audio/Pedro.wav',
    'Audio/pedro.wav',
    'UI/1.png',
    'UI/1.jpg',
    'UI/UI_1.png',
    'BTS/1.mp4',
    'BTS/BTS_1.mp4',
]

candidates = []
for p in prefixes:
    for tf in test_files:
        candidates.append((p, tf, f"{p}/{tf}"))

def check_url(item):
    p, tf, url = item
    req = urllib.request.Request(url, method='HEAD')
    try:
        with urllib.request.urlopen(req, timeout=3) as resp:
            if resp.status == 200:
                return url
    except Exception:
        pass
    return None

print(f"Probing {len(candidates)} URLs...")
found = []
with concurrent.futures.ThreadPoolExecutor(max_workers=20) as executor:
    results = executor.map(check_url, candidates)
    for r in results:
        if r:
            print("FOUND:", r)
            found.append(r)

print("Done. Found", len(found))
