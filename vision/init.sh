python3 -m venv myvenv
source myvenv/bin/activate
export SSL_CERT_FILE=$(python3 -m certifi)
pip install \
  "livekit-agents[deepgram,openai,cartesia,silero,turn-detector,aws,bey,bithuman,speechmatics,tavus]~=1.1" \
  "livekit-plugins-noise-cancellation~=0.2" \
  "python-dotenv" \
  "mcp" \
  "aiohttp" \
  "nova-act"

python vision.py dev
