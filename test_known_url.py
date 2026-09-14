import urllib.request

url = "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/LW_Uploads/2Artboard%202.png"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
}

req = urllib.request.Request(url, headers=headers, method='HEAD')
try:
    with urllib.request.urlopen(req, timeout=5) as resp:
        print("Known URL status:", resp.status)
        print("Headers:", dict(resp.headers))
except Exception as e:
    print("Error with known URL:", e)
