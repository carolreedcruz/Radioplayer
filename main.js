fetch('http://api.sr.se/api/v2/channels?format=json&size=100')
      .then(response => response.json())
      .then(data => {
        // Extracting channel information
        const channels = data.channels;

        // Rendering the channels on the page
        const channelsList = document.getElementById('channelsList');

        channels.forEach(channel => {
          const { name, image, color, liveaudio } = channel;

          // Creating elements for each channel
          const channelDiv = document.createElement('div');
          channelDiv.classList.add('channel');
          const playerDiv = document.createElement('div');
          playerDiv.classList.add('player');
          const wallDiv = document.createElement('div');
          wallDiv.classList.add('wall');


          const channelImage = document.createElement('img');
          channelImage.src = image;
          channelImage.alt = `${name} logo`;

          const channelName = document.createElement('h2');
          channelName.textContent = name;

          // Creating a playable audio element
          const audioPlayer = document.createElement('audio');
          audioPlayer.controls = true;
          audioPlayer.src = liveaudio.url;

          // Styling the channel div based on color
          channelDiv.style.backgroundColor = `#${color}`;

          // Appending elements to the channel div
          channelDiv.appendChild(channelImage);
          channelDiv.appendChild(wallDiv);
          playerDiv.appendChild(channelName);
          playerDiv.appendChild(audioPlayer);
          channelDiv.appendChild(playerDiv);

          // Appending the channel div to the channels list
          channelsList.appendChild(channelDiv);
        });
      })
      .catch(error => console.log('Error fetching data:', error));