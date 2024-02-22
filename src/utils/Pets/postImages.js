export const usePostImages = () => {
  const postImages = async (event, setImages) => {
    const imageFiles = event.target.files;
    const imageUrls = [];

    for (const imageFile of imageFiles) {
      if (!imageFile.type.startsWith("image/jpeg")) {
        alert("Solo se permiten archivos .jpg o .jpeg");
        event.target.value = "";
        return;
      }

      const formData = new FormData();
      formData.append("image", imageFile);

      const response = await fetch("https://api.imgbb.com/1/upload?key=1771587f9cbd54a36138355092a48a4a", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const json = await response.json();
        imageUrls.push(json.data.url);
      } else {
        console.error("Error al subir la imagen:", response.statusText);
      }
    }

    setImages(imageUrls);
  };

  return postImages;
};