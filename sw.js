const CACHE_NAME = 'zhivi-pwa-v1';
const ASSETS = [
  './',
  './index.html',
  './files/favicon-64.png',
  './files/icon-192.png',
  './files/icon-192.webp',
  './files/icon-512.png',
  './files/icon-512.webp',
  './files/Adam-Saunders-Mark-Cousins-An-Age-Of-Innocence-A_Klasha.mp3',
  './files/alex-productions-ascend_Pickuper.mp3',
  './files/alex-productions-lovely_Sonya.mp3',
  './files/An-Epic-Story_Sonya.mp3',
  './files/Carefree_Kevin-MacLeod.mp3',
  './files/Carl-Utbult-Cloud-Flying_Sonya.mp3',
  './files/Clair-Marlo-Cowboy-Trapper_Tanya.mp3',
  './files/Cold_Funk-Funkorama-Kevin_MacLeod.mp3',
  './files/Continue-Life_Kevin-MacLeod_Klasha.mp3',
  './files/Cooking_Show_Polya.mp3',
  './files/Dark_Ages_Klasha.mp3',
  './files/Easy_Lemon_Kevin_MacLeod.mp3',
  './files/Esli_b_garmoshka.mp3',
  './files/Fretless_Kevin_MacLeod_Sonya.mp3',
  './files/garuda1982__autumn-morning-in-pine-forest-with-red-deer-and-crows.mp3',
  './files/giddster__forest-cabin-summer-rain-3.mp3',
  './files/Good-Times_Alex-Productions_Klasha.mp3',
  './files/Happy_and_Joyful_Children–Free_Music_Polya.mp3',
  './files/Happy_Upbeat_Ukulele_Polya.mp3',
  './files/Harmony-of-the-Earth_Alex-Productions_.mp3',
  './files/Harmony-of-the-Earth_Alex-Productions.mp3',
  './files/Heartbreaking_Kevin_MacLeod_Death.mp3',
  './files/Impromptu_in_Blue_Kevin_MacLeod.mp3',
  './files/Journey_Sonya.mp3',
  './files/Love_Story_4_Klasha.mp3',
  './files/Love-Story-part-5_Polya.mp3',
  './files/Luminbird-Secret-Room_Sonya_.mp3',
  './files/Marsh_entuziastov.mp3',
  './files/Matrika-Dark-City_Tanya.mp3',
  './files/Matti-Kankkonen-Harvest-Whim_Sonya.mp3',
  './files/Max-van-Thun-Life-is-Good_Sonya.mp3',
  './files/Michael-Garcia-Sebastian-Barnaby-Robertson-Digital-Dawn_Peschera.mp3',
  './files/Midday_Dance_Kevin_MacLeod_Neutral_End.mp3',
  './files/Monument-Music-Ambition_sonya.mp3',
  './files/Monument-Music-Majestic-Whispers_Sonya.mp3',
  './files/Music_for_Manatees_Kevin_MacLeod.mp3',
  './files/Naama-Zafran-Earth_Tanya.mp3',
  './files/Nature_MaxKoMusic_Klasha.mp3',
  './files/Neozoic-How-You-Roll.mp3',
  './files/Opus_One-Audionautix_Klasha.mp3',
  './files/Pecan-Pie-Master-Of-Illusion.mp3',
  './files/Phillip-John-Gregory-Power-Play.mp3',
  './files/Playful_Mood_Sonya_.mp3',
  './files/Powerful-Emotional-Trailer_Polya.mp3',
  './files/Powerful-Trap_Tanya.mp3',
  './files/Prelude_No.23-Chris_Zabriskie.mp3',
  './files/Prelude_No.6-Chris_Zabriskie.mp3',
  './files/roa-music-innocence-lo-fi-version_Klasha.mp3',
  './files/roa-music-walk-around_Polya.mp3',
  './files/Sovereign_Kevin_MacLeod_end.mp3',
  './files/Sovereign_Quarter_Kevin_MacLeod.mp3',
  './files/Two_Together_Kevin_MacLeod.mp3',
  './files/Ukulele_and_Piano_Polya.mp3',
  './files/Vesenniy_marsh.mp3',
  './files/Vratar.mp3',
  './files/Warm-Memories-Emotional-Inspiring-Piano_Sonya.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response =>
      response || fetch(event.request)
    )
  );
});
