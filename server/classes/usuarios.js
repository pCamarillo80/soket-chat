class Usuario {

    constructor() {
        this.personas = [];
    }

    // Agrega una persona cuando entra al chat y regresa todas las personas
    agregarPersona(id, nombre, sala) {

        let persona = { id, nombre, sala };

        this.personas.push(persona);

        return this.personas;

    }

    //Busca en el arreglo de personas a una persona por su id
    getPersona(id) {
        let persona = this.personas.filter(persona => persona.id === id)[0];

        return persona;

    }

    //obtiene todas las personas
    getPersonas() {
        return this.personas;
    }


    getPersonasPorSalas(sala) {
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);

        return personasEnSala;

    }

    //Elimina una persona en la lista de personas
    borrarPersona(id) {
        this.personaBorrada = this.getPersona(id);
        this.personas = this.personas.filter(persona => persona.id != id);

        return this.personaBorrada;
    }


}

module.exports = {
    Usuario

};