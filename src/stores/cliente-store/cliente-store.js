import { defineStore } from 'pinia';
import { ref } from 'vue';


export const useClienteStore = defineStore('cliente', () => {
    const currentCss = ref('');
  
    const fetchData = async () => {
      try {
        // const response = await fetch('URL_DE_LA_API');
        // const data = await response.json();

        const data = 'copeuch';
        if (data === 'medismart') {
          setCurrentCss('medismart.css');

          console.log('cayo en medismart.css');
        } else if (data === 'copeuch')  {
          setCurrentCss('copeuch.css');

          console.log('cayo en copeuch.css');
        } else {
          setCurrentCss('medismart.css');

          console.log('cayo en else');
        }
      } catch (error) {
        console.error('Error al obtener la respuesta de la API:', error);
      }
    };
  
    const setCurrentCss = (cssFile) => {
      currentCss.value = cssFile;
    };
  
    return {
      currentCss,
      fetchData,
    };
  });