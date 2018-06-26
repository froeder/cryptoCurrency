<template>
    <div class="content">
        <div class="md-layout">
        <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
            <monthly-income :width="100" :height="50"/>
        </div>
        </div>
    </div>
</template>

<script>
import MonthlyIncome from 'Chart.vue'

export default {
  name: 'tab-vue',
  components: {
      MonthlyIncome
  },
  data () {
    return {
    }
  },
  methods: {
    onSelect: function (items) {
      this.selected = items
    }
  }
}
</script>
