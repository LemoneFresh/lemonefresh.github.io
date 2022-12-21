
// Get all the images in the directory
    import { readdirSync } from "fs";
    const photosDir = "images";
    const files = readdirSync(photosDir);
    const imageFiles = files.filter(file => file.endsWith(".jpg"));
    const images = imageFiles.map(file => `${photosDir}/${file}`);

    // Create an img element for each image
    const gallery = document.getElementById("gallery");
    for (const image of images) {
      const img = document.createElement("img");
      img.src = image;
      gallery.appendChild(img);
    }