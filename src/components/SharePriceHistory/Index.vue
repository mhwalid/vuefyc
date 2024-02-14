<template>
  <div>
    <h2>Historique des actions</h2>
    <div class="" style="height: 400px; width: 400;">
      <Line :data="data" :options="options"/>
    </div>
    <div class="" style="height: 400px; width: 400;">
      <Line :data="datasetoldvolume" :options="options"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useSharePriceHistoryStore} from '@/stores/sharePriceHistory';
import {onMounted} from 'vue';
import {Line} from 'vue-chartjs';

const sharePriceHistoryStore = useSharePriceHistoryStore();

onMounted(() => {
  sharePriceHistoryStore.getSharePriceHistoryById(1);
});
const options = {
  responsive: true,
  maintainAspectRatio: false
};

var sharePriceHistory = sharePriceHistoryStore.sharePriceHistories.sharePriceHistory;
if (sharePriceHistory) {
  var labels = sharePriceHistory.map(history => history.created_at);
  var dataset = sharePriceHistory.map(history => parseFloat(history.old_value));
  var datasetold_volume = sharePriceHistory.map(history => parseFloat(history.old_volume));
}

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Valeur',
      backgroundColor: '#e82978',
      data: dataset
    }
  ]
};
const datasetoldvolume = {
  labels: labels,
  datasets: [
    {
      label: 'Volume',
      backgroundColor: '#f87979',
      data: datasetold_volume
    }
  ]
};
</script>