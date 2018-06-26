<script>
import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data () {
    return {
      data: {
        labels: [],
        series: []
      },
      label: [],
      serie: []
    }
  },
  mounted () {
    let uri = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-06-01?for=yesterday'
    axios.get(uri).then((response) => {
      this.responseData = response.data.bpi
      //console.log(Object.values(this.teste))
      var responseObject = Object.entries(this.responseData)
      //console.log(teste2)
      for (let i = 0 ; i < responseObject.length ; i++){
        this.label.push(responseObject[i][0])
        this.serie.push(responseObject[i][1])
      }

      this.renderChart({
        labels: this.label,
        datasets: [
          {
            label: 'Prices Evolution',
            backgroundColor: '#f87979',
            data: this.serie
          }
        ],
      })

    })
  }
}
</script>
