var labels1 = ['Cockpit', 'Passenger cabin', 'Living Quarters'];
var data1 = [10, 41, 49];
var colors1 = ['#D3D3D3', '#A7A9AC', '#005288'];

//Eigenschappen van de chart heb ik apart gehouden vanwege overzichtelijkheid 

var myChart = document.getElementById("myChart").getContext('2d');

var oxChart = new Chart(myChart, {
    type: 'doughnut',
    data: {
        labels: labels1,
        datasets: [ {
            data: data1,
            backgroundColor: colors1
        }]
    },
    options: {
        title:{
            text:"Total oxygen consumption in %",
            display: true
        
        }
    }


});



var labels2 = ['Main rocket engine', 'Side thruster 1', 'Side thruster 2', 'Side thruster 3'];
var data2 = [60, 13, 16, 11];
var colors2 = ['#005288', '#989898', '#A7A9AC','#D3D3D3'];

//Eigenschappen van de chart heb ik apart gehouden vanwege overzichtelijkheid 

var myChart2 = document.getElementById("myChart2").getContext('2d');

var fuelChart = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [ {
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        title:{
            text:"Fuel consumption per engine in %",
            display: true
        
        },
        legend: {
            display: false
        }

    }


});



var labels3 = ['Water', 'Food', 'Hygiene products'];
var data3 = [40, 40, 20];
var colors3 = ['#005288', '#656565', '#A9A9A9'];

//Eigenschappen van de chart heb ik apart gehouden vanwege overzichtelijkheid 

var myChart3 = document.getElementById("myChart3").getContext('2d');

var suppliesChart = new Chart(myChart3, {
    type: 'pie',
    data: {
        labels: labels3,
        datasets: [ {
            data: data3,
            backgroundColor: colors3
        }]
    },
    options: {
        title:{
            text:"% of supplies on board",
            display: true
        
        },
        legend: {
            display: true
        }

    }


});


