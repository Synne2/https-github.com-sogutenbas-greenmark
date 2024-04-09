const currentUser = JSON.parse(localStorage.getItem('user'));
const lastCarbonFootInfo = currentUser.carbonFootInfos[currentUser.carbonFootInfos.length - 1];
console.log(lastCarbonFootInfo);

let home =
  (lastCarbonFootInfo.coalConsumption * 0.025 +
    lastCarbonFootInfo.woodConsumption * 0.015 +
    lastCarbonFootInfo.electricityHousehold * 0.019 +
    lastCarbonFootInfo.publicTransportDistance * 0.06) /
  1000;

let lifeStyle = (lastCarbonFootInfo.meatConsumption * 27) / 1000;

let transport = 0;

switch (lastCarbonFootInfo.fuelType) {
  case 'petrol':
    transport = (lastCarbonFootInfo.travelledKilometers * 2.31) / 1000;
    break;
  case 'diesel':
    transport = (lastCarbonFootInfo.travelledKilometers * 2.68) / 1000;
    break;
  case 'electricity':
    transport = (lastCarbonFootInfo.travelledKilometers * 0.4) / 1000;
    break;

  default:
    break;
}

document.getElementById('home').innerHTML = home;
document.getElementById('transport').innerHTML = transport;
document.getElementById('lifeStyle').innerHTML = lifeStyle;
document.getElementById('total').innerHTML = home + transport + lifeStyle;

// chart.js
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Home', 'Transport', 'Life Style'],
    datasets: [
      {
        label: '# of Votes',
        data: [home, transport, lifeStyle],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
