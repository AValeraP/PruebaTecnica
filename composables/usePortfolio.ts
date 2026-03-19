import {ref, computed} from 'vue',
import mocksProjectCards from '../app/data/mocksProjectCards.js'
export default{
    setup(){
        const proyectos = ref(mocksProjectCards);

        const filtroTexto = ref('');
    }
}