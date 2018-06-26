<script>
import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  name : 'Doge',
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
  methods: {

  },
  mounted () {
    let uri = 'https://min-api.cryptocompare.com/data/histoday?fsym=DOGE&tsym=USD&limit=30&aggregate=3&e=CCCAGG'
    axios.get(uri).then((response) => {
      var responseData = response.data.Data ;

      for (let i = 0 ; i < responseData.length ; i++){
        
        this.serie.push(responseData[i].close)

        var unixtimestamp = responseData[i].time

        var months_arr = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];

        var date = new Date(unixtimestamp*1000);

        var year = date.getFullYear();

        var month = months_arr[date.getMonth()];

        var day = date.getDate();

        var convdataTime = day+ '-' +month+ '-'+year

        this.label.push(convdataTime)
      }

      this.renderChart({
        labels: this.label,
        datasets: [
          {
            label: 'DOGE - Value Evolution U$',
            backgroundColor: 'rgba(141, 141, 141, 0.6)',
            data: this.serie
          }
        ],
      })

    })
  }
}
</script>