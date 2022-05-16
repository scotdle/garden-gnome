// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import {
  createVuetify
} from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#c5c5c5',
          secondary: '#50ad80',
          background: '#d6d6d6',
        }
      }
    }
  }
})
