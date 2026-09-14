import urllib.request
import json
import os

supabase_url = os.environ.get('VITE_SUPABASE_URL')
supabase_key = os.environ.get('VITE_SUPABASE_ANON_KEY')

if not supabase_url or not supabase_key:
    print("Missing environment variables")
    exit(1)

url = f"{supabase_url}/rest/v1/"
headers = {
    "apikey": supabase_key,
    "Authorization": f"Bearer {supabase_key}"
}

req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req) as resp:
        spec = json.loads(resp.read().decode('utf-8'))
        print("API Name:", spec.get('info', {}).get('title'))
        print("Available paths:")
        for path in spec.get('paths', {}).keys():
            print(f" - {path}")
except Exception as e:
    print(f"Error getting API spec: {e}")
