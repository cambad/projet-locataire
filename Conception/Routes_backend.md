# Routes backend

## API endpoints

| Endpoint | Méthode HTTP | Donnée(s) | Description |
|--|--|--|--|
| `rate-my-rent/api/five_apartments` | GET | - | Récupération des données des cinq derniers appartement rentrée en base de données |
| `rate-my-rent/api/[id]/apartment` | GET | - | Récupération des données d'un appartement (informations générales, avis, notes) |
| `rate-my-rent/api/[id]/review` | GET | - | Récupération d'un avis de un appartement dont l'id est fourni |
| `rate-my-rent/api/[id]/marker` | GET | - | Récupération des données pour un marqueur en fonction de l'id de l'appartement |
| `rate-my-rent/api/user` | GET | - | Récupération des données d'un utilisateur |


## Routes

| URL | Title | Description of the page | Method HTTP |
|--|--|--|--|
| `/admin/apartment` | Apartment index | All the apartments | GET |
| `/admin/apartment/{id}/delete` | Delete an apartment | Button to delete an apartment and his reviews | POST |
| `/admin/review` | Review index | All the reviews | GET |
| `/admin/review/{id}/delete` | Delete a review | Button to delete a review | POST |
| `/admin/user` | User index | All the users | GET |
| `/admin/user/{id}/delete` | Delete a user | Button to delete a user | POST |
| /`admin/user/{id}/update` | Update a user | Update a user with a form | POST |


