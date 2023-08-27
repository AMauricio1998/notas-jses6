const obtenerNombre = info => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guardarEmail = info => ({
    agregarEmail(email) {
        console.log(`Guardar email en: ${info.nombre}`);
        info.email = email;
    }
});

const obtenerEmail = info => ({
    mostraEmail() {
        console.log(`Correo: ${info.email}`);
    }
});

const obtenerEmpresa = info => ({
    mostrarEmpresa() {
        console.log(`Empresa: ${info.empresa}`);
    }
});

const obtenerPuesto = info => ({
    mostrarPuesto() {
        console.log(`Puesto: ${info.puesto}`);
    }
});

function Cliente(nombre, email, empresa) {
    let info = {
        nombre, 
        email, 
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    )
}

function Empleado(nombre, email, puesto) {
    let info = {
        nombre, 
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}

const cliente = Cliente('Mauricio' , null, 'Amazon');
cliente.mostrarNombre();
cliente.agregarEmail(`cliente@gmail.com`);
cliente.mostraEmail();
cliente.mostrarEmpresa();

const empleado = Empleado('Pedro' , null, 'Programador');
empleado.mostrarNombre();
empleado.agregarEmail(`empleado@gmail.com`);
empleado.mostraEmail();
empleado.mostrarPuesto();
