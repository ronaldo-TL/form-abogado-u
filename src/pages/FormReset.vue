<template>
  <div class="q-pa-md" style="max-width: 500px; margin-left: 10px">
    <q-btn label="INGRESAR" color="primary" @click="fixed = true" />
    
    <q-dialog v-model="fixed">
      <q-card>
        <q-card-section>
          <div class="text-h6">Actualizar matricula</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-width: 70vh; width: 450px" class="scroll">
          <q-dialog v-model="loading" persistent>
            <q-spinner-dots size="40px" color="secondary" />
          </q-dialog>
          <q-form 
              @submit.prevent="handleSubmit"
              class="q-gutter-md">
              <q-input 
                  filled 
                  
                  v-model="matricula" 
                  label="Matrícula" 
                  hint="Campo obligatorio"
                  color="secondary"
                  class="uppercase"
                  :rules="valoresRules.matricula"/>
              <q-select 
                  filled 
                  v-model="estadoRegistro" 
                  :options="estadoRegistroOptions" 
                  label="Estado de Registro"
                  color="secondary"
                  :rules="valoresRules.estadoRegistro" />
              
              <q-select  
                filled  
                v-model="estadoAbogado" 
                :options="estadoAbogadoOptions" 
                label="Estado de Abogado"
                color="secondary"
                :rules="valoresRules.estadoAbogado"  />

              <q-input  
                filled v-model="fechaCredencialVencimiento" 
                type="date" 
                label="Fecha de Vencimiento"
                color="secondary"
                :rules="valoresRules.fechaCredencialVencimiento"/>

              <q-btn 
                type="submit" 
                label="Actualizar" 
                color="secondary"
                />
              <q-btn 
                label="CANCELAR" 
                color="primary"
                v-close-popup
                @click="cancelar"
                />
                
          </q-form>
        </q-card-section>

      </q-card>
    </q-dialog>
  </div>
</template>
<script>
// import ''
import { ref } from 'vue'; 
import axios from 'axios';
import { mapGetters } from 'vuex';
import { useQuasar } from 'quasar';
import validaciones from '../common/validations'
import { message } from '../boot/message'


const valoresRules = {
  matricula: [validaciones.requerido, validaciones.alfanumerico, validaciones.minimoSeis],
  estadoRegistro: [validaciones.requerido],
  estadoAbogado: [validaciones.requerido],
  fechaCredencialVencimiento: [validaciones.requerido],
}



export default {
  setup() {
    // const $q = useQuasar();
    const matricula = ref('');
    const estadoRegistro = ref('');
    const estadoAbogado = ref('');
    const fechaCredencialVencimiento = ref('');
    const loading = ref(false);
    const estadoRegistroOptions = ['MATRICULA NO VIGENTE', 'CON JURAMENTO'];
    const estadoAbogadoOptions = ['CONCLUIDO', 'PENDIENTE', 'INHABILITADO'];

    const { matriculaGlobal, estadoRegistroG, estadoAbogadoG, fechaCredencialVencimientoG } = mapGetters([
      'global/getMatricula',
      'global/getEstadoRegistro',
      'global/getEstadoAbogado',
      'global/getFechaCredencialVencimiento',
    ]);
    
    const handleSubmit = async () => {
      try {
        loading.value = true;
        const apiUrl = 'http://192.168.3.243/apirpaoficial/web/publico/abogado'; //llevar a otro lugar

          if (!matricula.value && !matriculaGlobal.value) {
            message.error('La matrícula no existe');
            return;
          }


        const response = await axios.get(`${apiUrl}/${matricula.value  || matriculaGlobal.value }/actualizar-campo`, {
          params: {
            estadoRegistro: estadoRegistro.value || estadoRegistroG.value,
            estadoAbogado: estadoAbogado.value || estadoAbogadoG.value,
            fechaCredencialVencimiento: fechaCredencialVencimiento.value || fechaCredencialVencimientoG.value
          }
        });
        console.log(response.data);
        // $q.notify({
        //   // type: 'secondary',
        //   color: 'secondary',
        //   position: 'top-right',
        //   message: 'Se actualizo correctamente'
        // });
        message.success('Se actualizó correctamente');
      } catch (error) {
        loading.value = false;
        // console.error('Error en el servidor:'  );
        message.error('Error de conexion');
      }
      
    };

    const cancelar = () => {
      matricula.value = ''
      estadoAbogado.value = ''
      estadoRegistro.value = ''
      fechaCredencialVencimiento.value = ''
    }

    return {
      matricula,
      estadoRegistro,
      estadoAbogado,
      fechaCredencialVencimiento,
      loading,
      estadoRegistroOptions,
      estadoAbogadoOptions,
      handleSubmit,
      
      
      valoresRules,

      cancelar,
      fixed: ref(false)
    };
  },
  
};
</script>

<style>
    .uppercase input {
        text-transform: uppercase;
    }
</style>
