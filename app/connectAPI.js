export async function listVideos() {
    const conection = await fetch("http://localhost:3000/videos");
    const convert = await conection.json();

    return convert;
};

export async function createVideo(titulo, descricao, url, imagem) {
    const connection = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });

    const convertedConnection = await connection.json();
    return convertedConnection;

};
