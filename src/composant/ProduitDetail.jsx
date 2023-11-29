import React from 'react'

function ProduitDetail(props) {
    //const{ nom, prix, poids} = props.data;
  return (
    <div>
        <strong>Nom du produit: {props.data.nom}</strong><br/>
        <strong>Prix du produit: {props.data.prix}</strong><br/>
        <strong>Poids du produit: {props.data.poids}</strong>
    </div>
  )
}

export default ProduitDetail