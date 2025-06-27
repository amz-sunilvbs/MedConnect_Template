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

export NOVA_ACT_API_KEY=5a0992dc-da7f-420e-911a-cc7c5b23a9ab
#python agent.py download-files
#python agent.py dev
python vision.py dev
# python novaActSample.py