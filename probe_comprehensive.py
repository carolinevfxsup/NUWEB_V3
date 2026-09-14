import urllib.request
import urllib.parse
import urllib.error

PROJECT_ID = 'muncxkojigqqaakscbjs'
BUCKET = 'Src'
BASE_URL = f'https://{PROJECT_ID}.supabase.co/storage/v1/object/public/{BUCKET}'

# Audio file name variations
audio_prefixes = ['assets/NOS/Audio', 'NOS/Audio']
audio_names = [
    'Pedro', 'pedro', 'Pedro_audio', 'pedro_audio', 'Pedro_voice', 'pedro_voice',
    'Pedro_presenter', 'pedro_presenter', 'presenter_pedro', 'presenter', 'audio',
    'Pedro_voice_presenter', 'pedro_voice_presenter', 'Pedro_Voice_Presenter',
    'PedroVoice', 'pedrovoice', 'PedroAudio', 'pedroaudio', 'PedroPresenter', 'pedropresenter',
    'pedro_presentador', 'Pedro_presentador', 'Pedro_voz', 'pedro_voz'
]
audio_extensions = ['mp3', 'wav', 'm4a', 'ogg', 'aac']

# UI file name variations
ui_prefixes = ['assets/NOS/UI', 'NOS/UI']
ui_names = [
    'Artboard 1', 'Artboard 2', 'Artboard 3', 'Artboard 4',
    '2Artboard 1', '2Artboard 2', '2Artboard 3', '2Artboard 4',
    '1', '2', '3', '4', '5', '6',
    'app_screen_1', 'app_screen_2', 'app_screen_3',
    'app_1', 'app_2', 'app_3', 'UI_1', 'UI_2', 'UI_3',
    'nos_app_1', 'nos_app_2', 'nos_app_3',
    'app-screen-1', 'app-screen-2', 'app-screen-3',
    'Artboard1', 'Artboard2', 'Artboard3', 'Artboard4'
]
ui_extensions = ['png', 'jpg', 'jpeg', 'webp']

# BTS file name variations
bts_prefixes = ['assets/NOS/BTS', 'NOS/BTS']
bts_names = [
    '1', '2', '3', '4', 'bts1', 'bts2', 'bts3', 'BTS_1', 'BTS_2', 'BTS_3',
    'behind_the_scenes', 'behind_the_scenes_1', 'behind_scenes_1', 'onset_1', 'onset_2',
    'making_of', 'making_of_1', 'video_1', 'video_2', 'video_3', 'nos_bts_1', 'nos_bts_2'
]
bts_extensions = ['mp4', 'mov', 'webm', 'png', 'jpg', 'jpeg']

candidates = []

# Generate Audio URLs
for prefix in audio_prefixes:
    for name in audio_names:
        for ext in audio_extensions:
            candidates.append(f"{prefix}/{name}.{ext}")

# Generate UI URLs
for prefix in ui_prefixes:
    for name in ui_names:
        for ext in ui_extensions:
            candidates.append(f"{prefix}/{name}.{ext}")

# Generate BTS URLs
for prefix in bts_prefixes:
    for name in bts_names:
        for ext in bts_extensions:
            candidates.append(f"{prefix}/{name}.{ext}")

print(f"Testing {len(candidates)} candidates...")

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
}

found = 0
for idx, c in enumerate(candidates):
    # Properly encode spaces and characters
    parts = c.split('/')
    encoded_parts = [urllib.parse.quote(p) for p in parts]
    url = f"{BASE_URL}/{'/'.join(encoded_parts)}"
    
    req = urllib.request.Request(url, headers=headers, method='HEAD')
    try:
        with urllib.request.urlopen(req, timeout=1.5) as resp:
            if resp.status == 200:
                print(f"FOUND: {c} -> {url}")
                found += 1
                if found >= 15: # Stop after finding a good set to save time
                    break
    except Exception:
        pass

print(f"Done. Found {found} assets.")
