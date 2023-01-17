const parser = require("iptv-playlist-parser");
const playlist = require("./lists/2023list.m3u");

const playlist2 = `#EXTM3U x-tvg-url="http://example.com/epg.xml.gz
#EXTINF:-1 tvg-id="" tvg-name="The Good Doctor: O Bom Doutor S01 E01" tvg-logo="http://image.tmdb.org/t/p/w600_and_h900_bestv2/eeNYnyVdAGdBzVDCIspxlFHNAtb.jpg" group-title="Series | Globoplay",The Good Doctor: O Bom Doutor S01 E01 http://tbsrv.me:8880/series/44021759161/7095381/225778.mp4
#EXTINF:-1 tvg-id="" tvg-name="The Good Doctor: O Bom Doutor S01 E02" tvg-logo="http://image.tmdb.org/t/p/w600_and_h900_bestv2/1g3CuVBgFOOH12Sth6UjLInF2CK.jpg" group-title="Series | Globoplay",The Good Doctor: O Bom Doutor S01 E02 http://tbsrv.me:8880/series/44021759161/7095381/225779.mp4`

// const result = parser.parse(playlist);

console.log(playlist);
// console.log(result);
