const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
 
  const prices = document.querySelectorAll(".price");

  let total = 0;

  prices.forEach((p) => {
    total += Number(p.textContent);
  });

  const table = document.querySelector("table");

  // ✅ prevent duplicate total row
  if (document.getElementById("total-row")) return;

  const tr = document.createElement("tr");
  tr.id = "total-row";

  const td = document.createElement("td");
  td.colSpan = 2;
  td.textContent = `Total Price = ${total}`;

  tr.appendChild(td);
  table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);
