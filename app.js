"use strict";

const stardateElement = document.getElementById("stardate");
const yearElement = document.getElementById("current-year");

function calculateStardate(date = new Date()) {
  const year = date.getFullYear();

  const startOfYear = new Date(year, 0, 1);
  const startOfNextYear = new Date(year + 1, 0, 1);

  const millisecondsIntoYear = date - startOfYear;
  const millisecondsInYear = startOfNextYear - startOfYear;

  const yearProgress =
    millisecondsIntoYear / millisecondsInYear;

  const stardate =
    ((year - 2000) * 1000) +
    (yearProgress * 1000);

  return stardate.toFixed(1);
}

function updateStardate() {
  if (!stardateElement) {
    return;
  }

  const stardate = calculateStardate();

  stardateElement.textContent =
    `STARDATE ${stardate}`;
}

function updateYear() {
  if (!yearElement) {
    return;
  }

  yearElement.textContent =
    `© ${new Date().getFullYear()}`;
}

updateStardate();
updateYear();

setInterval(updateStardate, 60000);