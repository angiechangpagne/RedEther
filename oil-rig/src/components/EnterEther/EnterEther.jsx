import React from 'react';
import './styles.scss';

//shape to HEX Code, to enter the block chain
//entry point to the block chain, will hash the HEX code using standard key store,
//the binary form of a login for anonymous users
export const EnterEther = (props) => {
  const strips = [...document.querySelectorAll(".strip")];
  const numberSize = "8"; // in rem
  
  // highlight number i on strip s for 1 second
  function highlight(strip, d) {
    strips[strip]
      .querySelector(`.number:nth-of-type(${d + 1})`)
      .classList.add("pop");
  
    setTimeout(() => {
      strips[strip]
        .querySelector(`.number:nth-of-type(${d + 1})`)
        .classList.remove("pop");
    }, 950); // causes ticking
  }
  
  function stripSlider(strip, number) {
    let d1 = Math.floor(number / 10);
    let d2 = number % 10;
  
    strips[strip].style.transform = `translateY(${d1 * -numberSize}vmin)`;
    highlight(strip, d1);
    strips[strip + 1].style.transform = `translateY(${d2 * -numberSize}vmin)`;
    highlight(strip + 1, d2);
  }
  
  setInterval(() => {
    // get new time
    const time = new Date();
  
    // get h,m,s
    const hours = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();
  
    // slide strips
    stripSlider(0, hours);
    stripSlider(2, mins);
    stripSlider(4, secs);
  
    // highlight numbers
  }, 1000);
  


  return(
    <div>
      mixin strip(x)
  .strip
    - let i = -1;
    while i++ < x
      .number= i

.clock
  .hr
    +strip(2)
    +strip(9)
  .min
    +strip(5)
    +strip(9)
  .sec
    +strip(5)
    +strip(9)
    </div>
  )
}