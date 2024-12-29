// Optional: Add this if you want live updates
const fs = require('fs');

fs.watch('assets/', (eventType, filename) => {
    if (filename) {
        loadImages();
    }
});