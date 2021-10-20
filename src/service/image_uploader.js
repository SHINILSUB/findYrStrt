class ImageUploader {
    async upload(file){
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'pdzaoz');
        const res = await fetch(
            'url',{
                method: 'POST',
                body: data,
            }
        );return await res.json();
    
    }
}
export default ImageUploader