const imagesLaikes = [
  require('./images/laikes_image1.jpg'),
  require('./images/laikes_image2.jpg'),
  require('./images/laikes_image3.jpg')
]
const imagesAstikes = [
  require('./images/astikes_image1.jpg'),
  require('./images/astikes_image2.jpg'),
  require('./images/astikes_image3.jpg'),
  require('./images/astikes_image4.jpg')
]
const katopsiLaikes = require('./images/laikes_katopsi.png')
const katopsiAstikes = require('./images/astikes_katopsi.png')

const data = {
  "el": {
    "button-select-label": "Επιλογή",
    "button-start-label": "Έναρξη",
    "button-puzzle-choose": "Επιλογή Puzzle",
    "button-puzzle-home-label": "Επιστροφή στην αρχική",
    "button-puzzle-toggle-image-label": "Εμφάνιση εικόνας",
    "button-puzzle-next-label": "Συνέχισε στην επόμενη",
    "puzzle-complete-title": "Συγχαρητήρια τα κατάφερες!",
    "puzzle-complete-subtitle": "Προσπάθησε ξανά με διαφορετική εικόνα",
    "laikes": {
      "title": "Λαϊκές",
      "subtitle": "κατοικίες",
      "description": "Στις παραδοσιακές λαϊκές κατοικίες βλέπει κανείς χαμηλά κτίσματα με ένα ή και δύο ορόφους. Τα <strong>ισόγεια</strong>, με σμυρνέικο στυλ, περιλαμβάνουν κεντρικό διάδρομο με την κουζίνα στο βάθος και δύο ή τέσσερα δωμάτια δεξιά κι αριστερά του διαδρόμου.<br> Στα <strong>διώροφα</strong>, τα «δίπατα», το ισόγειο είναι χαμηλό σε ύψος. Είναι το \"κατώι\" που λειτουργεί ως στάβλος ή αποθήκη. Στο ανώι οδηγεί εσωτερική ή εξωτερική σκάλα. Εκεί βρίσκονται τα υπνοδωμάτια, η κρεβατοκάμαρα για το ζευγάρι κι ένα πιο μεγάλο δωμάτιο, η «μεγάλ’ κάμαρ’» το οποίο χρησιμοποιούσαν για να υποδέχονται τους καλεσμένους, αλλά και για τον ύπνο των παιδιών.<br> Η ανάγκη διαχωρισμού των χώρων και των λειτουργιών του σπιτιού οδήγησαν στη δημιουργία της χαρακτηριστικής <strong>κατοικίας με \"αξάτα\"</strong>, δηλαδή τη μικρή ή μεγαλύτερη υπερυψωμένη βεράντα του σπιτιού, στην οποία οδηγεί εξωτερική πέτρινη σκάλα. Ο όροφος φιλοξενεί και πάλι τα δωμάτια, ενώ στο κατώι βρίσκεται ο στάβλος, και οι αποθήκες ή το μαγειριό, με διαχωρισμένες πλέον εισόδους.<br><br> Τα περισσότερα σπίτια είχαν μια μικρή αυλή ή κήπο, με εξωτερικό φούρνο κι ένα μικρό βοηθητικό «παρασπίτι» για την αποθήκευση προϊόντων και τις βοηθητικές εργασίες.",
      "images": imagesLaikes,
      "katopsi": katopsiLaikes
    },
    "astikes": {
      "title": "Αστικές",
      "subtitle": "κατοικίες",
      "description": "Τα σπίτια των εύπορων οικογενειών, των εμπόρων ή των ανθρώπων που μετανάστευσαν και γύρισαν πλούσιοι είναι μεγάλα με πλούσια διακόσμηση. Συνήθως είναι διώροφα με τέσσερα ή και περισσότερα ευρύχωρα δωμάτια, με εσωτερική ξύλινη σκάλα, με εξώστη και εξωτερικά πέτρινη διακόσμηση.<br><br>Συχνά συναντά κανείς στοιχεία νεοκλασικής αρχιτεκτονικής και σπανιότερα χαρακτηριστικά κατοικιών της ηπειρωτικής Ελλάδας όπως τα \"σαχνισιά\", δηλαδή τις προεξοχές του ορόφου.<br><br>Τα πέτρινα χειροτεχνήματα που διακοσμούν τις αστικές κατοικίες εξυμνούν τις αρετές των ντόπιων μαστόρων της πέτρας.",
      "images": imagesAstikes,
      "katopsi": katopsiAstikes
    }
  },
  "en": {
    "button-select-label": "Select",
    "button-start-label": "Start",
    "button-puzzle-choose": "Choose Puzzle",
    "button-puzzle-home-label": "Back to Home",
    "button-puzzle-toggle-image-label": "Show Image",
    "button-puzzle-next-label": "Next Puzzle",
    "puzzle-complete-title": "Congratulations you did it!",
    "puzzle-complete-subtitle": "Try next Puzzle!",
    "laikes": {
      "title": "Popular",
      "subtitle": "houses",
      "description": "Low buildings with one or two floors is a characteristic of popular houses.<br>The ground level houses, with Smyrna style, include a central corridor with the kitchen at the back and two or four rooms to the right and to the left of the corridor (Type A).<br>In two deck houses, the \"two stories\", the ground floor is low in height. The \"basement\" uses as a stable or warehouse. There is an internal or external staircase leading to the upper floor leads. There are the bedrooms, the bedroom for the couple and a larger room, the “megal’ kamar’” (the large chamber) which was used for receiving guests, and for sleeping room for the children. (Type B)<br>The need for separating spaces and functions of the house led to the creation of the characteristic residence with \"axata\", ie small or larger elevated terrace of the house, which leads to an external stone staircase. The first floor hosts again the rooms, while the basement is the stable, and the warehouses or cooking room, with separate entrances now. (Type C)<br><br>Most homes have a small yard or garden with outdoor oven and a small utility \" house\" for storage products and ancillary works.",
      "images": imagesLaikes,
      "katopsi": katopsiLaikes
    },
    "astikes": {
      "title": "Urban",
      "subtitle": "houses",
      "description": "The houses of affluent families, traders or people who emigrated and returned wealthy are large with rich decoration. Usually two floors with four or more spacious rooms, with wooden internal staircase, with balcony and outdoor stone decoration. (Types D & E)<br><br>It is frequent to find elements of neoclassical architecture and rarely features of residences of the mainland as \"sachnisia\", ie the floor projections.<br><br>The stone artifacts decorating urban houses praise the virtues of local stone masons.",
      "images": imagesAstikes,
      "katopsi": katopsiAstikes
    }
  }
}

export {
  data
}
