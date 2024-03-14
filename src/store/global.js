
const state = {
    matricula: null,
    estadoRegistro: '',
    estadoAbogado: '',
    fechaCredencialVencimiento: ''
  }
  
  const mutations = {
    SET_PARAMS(state, { matricula, estadoRegistro, estadoAbogado, fechaCredencialVencimiento }) {
      state.matricula = matricula;
      state.estadoRegistro = estadoRegistro;
      state.estadoAbogado = estadoAbogado;
      state.fechaCredencialVencimiento = fechaCredencialVencimiento;
    }
  }
  
  const actions = {
    // Aquí podrías definir tus acciones si las necesitas
  }
  
  const getters = {
    getMatricula: state => state.matricula,
    getEstadoRegistro: state => state.estadoRegistro,
    getEstadoAbogado: state => state.estadoAbogado,
    getFechaCredencialVencimiento: state => state.fechaCredencialVencimiento
  }
  
  export default {
    namespaced: true, 
    state,
    mutations,
    actions,
    getters
  }
  