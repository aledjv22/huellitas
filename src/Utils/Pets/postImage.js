export const usePostImage = () => {
  const postImage = async (event, setImageUrl) => {
    const imageFile = event.target.files[0];

    if (!imageFile.type.startsWith('image/jpeg')) {
      alert('Solo se permiten archivos .jpg o .jpeg');
      event.target.value = '';
      return;
    }

    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await fetch('https://api.imgbb.com/1/upload?key=1771587f9cbd54a36138355092a48a4a', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const json = await response.json();
      const imageUrl = json.data.url;
      setImageUrl(imageUrl);
    } else {
      console.error('Error al subir la imagen:', response.statusText);
    }
  };

  return postImage;
};