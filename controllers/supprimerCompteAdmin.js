/**
 * @file controller/supprimerCompteAdmin.js
 * @author Hugo CIRETTE
 */

const { Admins } = require('../databaseConnection');

//! Ne marche pas
module.exports = async (idAdmin) => {
  // Supprime l'admin via son id
  await Admins.destroy({
    where: {
      admins_id: idAdmin
    }
  });
};