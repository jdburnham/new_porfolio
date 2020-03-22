import basictodo from '../assets/projects/01.png'
import todob from '../assets/projects/02.png'
import todot from '../assets/projects/03.png'
import inventory from '../assets/projects/04.png'
import vuetodo from '../assets/projects/05.png'
import mynotes from '../assets/projects/06.png'
import login from '../assets/projects/07.png'
import superheroes from '../assets/projects/08.png'
import moviesdb from '../assets/projects/09.png'

const projects = [
  {
    name: 'Basic Todo App',
    description: 'A Vanilla HMTL, CSS, and JS Todo Application',
    image: basictodo,
    hashtags: ['todo', 'html5', 'css', 'javascript'],
    url: 'https://basictodo.jburnhamprojects.xyz/'
  },
  {
    name: 'Todo App with Bootstrap',
    description: 'A Todo Application in Vanilla Javascript and Bootstrap',
    image: todob,
    hashtags: ['todo', 'html5', 'javascript', 'bootstrap'],
    url: 'https://todob.jburnhamprojects.xyz/'
  },
  {
    name: 'Todo App with Tailwind',
    description: 'A Todo Application in Vanilla Javascript and TailwindCSS',
    image: todot,
    hashtags: ['todo', 'html5', 'css', 'javascript', 'tailwind'],
    url: 'https://todot.jburnhamprojects.xyz/'
  },
  {
    name: 'Basic Inventory App',
    description: 'A Basic Inventory App in Vue.js',
    image: inventory,
    hashtags: ['todo', 'vuejs', 'javascript', 'tailwind'],
    url: 'https://inventory.jburnhamprojects.xyz/'
  },
  {
    name: 'Todo App with Tailwind and Vue.js',
    description: 'A Todo Application in Vanilla Javascript and TailwindCSS',
    image: vuetodo,
    hashtags: ['todo', 'vuejs', 'javascript', 'tailwind'],
    url: 'https://vuetodo.jburnhamprojects.xyz/'
  },
  {
    name: 'Look at my Notes',
    description:
      'A Vue.js Application with Vuex, implementing a CRUD Notes app',
    image: mynotes,
    hashtags: ['crud', 'vuejs', 'javascript', 'tailwind', 'vuex', 'vue-router'],
    url: 'https://mynotes.jburnhamprojects.xyz/'
  },
  {
    name: 'The Login',
    description:
      'A Vue.js Application with Vuex, implementing a Login with Firebase in Email/Password and Google. ',
    image: login,
    hashtags: [
      'firebase',
      'auth',
      'vuejs',
      'javascript',
      'tailwind',
      'vuex',
      'vue-router'
    ],
    url: 'https://thelogin.jburnhamprojects.xyz/'
  },
  {
    name: 'Super Heroes API',
    description:
      'A Vue.js Application with Vuex, implementing a Super Heroes API. ',
    image: superheroes,
    hashtags: ['api', 'vuejs', 'javascript', 'tailwind', 'vuex', 'vue-router'],
    url: 'https://superheroes.jburnhamprojects.xyz/'
  },
  {
    name: 'MoviesDB',
    description:
      'A Vue.js Application with Vuex & Vuetify implementing a The MoviesDB API. ',
    image: moviesdb,
    hashtags: ['api', 'firebase', 'vuejs', 'javascript', 'vuetify', 'vuex'],
    url: 'https://moviesdb.jburnhamprojects.xyz/'
  }
]

export default projects
