import Vue from 'vue';
document.addEvent.Listener(DOMContentLoaded, () => {
  new Vue ({
    el: "#app",
    data: {
      currencyData: [],
      selectedCurrency: null
    },
    mounted() {
      this.getCurrencyData();
    },
    methods: {
      getCurrencyData: function () {
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.currencyData = data)
      }
    }
  })
})
