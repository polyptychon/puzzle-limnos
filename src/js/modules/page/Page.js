import React from 'react'

const images = [
  require('./images/laikes_katopsi.png'),
  require('./images/astikes_katopsi.png')
]

const txt = `Τα σπίτια των εύπορων οικογενειών, των εμπόρων ή των ανθρώπων που μετανάστευσαν και γύρισαν πλούσιοι είναι μεγάλα με πλούσια διακόσμηση. Συνήθως είναι διώροφα με τέσσερα ή και περισσότερα ευρύχωρα δωμάτια, με εσωτερική ξύλινη σκάλα, με εξώστη και εξωτερικά πέτρινη διακόσμηση. (Τύποι Δ & Ε)
Συχνά συναντά κανείς στοιχεία νεοκλασικής αρχιτεκτονικής και σπανιότερα χαρακτηριστικά κατοικιών της ηπειρωτικής Ελλάδας όπως τα "σαχνισιά", δηλαδή τις προεξοχές του ορόφου.
Τα πέτρινα χειροτεχνήματα που διακοσμούν τις αστικές κατοικίες εξυμνούν τις αρετές των ντόπιων μαστόρων της πέτρας.`

require('./styles.scss')

const Page = ({image, text}) => (
  <div className="content">
    <div className="content-image">
      <img src={image || images[1]} alt={image || images[0]} />
    </div>
    <div className="content-text">{text || txt}</div>
  </div>
)

export default Page
