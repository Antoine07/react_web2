function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("User récupéré");
            resolve({ id, name: "Alice" });
        }, 500);
    });
}

function getOrders(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Commandes récupérées");
            resolve([{ id: 1, userId }, { id: 2, userId }]);
        }, 500);
    });
}

function getOrderDetails(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Détails commande récupérés");
            resolve({ id: orderId, items: ["A", "B"] });
        }, 500);
    });
}

getUser(42)
  .then(user => {
    return getOrders(user.id).then(orders => ({ user, orders }));
  })
  .then(({ user, orders }) => {
    return getOrderDetails(orders[0].id).then(details => ({
      user,
      firstOrder: details,
    }));
  })
  .then(result => {
    console.log("Résultat final :", result);
  })
  .catch(err => {
    console.error("Erreur :", err);
  });
