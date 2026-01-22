const SCRIPT_URL = "PASTE_YOUR_WEB_APP_URL_HERE";

document.getElementById("transactionForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    let type = document.getElementById("type").value;
    let amount = Number(document.getElementById("amount").value);

    if (type !== "Income") amount = -Math.abs(amount);

    const data = {
      type,
      category: category.value,
      description: description.value,
      amount
    };

    await fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(data)
    });

    alert("Transaction Added!");
    e.target.reset();
});
