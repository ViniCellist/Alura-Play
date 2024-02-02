export async function listVideosEx() {
    const connection = await fetch("http://localhost:3000/videos");
    const convert = await connection.json();
    return convert;
};

export async function createVideoEx(titulo, descricao, url, imagem) {
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

    if (!connection.ok) {
        throw new Erros("Não foi possível enviar o vídeo");
    }

    const convertedConnection = await connection.json();
    return convertedConnection;

};

export async function searchVideoEx(term) {
    const connection = await fetch(`http://localhost:3000/videos?q=${term}`);
    const convert = await connection.json();
    return convert;
};