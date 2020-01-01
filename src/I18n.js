import VueI18n from 'vue-i18n'
import messages from './lang'
export default function(Vue){

    Vue.use(VueI18n)
    return new VueI18n({
        locale: 'zhch', // 设置语言环境
        messages
      })
    
}
