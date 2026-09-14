import urllib.request
import json
import os

supabase_url = os.environ.get('VITE_SUPABASE_URL')
supabase_key = os.environ.get('VITE_SUPABASE_ANON_KEY')

if not supabase_url or not supabase_key:
    print("Missing environment variables")
    exit(1)

# List buckets
url = f"{supabase_url}/storage/v1/bucket"
headers = {
    "apikey": supabase_key,
    "Authorization": f"Bearer {supabase_key}"
}

req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as resp:
        buckets = json.loads(resp.read().decode('utf-8'))
        print("Buckets found:")
        for b in buckets:
            print(f" - {b.get('id')} (public: {b.get('public')})")
except Exception as e:
    print(f"Error listing buckets: {e}")
