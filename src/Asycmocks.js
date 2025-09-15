const misProductos = [
    {id: "1", nombre: "MOCHILA ANTIRROBO", precio: 50000, img: "public/MOCHILAS/ANTIRROBOMOCHI_202403022047_resized_334x480.jpeg", idCat: "mochilas"},
    {id: "2", nombre: "MATERO ARMENIA ", precio: 50000, img: "public/MOCHILAS/ARMENIAVERDE._202403141429_resized_360x480.jpeg", idCat: "mochilas"},
    {id: "3", nombre: "MCHILA ASTURIAS", precio: 50000, img: "public/MOCHILAS/ASTURIAS_202403041305_resized_360x480.jpeg", idCat: "mochilas"},
    {id: "4", nombre: "MATERO ECUADOR ", precio: 50000, img: "public/MOCHILAS/ECUADORGALLETITA1_202403131705_resized_360x480.jpeg", idCat: "mochilas"},
    {id: "5", nombre: "MOCHILA FRANCISCO", precio: 50000, img: "public/MOCHILAS/FRANCISCOBLACK_202402291446_resized_360x480.jpeg", idCat: "mochilas"},
    {id: "6", nombre: "MATERO", precio: 50000, img: "public/MOCHILAS/MATEROGALAXYPASTEL_202303201800_resized_323x480.jpg", idCat: "mochilas"},
    {id: "7", nombre: "BANDOLERA ADA IMPERMEABLE", precio: 30000, img: "public/BANDOLERAS/BANDOLERA ADA IMPERMEABLE.jpeg", idCat: "bandoleras"},
    {id: "8", nombre: "BALDOLERA ALBERTINA", precio: 30000, img: "public/BANDOLERAS/BANDOLERA ALBERTINA.jpg", idCat: "bandoleras"},
    {id: "9", nombre: "BALDOLERA ANNIE", precio: 30000, img: "public/BANDOLERAS/BANDOLERA ANNIE.jpg", idCat: "bandoleras"},
    {id: "10", nombre: "BANDOLERA COURE", precio: 30000, img: "public/BANDOLERAS/BANDOLERA COURE.jpeg", idCat: "bandoleras"},
    {id: "11", nombre: "BANDOLERA ELSA", precio: 30000, img: "public/BANDOLERAS/BANDOLERA ELSA.jpeg", idCat: "bandoleras"},
    {id: "12", nombre: "BANDOLERA KARIN", precio: 30000, img: "public/BANDOLERAS/BANDOLERA KARINA.jpeg", idCat: "bandoleras"},
    {id: "13", nombre: "BOLSO FERNANDA", precio: 30000, img: "public/BOLSOS/BOLSO FERNANDA XL.jpeg", idCat: "bolsos"},
    {id: "14", nombre: "BOLSO HAMBURGO", precio: 30000, img: "public/BOLSOS/BOLSO HAMBURGO.jpeg", idCat: "bolsos"},
    {id: "15", nombre: "BOLSO MOTEVIDEO", precio: 30000, img: "public/BOLSOS/BOLSO MONTEVIDEO.jpeg", idCat: "bolsos"},
    {id: "16", nombre: "BOLSO MYRIAM", precio: 30000, img: "public/BOLSOS/BOLSO MYRIAM.jpeg", idCat: "bolsos"},
    {id: "17", nombre: "BOLSO VIETNAN", precio: 30000, img: "public/BOLSOS/BOLSO VIETNAM.jpeg", idCat: "bolsos"},
    {id: "18", nombre: "BOLSO MAY", precio: 30000, img: "public/BOLSOS/CARTERA MAY.jpeg", idCat: "bolsos"},
]

export const getProductos = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        },100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            const producto = misProductos.find(item => item.id === id)
            resolve(producto)
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria)
            resolve(productosCategoria)
        }, 100)
    })
}