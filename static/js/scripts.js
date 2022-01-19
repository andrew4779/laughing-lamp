function checkout() {
    let dye = document.getElementById("dye").checked;
    let braid = document.getElementById("braid").checked;
    let retouch = document.getElementById("re-touch").checked;
    let manicure = document.getElementById("manicure").checked;
    let pedicure = document.getElementById("pedicure").checked;
    console.log(dye, braid, retouch, manicure, pedicure);
    if (
      dye == true &&
      braid == false &&
      retouch == false &&
      manicure == false &&
      pedicure == false
    ) {
      prompt("Where are you located? NB/ OUR TRANSPORT FEE IS FREE WITHIN CBD");
      alert(
        "Our service will be done at your location and it will cost  ksh 500"
      );
    } else if (
      dye == false &&
      braid == true &&
      retouch == false &&
      manicure == false &&
      pedicure == false
    ) {
      prompt("Where are you located? NB/ OUR TRANSPORT FEE IS FREE WITHIN CBD");
      alert(
        "Our service will be done at your location and it will cost  ksh1500"
      );
    } else if (
      dye == false &&
      braid == false &&
      retouch == true &&
      manicure == false &&
      pedicure == false
    ) {
      prompt("Where are you located? NB/ OUR TRANSPORT FEE IS FREE WITHIN CBD");
      alert(
        "Our service will be done at your location and it will cost  ksh 1000"
      );
    } else if (
      dye == false &&
      braid == false &&
      retouch == false &&
      manicure == true &&
      pedicure == false
    ) {
      prompt("Where are you located? NB/ OUR TRANSPORT FEE IS FREE WITHIN CBD");
      alert(
        "Our service will be done at your location and it will cost  ksh 1000"
      );
    } else if (
      dye == false &&
      braid == false &&
      retouch == false &&
      manicure == false &&
      pedicure == true
    ) {
      prompt("Where are you located? NB/ OUR TRANSPORT FEE IS FREE WITHIN CBD");
      alert(
        "Our service will be done at your location and it will cost  ksh 1000"
      );
    }
  }