self.onmessage = function(e) {
    const { dados, campo, valor } = e.data;
    const resultados = [];

    dados.forEach(row => {
        if (row[0] === campo && row[1].includes(valor)) {
            resultados.push(row);
        }
    });

    self.postMessage(resultados);
};
