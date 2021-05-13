
var idhtml = document.getElementById('g-SvsUU').getContext('2d');
var g_lineas = new Chart(idhtml, {
  type: 'line',
  data: {
        labels: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.'],
        datasets: [ {
            label: 'Directas',
            data: [2, 218900, 216789],  //agregar datos de JSON
            backgroundColor: "rgba(245, 122, 10 ,0.2)",
            borderColor: "#F57A0A",
          },
          {
            label: 'Orgnicas',
            data: [12, 601276, 576282],  //agregar datos de JSON
            backgroundColor: "rgba(63, 245, 10,0.2)",
            borderColor: "#3FF50A",
          },
          {
              label: 'Sociales',
              data: [2, 234769, 458910],  //agregar datos de JSON
              backgroundColor: "rgba(52, 152, 219,0.2)",
              borderColor: "#3498db",
          },
          {
              label: 'Email',
              data: [123493, 601276, 576282],  //agregar datos de JSON
              backgroundColor: "rgba(155, 89, 182,0.2)",
              borderColor: "#9B59B6",
          },
          {
              label: 'Referenciales',
              data: [12, 601276, 576282],  //agregar datos de JSON
              backgroundColor: "rgba(241, 196, 15,0.2)",
              borderColor: "#F1C40F",
          }]
        }
});

