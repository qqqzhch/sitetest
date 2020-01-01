
import { 
    Button,
    Col,
    Row,
    Menu,
    Icon,
    Card,
    Layout
  } from 'ant-design-vue';



export default function(Vue){
    Vue.use(Button);
    console.log(Button)
    console.log(Col)
    Vue.use(Col);

    Vue.use(Row);

    Vue.use(Menu);


    Vue.use(Icon);

    Vue.use(Card);
    console.log(Layout)
    Vue.use(Layout);
}