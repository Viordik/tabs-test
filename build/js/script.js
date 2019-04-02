new Vue({
  el: '#app',
  props: {
    msg: {
      type: String,
      default: 'Табы'
    }
  },
  data() {
    return {
      tabs: [
        'Tab 1',
        'Tab 2',
        'Tab 3',
      ],
      content: '',
      preloader: false,
      currentTab: null,
      textColor: 'black',
    }
  },
  computed: {
    buttonText() {
      if (this.textColor === 'red') {
        return 'Сделать текст черным';
      }

      return 'Сделать текст красным';
    }
  },

  methods: {
    onClickTab(index) {
      if (index === this.currentTab) {
        return null;
      }

      this.currentTab = index;
      this.preloader = true;

      setTimeout(() => {
        this.content =
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem similique eligendi eaque tempore porro voluptatibus iusto repellendus facere autem, suscipit officiis, expedita libero, obcaecati magni? Alias perferendis eos totam natus.';
        this.preloader = false;
      }, 1500);
    },

    onClickButtonChangeColor() {
      this.textColor = this.textColor === 'red' ? 'black' : 'red';
    }
  }
});
