<template>
  <div class="content">
    <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
      <nav-tabs-card>
        <template slot="content">
          <span class="md-nav-tabs-title">Tasks:</span>
          <md-tabs md-sync-route class="md-success" md-alignment="left">

            <md-tab id="tab-btc" md-label="Bugs" md-icon="attach_money">
              <div class="content">
                  <div class="md-layout">
                  <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                      <monthly-income :width="100" :height="50"/>
                  </div>
                  </div>
              </div>
            </md-tab>

            <md-tab id="tab-eth" md-label="Website" md-icon="attach_money">
              <nav-tabs-table></nav-tabs-table>
            </md-tab>

            <md-tab id="tab-etc" md-label="server" md-icon="attach_money">
              <nav-tabs-table></nav-tabs-table>
            </md-tab>

            <md-tab id="tab-doge" md-label="Website" md-icon="attach_money">
              <nav-tabs-table></nav-tabs-table>
            </md-tab>

            <md-tab id="tab-ltc" md-label="server" md-icon="attach_money">
              <nav-tabs-table></nav-tabs-table>
            </md-tab>

            <md-tab id="tab-xrp" md-label="server" md-icon="attach_money">
              <nav-tabs-table></nav-tabs-table>
            </md-tab>

            
          </md-tabs>
        </template>
      </nav-tabs-card>
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
import Btc from '../mixins/Btc.vue'

export default{
  components: {
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable,
    MonthlyIncome,
    Btc
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


