<template>
  <div v-for="(item, key) in datas" :key="key">
    <div class="" style="height: 400px; width: 400;">
      <Line v-if="item" :data="item" :options="options[key]"/>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {onMounted} from 'vue';
import {useSharePriceHistoryStore} from '@/stores/sharePriceHistory';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from 'chart.js';
import {Line} from 'vue-chartjs';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const sharePriceHistoryStore = useSharePriceHistoryStore();

onMounted(() => {
  sharePriceHistoryStore.getAllSharePriceHistories();
});

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear().toString().slice(2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getname(id: number) {
  var d = sharePriceHistoryStore.getSharePriceName(id)
  return d;
}

var datas: any = [];
var options: any = [];
var sharePriceHistory = sharePriceHistoryStore.sharePriceHistories.sharePriceHistory;
if (sharePriceHistory) {
  var nb = [...new Set(sharePriceHistory.map(history => history.share_price_id))];
  nb.forEach(el => {
    const filteredHistory = sharePriceHistory.filter(history => history.share_price_id === el);
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
          text: getname(el as number),
          font: {
            size: 16
          }
        }
      }
    };

    datas[el as number] = data;
    options[el as number] = option;

  });
}
</script>