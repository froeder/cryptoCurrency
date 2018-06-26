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
import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable
} from '@/components'

import axios from 'axios'
import { Line } from 'vue-chartjs'
import MonthlyIncome from '../mixins/Chart.vue'

export default{
  components: {
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable,
    MonthlyIncome
  },
  extends: Line,
  data () {
    return {
     
    }
  }
}

//TODO: ICNLUIR POWERED BY BPI API
//TODO GRÁFICO EM TEMPO REAL 
//https://min-api.cryptocompare.com/
</script>


