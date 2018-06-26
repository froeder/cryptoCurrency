<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon >attach_money</md-icon>
          </template>

          <template slot="content">
            <p class="category">Bitcoin - USD</p>
            <h3 class="title">U$ {{btcValue}}</h3>

            <p class="category">Bitcoin - USD</p>
            <h3 class="title">R$ {{btcValueReal}}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
                <md-icon>date_range</md-icon>
                <span class="category">Atualizado {{horaAtualizacao}}</span>
            </div>
          </template>
        </stats-card>
      </div>
      <h1>More Coins is comming soon :)</h1>
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

export default{
  components: {
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable
  },
  data () {
    return {
      btcValue: 0,
      btcValueReal: 0,
      horaAtualizacao: 0
    }
  },
  mounted() {

    let uri = 'https://api.coindesk.com/v1/bpi/currentprice/BRL.json'
    axios.get(uri).then((response) => {
      this.btcValueReal = response.data.bpi.BRL.rate_float
      this.btcValue = response.data.bpi.USD.rate_float
      this.horaAtualizacao = response.data.time.updateduk
    })
  },
}
</script>
