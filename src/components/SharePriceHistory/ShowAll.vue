 
  <!-- YourComponent.vue -->
<template>
        <div  v-for="(item, key) in datas" :key="key" >
        <div class="" style="height: 400px; width: 400;">
          <Line v-if="item" :data="item" :options="options[key]" />
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

onMounted(() => {
  sharePriceHistoryStore.getAllSharePriceHistories();
});

function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear().toString().slice(2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}
function getname(id){
 var d = sharePriceHistoryStore.getname(id)
 console.log(d+"   sdsd"+"   " +id);
 
  return d;
}
var datas = [];
var options = [];
var sharePriceHistory = sharePriceHistoryStore.sharePriceHistories.sharePriceHistory;
if (sharePriceHistory) {
    var nb = [...new Set(sharePriceHistory.map(history => history.share_price_id))];
    nb.forEach(el => {
        // Filter sharePriceHistory based on share_price_id
        const filteredHistory = sharePriceHistory.filter(history => history.share_price_id === el);
        // Extract labels, dataset, and datasetold_volume
        const labels = filteredHistory.map(history => formatDate(history.created_at));
        const dataset = filteredHistory.map(history => parseFloat(history.old_value));
        const datasetold_volume = filteredHistory.map(history => parseFloat(history.old_volume));
        
        const data= {
          labels: labels,
          name: 'line',
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#e82978',
              data: dataset
            },
            {
              label: 'Data One',
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
              text: getname(el),
              font: {
                size: 16
              }
            }
          }
        };

        datas[el] = data;
        options[el] = option;

    });

    // console.log(options);
}
</script>