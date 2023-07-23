"use strict";

const btnNewQuote = document.getElementById("btn-new-quote");
const quoteContainer = document.getElementById("quote-container");

// fetching data from kanye
fetch("https://api.kanye.rest/")
  .then((res) => res.json())
  .then((data) => displayQuote(data));

const displayQuote = (data) => {
  const html = `
      <p>
      <i class="ri-double-quotes-l"></i>
      ${data.quote}
      <i class="ri-double-quotes-r"></i>
    </p>
      `;
  quoteContainer.insertAdjacentHTML("afterbegin", html);
};

btnNewQuote.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.reload();
});
