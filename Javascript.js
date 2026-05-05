document.addEventListener('DOMContentLoaded', () => {
  const songInfoPanel = document.getElementById('songInfoPanel');
  const songInfoTitle = document.getElementById('songInfoTitle');
  const songInfoArtist = document.getElementById('songInfoArtist');
  const songInfoComment = document.getElementById('songInfoComment');
  const songInfoClose = document.getElementById('songInfoClose');

  const artworkInfoPanel = document.getElementById('artworkInfoPanel');
  const artworkInfoTitle = document.getElementById('artworkInfoTitle');
  const artworkInfoArtist = document.getElementById('artworkInfoArtist');
  const artworkInfoComment = document.getElementById('artworkInfoComment');
  const artworkInfoClose = document.getElementById('artworkInfoClose');

  const campaignInfoPanel = document.getElementById('campaignInfoPanel');
  const campaignInfoTitle = document.getElementById('campaignInfoTitle');
  const campaignInfoArtist = document.getElementById('campaignInfoArtist');
  const campaignInfoComment = document.getElementById('campaignInfoComment');
  const campaignInfoClose = document.getElementById('campaignInfoClose');

  function showSongInfo(title, artist, comment) {
    songInfoTitle.textContent = title;
    songInfoArtist.textContent = artist;
    songInfoComment.textContent = comment || 'Add comment...';
    songInfoPanel.classList.add('active');
  }

  function hideSongInfo() {
    songInfoPanel.classList.remove('active');
  }

  function showArtworkInfo(title, artist, comment) {
    artworkInfoTitle.textContent = title;
    artworkInfoArtist.textContent = artist;
    artworkInfoComment.textContent = comment || 'Add description...';
    artworkInfoPanel.classList.add('active');
  }

  function hideArtworkInfo() {
    artworkInfoPanel.classList.remove('active');
  }

  function showCampaignInfo(title, artist, comment) {
    campaignInfoTitle.textContent = title;
    campaignInfoArtist.textContent = artist;
    campaignInfoComment.textContent = comment || 'Add description...';
    campaignInfoPanel.classList.add('active');
  }

  function hideCampaignInfo() {
    campaignInfoPanel.classList.remove('active');
  }

  if (songInfoClose) {
    songInfoClose.addEventListener('click', hideSongInfo);
  }

  if (artworkInfoClose) {
    artworkInfoClose.addEventListener('click', hideArtworkInfo);
  }

  if (campaignInfoClose) {
    campaignInfoClose.addEventListener('click', hideCampaignInfo);
  }

  document.addEventListener('click', (e) => {
    if (songInfoPanel && !songInfoPanel.contains(e.target) && !e.target.closest('.song')) {
      hideSongInfo();
    }
    if (artworkInfoPanel && !artworkInfoPanel.contains(e.target) && !e.target.closest('.gallery-item')) {
      hideArtworkInfo();
    }
    if (campaignInfoPanel && !campaignInfoPanel.contains(e.target) && !e.target.closest('.campaign-card')) {
      hideCampaignInfo();
    }
  });

  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const title = item.dataset.title;
      const artist = item.dataset.artist;
      const comment = item.dataset.comment;
      showArtworkInfo(title, artist, comment);
    });
  });

  const campaignCards = document.querySelectorAll('.campaign-card');
  campaignCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      const title = card.dataset.title;
      const artist = card.dataset.artist;
      const comment = card.dataset.comment;
      showCampaignInfo(title, artist, comment);
    });
  });

  const track = document.getElementById('galleryTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('dots');

  if (track) {
    const items = track.querySelectorAll('.gallery-item');
    const total = items.length;
    let current = 0;

    for (let i = 0; i < total; i++) {
      const dot = document.createElement('div');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('role', 'button');
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }

    function goTo(index) {
      current = index;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      document.querySelectorAll('.dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
    }

    prevBtn.addEventListener('click', () => goTo((current - 1 + total) % total));
    nextBtn.addEventListener('click', () => goTo((current + 1) % total));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        goTo((current - 1 + total) % total);
      } else if (e.key === 'ArrowRight') {
        goTo((current + 1) % total);
      }
    });

    setInterval(() => goTo((current + 1) % total), 5000);
  }

  const songs = document.querySelectorAll('.song');
  const player = document.getElementById('player');
  const playBtn = document.getElementById('playBtn');
  const progressFill = document.getElementById('progressFill');
  const timeEl = document.getElementById('time');
  const nowPlaying = document.getElementById('nowPlaying');
  const nowPlayingTitle = document.getElementById('nowPlayingTitle');
  const nowPlayingMembers = document.getElementById('nowPlayingMembers');

  let audio = null;

  if (songs.length > 0 && player) {
    songs.forEach(song => {
      song.addEventListener('click', (e) => {
        e.stopPropagation();
        const src = song.dataset.src;
        if (!src || src.includes('YOUR_FILE_ID')) {
          alert('Add a Google Drive audio file ID to data-src');
          return;
        }

        songs.forEach(s => s.classList.remove('playing'));
        song.classList.add('playing');

        const title = song.querySelector('.song-title').textContent;
        const members = song.querySelector('.song-members').textContent;
        const comment = song.dataset.comment || '';

        nowPlayingTitle.textContent = title;
        nowPlayingMembers.textContent = members;
        nowPlaying.classList.add('active');

        showSongInfo(title, members, comment);

        if (audio) audio.pause();

        audio = new Audio(src);
        player.classList.add('active');
        playBtn.innerHTML = '&#10074;&#10074;';

        audio.addEventListener('loadedmetadata', () => {
          updateTime();
        });

        audio.addEventListener('ended', () => {
          playBtn.innerHTML = '&#9658;';
          progressFill.style.width = '0%';
        });

        audio.addEventListener('timeupdate', updateTime);

        audio.play();
      });
    });

    playBtn.addEventListener('click', () => {
      if (!audio) return;
      if (audio.paused) {
        audio.play();
        playBtn.innerHTML = '&#10074;&#10074;';
      } else {
        audio.pause();
        playBtn.innerHTML = '&#9658;';
      }
    });

    const progressBar = document.querySelector('.player .progress');
    if (progressBar) {
      progressBar.addEventListener('click', (e) => {
        if (!audio) return;
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
      });
    }

    function updateTime() {
      if (!audio || isNaN(audio.duration)) return;
      const current = formatTime(audio.currentTime);
      const duration = formatTime(audio.duration || 0);
      timeEl.textContent = current + ' / ' + duration;
      progressFill.style.width = (audio.currentTime / audio.duration * 100) + '%';
    }

    function formatTime(s) {
      if (isNaN(s)) return '0:00';
      const m = Math.floor(s / 60);
      const sec = Math.floor(s % 60);
      return m + ':' + sec.toString().padStart(2, '0');
    }
  }
});