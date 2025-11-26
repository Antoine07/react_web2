function getUser(id, callback) {
    setTimeout(() => {
      console.log("User récupéré");
      callback(null, { id, name: "Alice" });
    }, 500);
  }
  
  function getOrders(userId, callback) {
    setTimeout(() => {
      console.log("Commandes récupérées");
      callback(null, [{ id: 1, userId }, { id: 2, userId }]);
    }, 500);
  }
  
  function getOrderDetails(orderId, callback) {
    setTimeout(() => {
      console.log("Détails commande récupérés");
      callback(null, { id: orderId, items: ["A", "B"] });
    }, 500);
  }
  
  // Callback hell : pyramide de callbacks imbriqués
  getUser(42, (err, user) => {
    if (err) return console.error(err);
  
    getOrders(user.id, (err, orders) => {
      if (err) return console.error(err);
  
      getOrderDetails(orders[0].id, (err, details) => {
        if (err) return console.error(err);
  
        console.log("Résultat final :", {
          user,
          firstOrder: details,
        });
      });
    });
  });
  