import urllib.request
import concurrent.futures

PROJECT_ID = 'muncxkojigqqaakscbjs'
BUCKET = 'Src'
BASE_URL = f'https://{PROJECT_ID}.supabase.co/storage/v1/object/public/{BUCKET}/assets/NOS'

# Generate candidate file paths
candidates = []

# Audio candidates
for ext in ['mp3', 'wav', 'm4a', 'ogg']:
    for name in ['Pedro', 'pedro', 'Pedro_voice', 'voice', 'audio', 'pedro_voice', 'presenter_pedro', 'pedro_presenter']:
        candidates.append(f'Audio/{name}.{ext}')

# UI candidates
for ext in ['png', 'jpg', 'jpeg', 'webp']:
    for i in range(1, 15):
        candidates.append(f'UI/{i}.{ext}')
    for name in ['Artboard 1', 'Artboard 2', 'Artboard 3', 'Artboard 4', 'UI_1', 'UI_2', 'UI_3', 'UI_4', 'app_1', 'app_2', 'app_3', 'screenshot1', 'screenshot2', 'main', 'dashboard', 'home', 'nos_app']:
        candidates.append(f'UI/{name}.{ext}')
        candidates.append(f'UI/{name.lower()}.{ext}')
        candidates.append(f'UI/{name.replace(" ", "")}.{ext}')
        candidates.append(f'UI/{name.replace(" ", "%20")}.{ext}')

# BTS candidates
for ext in ['mp4', 'mov', 'webm', 'png', 'jpg', 'jpeg']:
    for i in range(1, 15):
        candidates.append(f'BTS/{i}.{ext}')
    for name in ['BTS_1', 'BTS_2', 'BTS_3', 'bts1', 'bts2', 'bts3', 'behind_the_scenes', 'behind_scenes', 'making_of', 'action', 'onset', 'talent', 'onset_1', 'onset_2', 'production']:
        candidates.append(f'BTS/{name}.{ext}')
        candidates.append(f'BTS/{name.lower()}.{ext}')

found = []

def check_url(candidate):
    url = f'{BASE_URL}/{candidate}'
    req = urllib.request.Request(url, method='HEAD')
    try:
        with urllib.request.urlopen(req, timeout=3) as resp:
            if resp.status == 200:
                return candidate, url
    except Exception:
        pass
    return None

print(f"Probing {len(candidates)} candidate assets...")
with concurrent.futures.ThreadPoolExecutor(max_workers=30) as executor:
    results = executor.map(check_url, candidates)
    for res in results:
        if res:
            print(f"FOUND: {res[0]} -> {res[1]}")
            found.append(res)

print(f"Probing completed. Found {len(found)} assets.")
