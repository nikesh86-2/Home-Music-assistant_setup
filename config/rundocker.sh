docker run -d \
  --name home-assistant \
  --restart=unless-stopped \
  -e TZ=Europe/London \
  -v .:/config \
  -v /srv/homeasistant/duckdns/dehydrated:/srv/homeasistant/duckdns/dehydrated \
  --network=host \
  ghcr.io/home-assistant/home-assistant:latest
