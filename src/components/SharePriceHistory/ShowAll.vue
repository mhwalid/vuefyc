 
  <!-- YourComponent.vue -->
<template>
    <div>
      <h2>Share Price Histories:</h2>
        <div class="" style="height: 400px; width: 400;">
          <Line :data="data" :options="options" />
        </div>
        <div class="" style="height: 400px; width: 400; color:rgb(196, 75, 32);">
          <Line :data="datasetoldvolume" :options="options" />
        </div>
                

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useSharePriceHistoryStore } from '../../stores/sharePriceHistory.ts';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'vue-chartjs';

// Register Chart.js scales and elements
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const sharePriceHistoryStore = useSharePriceHistoryStore();

const options = {
  responsive: true,
  maintainAspectRatio: false
};

onMounted(() => {
  sharePriceHistoryStore.getAllSharePriceHistories();
});


var sharePriceHistory = sharePriceHistoryStore.sharePriceHistories.sharePriceHistory;
if(sharePriceHistory){
var labels = sharePriceHistory.map(history => history.created_at);
var dataset = sharePriceHistory.map(history => parseFloat(history.old_value));
var datasetold_volume = sharePriceHistory.map(history => parseFloat(history.old_volume));
}

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#e82978',
      data: dataset
    }
  ]
};
const datasetoldvolume = {
  labels: labels,
  datasets: [
    {
      label: 'Data One',
      backgroundColor: 'rgb(196, 75, 32)',
      data: datasetold_volume
    }
  ]
};
</script>