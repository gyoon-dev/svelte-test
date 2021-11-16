import App from './App.svelte'

const app = new App({
  target: document.body,
  props: {
    name: '세상',
  },
})

export default app
