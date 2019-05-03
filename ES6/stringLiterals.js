const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
    // change code below this line
    const resultDisplayArray = arr.map(element => {
        return `<li class="text-warning">${element}</li>`;
    });

    //IMP to note that map returns a new array and doesnt not modifies the original araay
        // change code above this line
    return resultDisplayArray;
  }
  /**
   * makeList(result.failure) should return:
   * [ `<li class="text-warning">no-var</li>`,
   *   `<li class="text-warning">var-on-top</li>`, 
   *   `<li class="text-warning">linebreak</li>` ]
   **/
  const resultDisplayArray = makeList(result.failure);

  console.log(resultDisplayArray);