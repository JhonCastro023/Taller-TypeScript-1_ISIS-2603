import { series } from "./data.js";
const tableBody = document.getElementById("seriesTbody");
const averageSeasonsElement = document.getElementById("averageSeasons");
series.forEach(serie => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${serie.id}</td>
    <td>
      <a href="${serie.url}" target="_blank" style="text-decoration: none; color: #0d6efd;">
        ${serie.name}
      </a>
    </td>
    <td>${serie.channel}</td>
    <td>${serie.seasons}</td>
  `;
    tableBody.appendChild(row);
});
const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
const averageSeasons = totalSeasons / series.length;
averageSeasonsElement.textContent = `Seasons average: ${averageSeasons.toFixed(0)}`;
