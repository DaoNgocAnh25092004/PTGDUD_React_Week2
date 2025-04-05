const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'tuan7_upload');
    formData.append('cloud_name', 'dhasegawu');
    formData.append('folder', 'tuan7');

    try {
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/dhasegawu/image/upload',
            {
                method: 'POST',
                body: formData,
            },
        );

        const data = await res.json();
        return data.secure_url;
    } catch (error) {
        console.error('Upload Cloudinary lỗi:', error);
        return null;
    }
};

export default uploadToCloudinary;
