async function listVideos() {
    const conection = await fetch("http://localhost:3000/videos");
    const convert = await conection.json();
    
    return convert;
};

export const connectAPI = {
    listVideos
};