# Routes backend

## API endpoints

| Endpoint | Méthode HTTP | Donnée(s) | Description |
|--|--|--|--|
| `rate-my-rent/api/navigation` | GET | - | Récupération des données de navigation |
| `rate-my-rent/api/reviews` | GET | - | Récupération des données de tous les avis |
| `rate-my-rent/api/review/[id]` | GET | - | Récupération d'un avis de un appartement dont l'id est fourni |
| `rate-my-rent/api/review/[id]/update` | GET | - | Modification des données de l'avis dont l'id est fourni |
| `rate-my-rent/api/reviews/orderbytown` | GET | - | Récupération des données de tous les avis pour une ville donnée |
| `rate-my-rent/api/reviews/orderbyrate` | GET | - | Récupération des données de tous les avis trié par note |
| `rate-my-rent/api/user` | GET | - | Récupération des données d'un utilisateur |
| `rate-my-rent/api/user/update` | GET | - | Modification des données d'un utilisateur |