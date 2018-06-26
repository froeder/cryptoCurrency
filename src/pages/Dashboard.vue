<template>
  <div style="margin-left:10em" class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-30">
        <stats-card data-background-color="green">
          <template slot="header"><h1>BTC</h1>
          </template>

          <template slot="content">
            <p class="category">USD</p>
            <h3 class="title">U$ {{btcValue}}</h3>

            <p class="category">BRL</p>
            <h3 class="title">R$ {{btcValueReal}}</h3>

            <p class="category">Variação do dia</p>
            <h3 class="title">R$ {{btcValueReal}}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
                <md-icon>date_range</md-icon>
                <span class="category">Atualizado </span>
            </div>
          </template>
        </stats-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-30">
        <stats-card data-background-color="green">
          <template slot="header">
            <h1>ETH</h1>
          </template>

          <template slot="content">
            <p class="category">USD</p>
            <h3 class="title">U$ {{btcValue}}</h3>

            <p class="category">BRL</p>
            <h3 class="title">R$ {{btcValueReal}}</h3>

            <p class="category">Variação do dia</p>
            <h3 class="title">R$ {{btcValueReal}}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
                <md-icon>date_range</md-icon>
                <span class="category">Atualizado </span>
            </div>
          </template>
        </stats-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-30">
        <stats-card data-background-color="green">
          <template slot="header">
            <h1>ETC</h1>
          </template>

          <template slot="content">
            <p class="category">USD</p>
            <h3 class="title">U$ {{btcValue}}</h3>

            <p class="category">BRL</p>
            <h3 class="title">R$ {{btcValueReal}}</h3>

            <p class="category">Variação do dia</p>
            <h3 class="title">R$ {{btcValueReal}}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
                <md-icon>date_range</md-icon>
                <span class="category">Atualizado </span>
            </div>
          </template>
        </stats-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-30">
        <stats-card data-background-color="green">
          <template slot="header">
            <h1>DOGE</h1>
          </template>

          <template slot="content">
            <p class="category">USD</p>
            <h3 class="title">U$ {{btcValue}}</h3>

            <p class="category">BRL</p>
            <h3 class="title">R$ {{btcValueReal}}</h3>

            <p class="category">Variação do dia</p>
            <h3 class="title">R$ {{btcValueReal}}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
                <md-icon>date_range</md-icon>
                <span class="category">Atualizado </span>
            </div>
          </template>
        </stats-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-30">
        <stats-card data-background-color="green">
          <template slot="header">
            <h1>LTC</h1> 
          </template>

          <template slot="content">
            <p class="category">USD</p>
            <h3 class="title">U$ {{btcValue}}</h3>

            <p class="category">BRL</p>
            <h3 class="title">R$ {{btcValueReal}}</h3>

            <p class="category">Variação do dia</p>
            <h3 class="title">R$ {{btcValueReal}}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
                <md-icon>date_range</md-icon>
                <span class="category">Atualizado </span>
            </div>
          </template>
        </stats-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-30">
        <stats-card data-background-color="green">
          <template slot="header">
            <h1>XRP</h1>
          </template>

          <template slot="content">
            <p class="category">USD</p>
            <h3 class="title">U$ {{btcValue}}</h3>

            <p class="category">BRL</p>
            <h3 class="title">R$ {{btcValueReal}}</h3>

            <p class="category">Variação do dia</p>
            <h3 class="title">R$ {{btcValueReal}}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
                <md-icon>date_range</md-icon>
                <span class="category">Atualizado </span>
            </div>
          </template>
        </stats-card>
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
      btcVariacaoDia: 0,
      ethValue: 0,
      ethValueReal: 0,
      ethVariacaoDia: 0,
      etcValue: 0,
      etcValueReal: 0,
      etcVariacaoDia: 0,
      dogeValue: 0,
      dogeValueReal: 0,
      dogeVariacaoDia: 0,
      ltcValue: 0,
      ltcValueReal: 0,
      ltcVariacaoDia: 0,
      xrpValue: 0,
      xrpValueReal: 0,
      xrpVariacaoDia: 0,

    }
  },
  mounted() {

    //let uri = 'https://api.coindesk.com/v1/bpi/currentprice/BRL.json'
    //axios.get(uri).then((response) => {
     // this.btcValueReal = response.data.bpi.BRL.rate_float
      //this.btcValue = response.data.bpi.USD.rate_float
      //this.horaAtualizacao = response.data.time.updateduk
    //})

    let url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,ETC,DOGE,XRP,LTC&tsyms=USD,BRL'
    axios.get(url).then((response) => {
      console.log(response)
      this.btcValue = response.data.RAW.BTC.USD.PRICE
      this.btcValueReal = response.data.RAW.BTC.BRL.PRICE
    })
  },
}
</script>
