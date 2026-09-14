import urllib.request
import urllib.error

PROJECT_ID = 'muncxkojigqqaakscbjs'
BUCKET = 'Src'
BASE_URL = f'https://{PROJECT_ID}.supabase.co/storage/v1/object/public/{BUCKET}'

test_urls = [
    f"{BASE_URL}/assets/NOS/Audio/Pedro.mp3",
    f"{BASE_URL}/assets/LW_Uploads/2Artboard%202.png", # Known working to compare
]

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
}

for url in test_urls:
    print(f"Testing URL: {url}")
    req = urllib.request.Request(url, headers=headers, method='GET')
    try:
        with urllib.request.urlopen(req, timeout=5) as resp:
            print(f" -> SUCCESS: {resp.status}")
    except urllib.error.HTTPError as e:
        print(f" -> HTTP ERROR: {e.code} ({e.reason})")
        body = e.read().decode('utf-8', errors='ignore')
        print(f"    Body: {body}")
    except Exception as e:
        print(f" -> OTHER ERROR: {e}")
