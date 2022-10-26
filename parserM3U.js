const parser = require("iptv-playlist-parser");
const playlist = `#EXTM3U x-tvg-url="http://example.com/epg.xml.gz"
#EXTINF:-1 tvg-id="cnn.us" tvg-name="CNN" tvg-url="http://195.154.221.171/epg/guide.xml.gz" timeshift="3" catchup="shift" catchup-days="3" catchup-source="https://m3u-server/hls-apple-s4-c494-abcdef.m3u8?utc=325234234&lutc=3123125324" tvg-logo="http://example.com/logo.png" group-title="News",CNN (US)
#EXTGRP:News
#EXTVLCOPT:http-referrer=http://example.com/
#EXTVLCOPT:http-user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5)
./list/series.m3u`;

const playlist2 = `#EXTM3U x-tvg-url="http://example.com/epg.xml.gz
#EXTINF:-1 tvg-id="" tvg-name="The Good Doctor: O Bom Doutor S01 E01" tvg-logo="http://image.tmdb.org/t/p/w600_and_h900_bestv2/eeNYnyVdAGdBzVDCIspxlFHNAtb.jpg" group-title="Series | Globoplay",The Good Doctor: O Bom Doutor S01 E01 http://tbsrv.me:8880/series/44021759161/7095381/225778.mp4
#EXTINF:-1 tvg-id="" tvg-name="The Good Doctor: O Bom Doutor S01 E02" tvg-logo="http://image.tmdb.org/t/p/w600_and_h900_bestv2/1g3CuVBgFOOH12Sth6UjLInF2CK.jpg" group-title="Series | Globoplay",The Good Doctor: O Bom Doutor S01 E02 http://tbsrv.me:8880/series/44021759161/7095381/225779.mp4`

const result = parser.parse(playlist2);

console.log(playlist2);
console.log(result);
