
    const xhttp = new XMLHttpRequest()
    xhttp.open('GET','api/api.json',true)
    xhttp.send()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
           // console.log(this.responseText)
           let datos = JSON.parse(this.responseText)
           //console.log(datos)
           //capturamos el div desde el html para injectar el html con datos del json
           let res = document.querySelector('#res')
           //vaciamos el div id res para que no se dupliquen los productos 
           res.innerHTML = ''
           //visualizar los articulos en el html
           for(let item of datos){
               res.innerHTML += `
                    <div class="card m-2" style="width: 18rem;">
                    <div class="card-header">
                    <h6>${item.nombre}</h6>
                    </div>
                         <img src="${item.imagen}" class="card-img-top" alt=${item.nombre}>
                            <div class="card-body">
                             <p class="card-text">${item.descripcion}</p>
                             <h3><span class="badge badge-info">${item.precio}</span></h3>
                             <button class="btn btn-success btn-block" onClick="agregar(${item.id},'${item.nombre}',${item.precio})">Añadir al carro</button>
                            </div>
                    </div>
               `
           }
        }
    }

    if (typeof(Storage) !== "undefined") {
       console.log('local storage disponible')
    } else {
       console.log('no soporta localstorage')
    }

    //agregar al carro de compras 
    function agregar(id,name,precio){
        Swal.fire({
            type: 'success',
            title: 'Agregaste ' + name,
            showConfirmButton: false,
            timer: 1500
          })
     
    }