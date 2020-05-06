let delayCount = 1000;
 let inputTime = process.argv;

 const timer= function () {

  for (let i = 2; i < inputTime.length; i++) {
    if (inputTime[i] >= 0 && inputTime[i] !== NaN) {
      setTimeout (() => {
        process.stdout.write('.');
      }, delayCount * inputTime[i]);
    }
  }
 };
  timer(inputTime);

