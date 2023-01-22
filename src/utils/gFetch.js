// Promise -> sumilación de api 

// pendiente - hasta que nos devuelve la plata
//  rechazada - Reject - no  te puedo devolver 
// completada - Fullfilled - devolvió la plata

let productos = [
    { id: '1' ,categoria: 'cerveza', name: "Heineken 1",   price: 37, foto:'https://cdn.shopify.com/s/files/1/0556/6971/9230/products/MLA920769128_1512x.png?v=1667785525' },
    { id: '2' ,categoria: 'cerveza', name: "Imperial 2", price: 27, foto:'https://cdn.shopify.com/s/files/1/0556/6971/9230/products/MLA920767680_1512x.png?v=1667785562' },
    { id: '3' ,categoria: 'cerveza', name: "Heineken 3",    price: 40, foto:'https://cdn.shopify.com/s/files/1/0556/6971/9230/products/MLA920767708_1080x.png?v=1622092070' },
    { id: '4' ,categoria: 'vino', name: "Vino 1", price: 55, foto:'https://cdn.shopify.com/s/files/1/0556/6971/9230/products/11_00b5730b-92ea-468e-84a4-17aad70d3686_720x.jpg?v=1664984779' },
    { id: '5' ,categoria: 'vino', name: "Vino 2", price: 11, foto:'https://cdn.shopify.com/s/files/1/0556/6971/9230/products/11_00b5730b-92ea-468e-84a4-17aad70d3686_720x.jpg?v=1664984779' },
    { id: '6' ,categoria: 'vino', name: "Vino 3", price: 19, foto:'https://cdn.shopify.com/s/files/1/0556/6971/9230/products/11_00b5730b-92ea-468e-84a4-17aad70d3686_720x.jpg?v=1664984779' },
    { id: '7' ,categoria: 'vino', name: "Vino 4", price: 2, foto:'https://cdn.shopify.com/s/files/1/0556/6971/9230/products/11_00b5730b-92ea-468e-84a4-17aad70d3686_720x.jpg?v=1664984779' }  
  ] 


export const gFetch = (id)=>{
    return new Promise(( resolve, reject )=>{
       
        // reject('REchazado')
        setTimeout(()=>{
            // acciones
            resolve(id ? productos.find(prod=> prod.id === id):productos)  
        }, 1000)
    })
} 



