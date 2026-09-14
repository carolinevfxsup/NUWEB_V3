import urllib.request
import urllib.parse

PROJECT_ID = 'muncxkojigqqaakscbjs'
BUCKET = 'Src'
BASE_URL = f'https://{PROJECT_ID}.supabase.co/storage/v1/object/public/{BUCKET}'

# Create candidates
candidates = [
    # UI candidates
    'assets/NOS/UI/Artboard 1.png',
    'assets/NOS/UI/Artboard 2.png',
    'assets/NOS/UI/Artboard 3.png',
    'assets/NOS/UI/2Artboard 1.png',
    'assets/NOS/UI/2Artboard 2.png',
    'assets/NOS/UI/2Artboard 3.png',
    'assets/NOS/UI/2Artboard 4.png',
    'assets/NOS/UI/screenshot1.png',
    'assets/NOS/UI/screenshot2.png',
    
    # Audio candidates
    'assets/NOS/Audio/Pedro.mp3',
    'assets/NOS/Audio/pedro.mp3',
    'assets/NOS/Audio/Pedro.wav',
    'assets/NOS/Audio/pedro.wav',
    
    # BTS candidates
    'assets/NOS/BTS/1.mp4',
    'assets/NOS/BTS/2.mp4',
    'assets/NOS/BTS/3.mp4',
    'assets/NOS/BTS/bts1.mp4',
    'assets/NOS/BTS/bts2.mp4',
    'assets/NOS/BTS/bts3.mp4',
]

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
}

for c in candidates:
    # URL encode the candidate path correctly
    parts = c.split('/')
    encoded_parts = [urllib.parse.quote(p) for p in parts]
    url = f"{BASE_URL}/{'/'.join(encoded_parts)}"
    
    req = urllib.request.Request(url, headers=headers, method='HEAD')
    try:
        with urllib.request.urlopen(req, timeout=3) as resp:
            if resp.status == 200:
                print(f"FOUND: {c} -> {url}")
    except Exception as e:
        # print(f"Not found: {c} -> {e}")
        pass
