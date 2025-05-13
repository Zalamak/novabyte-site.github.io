 const albums = {
    1: {
        cover: 'Albums/emptiness2.jpg',
        name: 'Emptiness',
        info: '2017 yılında çıkan Techno türünde bir albüm.'
    },

    2: {
        cover: 'Albums/cast away.jpg',
        name: 'Cast Away',
        info: '2020 yapımı, synthwave etkileri taşıyan bir albüm.'
    },

    3: {
        cover: 'Albums/everyday-life.jpg',
        name: 'Everyday Life',
        info: 'Doğayla iç içe ambient bir yolculuk, 2023.'
    },

    4: {
        cover: 'Albums/saw monarch.jpg',
        name: 'Saw Monarch',
        info: 'bilgi'

    },

    5: {
        cover: 'Albums/firsties.jpg',
        name: 'Everyday Life',
        info: 'bilgi'
    }
  }

  function showAlbum(id) {
    const data = albums[id];
    const infoDiv = document.querySelector('.album-info');

    // Fade-out önce
    infoDiv.classList.remove('show');

    setTimeout(() => {
      // İçeriği değiştir
      document.getElementById('album-cover').src = data.cover;
      document.getElementById('album-text').innerHTML = `
        <h2>${data.name}</h2>
        <p>${data.info}</p>
      `;
      // Fade-in sonra
      infoDiv.classList.add('show');
    }, 200); // Küçük bir bekleme efekti için
  }
