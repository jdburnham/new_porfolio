import basictodo from '../assets/projects/01.png'
import todob from '../assets/projects/02.png'
import todot from '../assets/projects/03.png'
import inventory from '../assets/projects/04.png'
import vuetodo from '../assets/projects/05.png'
import mynotes from '../assets/projects/06.png'
import login from '../assets/projects/07.png'
import superheroes from '../assets/projects/08.png'
import moviesdb from '../assets/projects/09.png'
import blog from '../assets/projects/10.png'
import chat from '../assets/projects/11.png'
import mystore from '../assets/projects/12.png'
import finalProject from '../assets/projects/final.jpg'

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
  },
  {
    name: 'Blog App',
    description:
      'A Vue.js Application with Vuex & Vuetify implementing my own BackEnd API. ',
    image: blog,
    hashtags: ['api', 'firebase', 'vuejs', 'javascript', 'vuetify', 'vuex'],
    url: 'https://blog.jburnhamprojects.xyz/'
  },
  {
    name: 'Chat App',
    description:
      'A Vue.js Application with Vuex & Vuetify implementing Firebase Store and Login. ',
    image: chat,
    hashtags: ['api', 'firebase', 'vuejs', 'javascript', 'vuetify', 'vuex'],
    url: 'https://chatapp.jburnhamprojects.xyz/'
  },
  {
    name: 'Pseudo Store App',
    description:
      'A Pseudo Shop project with Firebase, Vue.js, Vuetify, FirebaseUI, VueFire ',
    image: mystore,
    hashtags: ['vuefire', 'firebase', 'vuejs', 'database', 'vuetify', 'vuex'],
    url: 'https://mystore.jburnhamprojects.xyz/'
  },
  {
    name: 'Table Top RPG Charactor Creator',
    description:
      'An application that assists with creating a level 1 character for an RPG. ',
    image: finalProject,
    hashtags: [
      'vuefire',
      'firebase',
      'vuejs',
      'database',
      'tailwindcss',
      'vuex'
    ],
    url: 'https://finalproject.jburnhamprojects.xyz/'
  }
]

export default projects
