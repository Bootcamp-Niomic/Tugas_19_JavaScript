// ====== Tugas 19 JavaScript =====

function init() {
    var data = "Semangat...";
    var data2 = data.repeat(5);
    return data2;
  }
  console.log(init());
  console.log(" ");
  
  a = "*****";
  b = 0;
  c = 1;
  d = 9;
  
  for(i=1; i<=5; i++){
    str = a.repeat(b+c)
    c+=4;
    console.log(str);
  }
  console.log(a.repeat(d+4))
  console.log(a.repeat(d))
  console.log(a.repeat(d-4))
  console.log(a.repeat(d-8))