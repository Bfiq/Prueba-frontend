var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var respuesta = JSON.parse(xhttp.responseText);
          var VTTM = respuesta.VTTM;

          var ts = `<p> ${VTTM[0].valor}</p>`;
          var npxs = `<p> ${VTTM[1].valor}</p>`;

          document.getElementById('ts').innerHTML = ts;
          document.getElementById('npxs').innerHTML = npxs;

        }
      };
      xhttp.open("GET", "datos.json", true);
      xhttp.send()
    /*Por medio de este servicio trate de representar como llegarian los datos .JSON desde un servidor,
      en este caso un servidor local ejecutado con nodeJS*/