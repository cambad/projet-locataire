# Routes backend

## API endpoints

| Endpoint | Méthode HTTP | Donnée(s) | Description |
|--|--|--|--|
| `/navigation` | GET | - | Récupération des données de navigation |
| `/reviews` | GET | - | Récupération des données de tous les avis |
| `/review/[id]` | GET | - | Récupération d'un avis de un appartement dont l'id est fourni |
| `/review/[id]/update` | GET | - | Modification des données de l'avis dont l'id est fourni |
| `/reviews/orderbytown` | GET | - | Récupération des données de tous les avis pour une ville donnée |
| `/reviews/orderbyrate` | GET | - | Récupération des données de tous les avis trié par note |
| `/user` | GET | - | Récupération des données d'un utilisateur |
| `/user/update` | GET | - | Modification des données d'un utilisateur |