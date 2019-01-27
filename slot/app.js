new Vue({
  el: '#app',
  data: {
    fruits: [
      'リンゴ',
      'イチゴ',
      'オレンジ',
    ]
  }
})
var vm = new Vue({
  el: '#app',
  data: {
    items: items,
  },
  computed: {
    totalPrice: function() {
      return this.items.reduce(function(sum, item) {
        return sum + (item.price * item.quantity)
      }, 0)
    },
    totalPriceWithTax: function() {
      return Math.floor(this.totalPrice * 1.08)
    },
    canBuy: function() {
      return this.totalPrice >= 1000
    },
    errorMessageStyle: function () {
      return {
        border: this.canBuy ? '' : '1px solid red',
        color: this.canBuy ? '' : 'red',
      }
    }
  },
  filters: {
    numberWithDelimiter: function(value) {
      if (!value) {
        return '0'
      }

      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    },
  },
})

// chromeのコンソールからデバッグするための記述
window.vm = vm
