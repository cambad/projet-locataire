# Routes backend

## API endpoints

| Endpoint | Méthode HTTP | Donnée(s) | Description |
|--|--|--|--|
| `/api/five_apartments` | GET | - | Sending the last five apartment with there marks |
| `/api/[id]/apartment` | GET | - | Sending all informations from Apartment entity for an id (general informations, reviews, marks) |
| `/api/[id]/review` | GET | - | Sending all informations from Review entity for an id |
| `/api/apartment/marker` | GET | - | Sending informations from Apartment entity and the title of the associate reviews |
| `/api/[id]/user` | GET | - | Sending informations from User entity with an id |
| `/api/[id]/user/reviews` | GET | - | Sending reviews informations by user id |

## Form reception
| Endpoint | Méthode HTTP | Donnée(s) | Description |
|--|--|--|--|
| `/api/apartment/new` | POST | All the data from the form | Recieve all the data from inputs of the form, translated in JSON |
| `/api/register` | POST | All the data from the form | Recieve all the data from inputs of the form, translated in JSON |
| `/api/login` | POST |  |  |


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


