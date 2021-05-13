var ctx = document.getElementById('g-sesionesvsusuariosunicos').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels:  ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.','Ago.'],
    datasets: [{
      label: 'Usuarios unicos',
      data: [197654, 218900, 216789],
      backgroundColor: "rgba(241, 196, 15,0.5)",
      borderColor: "#F1C40F",
    }, {
      label: 'sesiones',
      data:  [556903, 601276, 576282],
      backgroundColor: "rgba(245, 122, 10 ,0.5)",
      borderColor: "#F57A0A",
    }]
  }
});

var ctx = document.getElementById('g-CTrafico').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Directas', 'Organicas', 'Sociales', 'Email', 'Referenciales'],
    datasets: [{
      label: 'apples',
      data: [12, 19, 3, 17, 6],    //agregar datos
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
      ]
    }]
  }
});




          