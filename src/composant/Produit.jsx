import React from "react";
import ProduitDetail from "./ProduitDetail";

const data = {
    "nom": "Riziere",
    "prix":700,
    "poids":1,
}

function Produit() {
  return (
    <div><ProduitDetail data={data} />
    </div>
  )
}

export default Produit