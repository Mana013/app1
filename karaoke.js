function calculate() {
    const rateElements = document.getElementsByName("rate");
    let rate = 120;
    let hours = 0;
  
    if (rateElements[1].checked) {
      rate = 80;
      hours = parseInt(document.getElementById("hours2").value);
    } else {
      rate = 120;
      hours = parseInt(document.getElementById("hours1").value);
    }
  
    if (isNaN(hours) || hours === 0) {
      alert("กรุณากรอกจำนวนชั่วโมง");
      return;
    }
  
    const total = rate * hours;
    document.getElementById("total").value = total;
  
    // ทำ input เป็น readonly
    document.getElementById("hours1").readOnly = true;
    document.getElementById("hours2").readOnly = true;
  }
  