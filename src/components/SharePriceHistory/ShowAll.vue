<template>
  <div v-for="(item, key) in datas" :key="key">
    <div class="" style="height: 400px; width: 400;">
      <Line v-if="item" :data="item" :options="options[key]"/>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import {useSharePriceHistoryStore} from '@/stores/sharePriceHistory';
import {useSharePriceStore} from '@/stores/sharePrice';
import {
  CategoryScale,
  Chart as ChartJS,
  Colors,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import {Line} from 'vue-chartjs';
import { deepStrictEqual } from 'assert';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const sharePriceHistoryStore = useSharePriceHistoryStore();
const sharePriceStore = useSharePriceStore();

onMounted(() => {
  sharePriceHistoryStore.getAllSharePriceHistories();
  sharePriceStore.getSharePriceName()
});

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear().toString().slice(2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}
// let name = ref();
// var Nom: string;
// const getshare = async (id:any) => {
//   Nom = await sharePriceStore.getSharePriceName(id);
// };



var datas: any = [];
var options: any = [];

var sharePriceHistory = sharePriceHistoryStore.sharePriceHistories.sharePriceHistory;
var sharePriceuse = sharePriceStore.sharePrice;
if (sharePriceHistory) {
  var nb = [...new Set(sharePriceHistory.map(history => history.share_price_id))];
  nb.forEach(id => {
    
    const filteredHistory = sharePriceHistory.filter(history => history.share_price_id === id);
    const labels = filteredHistory.map(history => formatDate(history.created_at));
    const dataset = filteredHistory.map(history => parseFloat(history.old_value));
    const datasetold_volume = filteredHistory.map(history => parseFloat(history.old_volume));

    const data = {
      labels: labels,
      name: 'line',
      datasets: [
        {
          label: 'Valeur',
          backgroundColor: '#e82978',
          data: dataset
        },
        {
          label: 'Volume',
          backgroundColor: '#F83978',
          data: datasetold_volume
        }
      ]
    };

    const option = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: sharePriceuse.sharePrices[id-1].name,
          font: {
            size: 16
          }
        }
      }
    };


    datas[id as number] = data;
    options[id as number] = option;

  });

 
}
</script>