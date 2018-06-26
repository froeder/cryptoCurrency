<template>
  <div style="margin-left:1em" class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-30">
        <stats-card data-background-color="green">
          <template slot="header"><i class="cc BTC" title="BTC"></i>
          </template>

          <template slot="content">
            <p class="category">USD</p>
            <h3 class="title">U$ {{btcValue}}</h3>

            <p class="category">BRL</p>
            <h3 class="title">R$ {{btcValueReal}}</h3>

            <p class="category">Variação do dia</p>
            <h3 v-if="btcVariacaoDia < 0" style="color:red" class="title">R$ {{btcVariacaoDia}}</h3>
            <h3 v-if="btcVariacaoDia > 0" style="color:green" class="title">R$ {{btcVariacaoDia}}</h3>
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
            <i class="cc ETH" title="ETH"></i>
          </template>

          <template slot="content">
            <p class="category">USD</p>
            <h3 class="title">U$ {{ethValue}}</h3>

            <p class="category">BRL</p>
            <h3 class="title">R$ {{ethValueReal}}</h3>

            <p class="category">Variação do dia</p>
            <h3 v-if="ethVariacaoDia < 0" style="color:red" class="title">R$ {{ethVariacaoDia}}</h3>
            <h3 v-if="ethVariacaoDia > 0" style="color:green" class="title">R$ {{ethVariacaoDia}}</h3>
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
            <i class="cc ETC" title="ETC"></i>
          </template>

          <template slot="content">
            <p class="category">USD</p>
            <h3 class="title">U$ {{etcValue}}</h3>

            <p class="category">BRL</p>
            <h3 class="title">R$ {{etcValueReal}}</h3>

            <p class="category">Variação do dia</p>
            <h3 v-if="etcVariacaoDia < 0" style="color:red" class="title">R$ {{etcVariacaoDia}}</h3>
            <h3 v-if="etcVariacaoDia > 0" style="color:green" class="title">R$ {{etcVariacaoDia}}</h3>
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
            <i class="cc DOGE" title="DOGE"></i>
          </template>

          <template slot="content">
            <p class="category">USD</p>
            <h3 class="title">U$ {{dogeValue}}</h3>

            <p class="category">BRL</p>
            <h3 class="title">R$ {{dogeValueReal}}</h3>

            <p class="category">Variação do dia</p>
            <h3 v-if="dogeVariacaoDia < 0" style="color:red" class="title">R$ {{dogeVariacaoDia}}</h3>
            <h3 v-if="dogeVariacaoDia > 0" style="color:green" class="title">R$ {{dogeVariacaoDia}}</h3>
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
            <i class="cc LTC" title="LTC"></i>
          </template>

          <template slot="content">
            <p class="category">USD</p>
            <h3 class="title">U$ {{ltcValue}}</h3>

            <p class="category">BRL</p>
            <h3 class="title">R$ {{ltcValueReal}}</h3>

            <p class="category">Variação do dia</p>
            <h3 v-if="ltcVariacaoDia < 0" style="color:red" class="title">R$ {{ltcVariacaoDia}}</h3>
            <h3 v-if="ltcVariacaoDia > 0" style="color:green" class="title">R$ {{ltcVariacaoDia}}</h3>
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
            <i class="cc XRP" title="XRP"></i>
          </template>

          <template slot="content">
            <p class="category">USD</p>
            <h3 class="title">U$ {{xrpValue}}</h3>

            <p class="category">BRL</p>
            <h3 class="title">R$ {{xrpValueReal}}</h3>

            <p class="category">Variação do dia</p>
            <h3 v-if="xrpVariacaoDia < 0" style="color:red" class="title">R$ {{xrpVariacaoDia}}</h3>
            <h3 v-if="xrpVariacaoDia > 0" style="color:green" class="title">R$ {{xrpVariacaoDia}}</h3>
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
      xrpVariacaoDia: 0

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
      this.btcValue = response.data.RAW.BTC.USD.PRICE.toFixed(2)
      this.btcValueReal = response.data.RAW.BTC.BRL.PRICE.toFixed(2)
      this.btcVariacaoDia = response.data.RAW.BTC.BRL.CHANGEDAY.toFixed(2)

      this.ethValue = response.data.RAW.ETH.USD.PRICE.toFixed(2)
      this.ethValueReal = response.data.RAW.ETH.BRL.PRICE.toFixed(2)
      this.ethVariacaoDia = response.data.RAW.ETH.BRL.CHANGEDAY.toFixed(2)

      this.etcValue = response.data.RAW.ETC.USD.PRICE.toFixed(2)
      this.etcValueReal = response.data.RAW.ETC.BRL.PRICE.toFixed(2)
      this.etcVariacaoDia = response.data.RAW.ETC.BRL.CHANGEDAY.toFixed(2)

      this.dogeValue = response.data.RAW.DOGE.USD.PRICE
      this.dogeValueReal = response.data.RAW.DOGE.BRL.PRICE
      this.dogeVariacaoDia = response.data.RAW.DOGE.BRL.CHANGEDAY

      this.ltcValue = response.data.RAW.LTC.USD.PRICE.toFixed(2)
      this.ltcValueReal = response.data.RAW.LTC.BRL.PRICE.toFixed(2)
      this.ltcVariacaoDia = response.data.RAW.LTC.BRL.CHANGEDAY.toFixed(2)

      this.xrpValue = response.data.RAW.XRP.USD.PRICE.toFixed(2)
      this.xrpValueReal = response.data.RAW.XRP.BRL.PRICE.toFixed(2)
      this.xrpVariacaoDia = response.data.RAW.XRP.BRL.CHANGEDAY.toFixed(2)
    })
  },
}
</script>
