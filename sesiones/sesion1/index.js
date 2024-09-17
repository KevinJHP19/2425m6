console.log('sesion 1!!!')


    // COMENTARIOS
    /*Comentarios diferentes (Puedes usar ctrol+k+c*/

    //variables
    var nombre = "Pepe"
    let apellido = 'Potamo'
    const dominio = "@fpllefia.com"
    const nombreCompleto = apellido.toLowerCase()+nombre.toLocaleLowerCase()
    const email = nombreCompleto+dominio
    console.log('nombreCompleto: ' , nombreCompleto);
    console.log('email: ' , email);

    // Concatenar textos con variables
    const email2 = "otroemail" +  dominio
    console.log('email2: ' ,email2);
    // utilizando backsticks 
    const email3 = `otroemail${dominio}`
    console.log('email3: ' , email3);

    // Ejemplo de uso de backsticks con codigo html

    const micodigohtml = `
        <div>
            <p>Hola</p>
        </div>

    `
    console.log(micodigohtml);

    