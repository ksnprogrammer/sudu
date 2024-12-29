function loadImages() {
    const imageContainer = document.querySelector('#gallery-grid');
    
    fetch('assets/')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const files = Array.from(doc.querySelectorAll('a'))
                .map(a => a.href)
                .filter(href => href.match(/\.(jpg|jpeg|png|gif)$/i))
                .filter(href => !href.includes('IMG_20241227_124410.jpg')); // Exclude the unwanted image

            files.forEach((file, index) => {
                const div = document.createElement('div');
                div.className = 'transform transition-all hover:-translate-y-2';
                
                const img = document.createElement('img');
                img.src = file;
                img.alt = `Gallery Image ${index + 1}`;
                img.className = 'w-full rounded-lg shadow-lg';
                
                div.appendChild(img);
                imageContainer.appendChild(div);
            });
        })
        .catch(error => console.error('Error loading images:', error));
}
