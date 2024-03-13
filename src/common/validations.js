'use strict'

export default {

    minimoSeis: value => value.length >= 6 || 'Debe contener al menos 6 caracteres.',
    minimoOcho: value => value.length >= 8 || 'Debe contener al menos 8 caracteres.',
    alfanumerico: value => /\d/.test(value) && /[a-zA-Z]/.test(value) || 'Debe contener letras y numeros.',
    requerido: value => !!value || 'El campo es requerido.'
    
    
}