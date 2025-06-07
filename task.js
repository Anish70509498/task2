 function addImage() {
      const url = document.getElementById('imageURL').value.trim();
      if (!url) return;

      const div = document.createElement('div');
      div.className = 'gallery-item';

      const img = document.createElement('img');
      img.src = url;

      const removeBtn = document.createElement('button');
      removeBtn.textContent = '×';
      removeBtn.onclick = () => div.remove();

      div.appendChild(img);
      div.appendChild(removeBtn);
      document.getElementById('gallery').appendChild(div);

      document.getElementById('imageURL').value = '';
    }