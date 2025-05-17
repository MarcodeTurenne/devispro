function calculerDevis() {
  const client = document.getElementById("client").value;
  const jours = parseInt(document.getElementById("jours").value, 10);
  if (!client || isNaN(jours)) return alert("Remplir tous les champs");

  const salaire = jours * 120;
  const urssaf = salaire * 0.10;
  const cotisations = salaire * 0.211;
  const usure = 300;
  const gasoil = 200;
  const retraite = 250;
  const autres = 150;
  const marge = 500;
  const total = salaire + urssaf + cotisations + usure + gasoil + retraite + autres + marge;

  const resume = `
    <strong>Client:</strong> ${client}<br/>
    <strong>Jours:</strong> ${jours}<br/>
    <strong>Salaire:</strong> ${salaire.toFixed(2)} €<br/>
    <strong>URSSAF:</strong> ${urssaf.toFixed(2)} €<br/>
    <strong>Cotisations:</strong> ${cotisations.toFixed(2)} €<br/>
    <strong>Usure:</strong> ${usure} €<br/>
    <strong>Gasoil:</strong> ${gasoil} €<br/>
    <strong>Retraite:</strong> ${retraite} €<br/>
    <strong>Autres:</strong> ${autres} €<br/>
    <strong>Marge:</strong> ${marge} €<br/>
    <strong>Total:</strong> ${total.toFixed(2)} €<br/>
  `;
  document.getElementById("resume").innerHTML = resume;

  const ul = document.getElementById("liste-devis");
  const li = document.createElement("li");
  li.textContent = `${client} — ${jours} jours — ${total.toFixed(2)} €`;
  ul.appendChild(li);
}

function exportPDF() {
  alert("Fonction d’export PDF à intégrer ici.");
}
