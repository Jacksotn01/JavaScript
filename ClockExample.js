// we need to get the time somehow
// ??? how to draw the clock on the HTML page
// some of kind of loop to redraw clock

// change css using jquery
// $("#txt").css({ color: "blue", fontSize: "25px" });

// 4 / 2 = 2
// 4 / 3 = 1 R1

// 4 % 2 = 0
// 4 % 3 = 1

// 2 % 2 = 0
// 3 % 2 = 1

// if a number is even then % with 2 will return 0
// otherwise if a number is odd then % with 2 will return 1

$(document).ready(function() {
  function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      var ampm = isAMorPM(h);
      h = changeMilitary(h);
      m = checkTime(m);
      s = checkTime(s);
      $('#txt').html(h + ":" + m + ":" + s + ampm);
      oddEven(m); background(m); changeFont(h);
      setTimeout(startTime, 500);
  }

  function isAMorPM(i) {
    var value;
    if (i >= 12) {
      value = "PM"
    } else {
      value = "AM"
    }
    return value;
  }

  function changeMilitary(i) {
    if (i > 12) {
      i = i - 12;
    }
    return i;
  }

  function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
  }

  startTime();

  function oddEven(i){
    if (i % 2 === 0) {
      $("#txt").css ({
        color: "pink"
      })
    }  else {
      $("#txt").css ({
        color: "red"
      })
    }
}
    function background(i){
      if (i <= 5 || i > 10 && i < 15 || i >= 20 && i <= 25 || i > 35 && i < 40 || i > 50 && i < 55){
        $("body").css ({
          backgroundColor: "green"
        })
      } else 
        $("body").css ({
          backgroundColor: "purple"
        })
      }

    function changeFont (i) {
      console.log(i)
      var font = [30,38,40,44,50,55,60,62,66,70,74,82,84];
        $("#txt").css({
          fontSize: (font[parseInt(i-1)])
          // parseInt takes whatever you give it and converts it into a full number

        })
        
     


    }

        })
// })
// if (i => 5 && i < 10|| i > 15 && i < 20 || ) {