<template>
  <div class="content">
    <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
      <nav-tabs-card>
        <template slot="content">
          <span class="md-nav-tabs-title">Tasks:</span>
          <md-tabs md-sync-route class="md-success" md-alignment="left">

            <md-tab id="tab-btc" md-label="BTC" md-icon="attach_money">
              <div class="content">
                  <div class="md-layout">
                  <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                      <monthly-income :width="100" :height="50"/>
                  </div>
                  </div>
              </div>
            </md-tab>

            <md-tab id="tab-eth" md-label="ETH" md-icon="attach_money">
              <div class="content">
                  <div class="md-layout">
                  <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                      <eth :width="100" :height="50"/>
                  </div>
                  </div>
              </div>
            </md-tab>

            <md-tab id="tab-etc" md-label="ETC" md-icon="attach_money">
              <div class="content">
                  <div class="md-layout">
                  <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                      <etc :width="100" :height="50"/>
                  </div>
                  </div>
              </div>
            </md-tab>

            <md-tab id="tab-doge" md-label="DOGE" md-icon="attach_money">
              <div class="content">
                  <div class="md-layout">
                  <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                      <doge :width="100" :height="50"/>
                  </div>
                  </div>
              </div>
            </md-tab>

            <md-tab id="tab-ltc" md-label="LTC" md-icon="attach_money">
              <div class="content">
                  <div class="md-layout">
                  <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                      <ltc :width="100" :height="50"/>
                  </div>
                  </div>
              </div>
            </md-tab>

            <md-tab id="tab-xrp" md-label="XRP" md-icon="attach_money">
              <div class="content">
                  <div class="md-layout">
                  <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
                      <xrp :width="100" :height="50"/>
                  </div>
                  </div>
              </div>
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

import { Line } from 'vue-chartjs'
import MonthlyIncome from '../mixins/Chart.vue'
import Eth from '../mixins/Eth.vue'
import Etc from '../mixins/Etc.vue'
import Doge from '../mixins/Doge.vue'
import Ltc from '../mixins/Ltc.vue'
import Xrp from '../mixins/Xrp.vue'

export default{
  components: {
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable,
    MonthlyIncome,
    Eth,
    Etc,
    Doge,
    Ltc,
    Xrp
  },
  data () {
    return {
    }
  }
}
</script>
