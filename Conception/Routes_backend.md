# Routes backend

## API endpoints

| Endpoint | Méthode HTTP | Donnée(s) | Description |
|--|--|--|--|
| `/api/five_apartments` | GET | - | Sending the last five apartment with there marks |
| `/api/{id}/apartment` | GET | - | Sending all informations from Apartment entity for an id (general informations, reviews, marks) |
| `/api/apartment/markers` | GET | - | Sending informations from Apartment entity and the title of the associate reviews |
| `/api/{id}/user` | GET | - | Sending informations from User entity with an id |
| `/api/{id}/user/reviews` | GET | - | Sending reviews informations by user id |

## Form reception
| Endpoint | Méthode HTTP | Donnée(s) | Description |
|--|--|--|--|
| `/api/apartment/new` | POST | All the data from the form | Recieve all the data from inputs of the form, translated in JSON |
| `/api/register` | POST | All the data from the form | Recieve all the data from inputs of the form, translated in JSON |
| `/api/login` | POST | - | - |


## Routes

| URL | Title | Description of the page | Method HTTP |
|--|--|--|--|
| `/` | Home of the Backoffice | - | GET |
| `/admin` | Admin home (protected for the loged people) | - | GET |
| `/admin/apartment` | Apartment index | All the apartments | GET |
| `/admin/apartment/{id}` | Apartment show | One apartment detail | GET |
| `/admin/apartment/{id}/delete` | Delete an apartment | Button to delete an apartment and his reviews | DELETE |
| `/admin/review` | Review index | All the reviews | GET |
| `/admin/review/{id}` | Review show |One review detail | GET |
| `/admin/review/{id}/delete` | Delete a review | Button to delete a review | DELETE |
| `/admin/user` | User index | All the users | GET |
| `/admin/user/{id}/delete` | Delete a user | Button to delete a user | DELETE |


