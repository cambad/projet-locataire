# Dictionnaire de données

## Entitées
- User
- Review
- Apartment 
- Marks

## Entité User
Name|Description|Type|Specificity
-|-|-|-
| id | - | INT | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT |
| username | - | VARCHAR(180) | NOT NULL
| username_canonical | - | VARCHAR(180) | NOT NULL
| email | - | VARCHAR(180) | NOT NULL
| email_canonical | - | VARCHAR(180) | NOT NULL
| enabled | - | TINYINT(1) | NOT NULL
| salt | - | VARCHAR(255) | NULL
| password | - | VARCHAR(255) | NOT NULL
| last_login | - | DATETIME | NULL
| confirmation_token | - | VARCHAR(180) | NULL
| password_requested_at | - | DATETIME | NULL
| roles | - | TEXT | NOT NULL
| surname | - | VARCHAR(255) | NOT NULL
| name |- | VARCHAR(255) | NOT NULL

## Entité Apartment 
Name|Description|Type|Specificity
-|-|-|-
| id | - | INT | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT |
| address | - | VARCHAR(256) | NOT NULL
| floor_number | - | INT | NOT NULL
| location | Where is the apartment on this floor | VARCHAR(128) | NOT NULL
| area | - | INT | NOT NULL
| rooms | Number of rooms on the apartment | INT | NOT NULL
| rental | Price of the apartment for a month | INT | NOT NULL
| lat | The latitude of the apartment | DOUBLE | NOT NULL
| lng | The longitude of the apartment | DOUBLE | NOT NULL

## Entité Review
Name|Description|Type|Specificity
-|-|-|-
| id | - | INT | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT |
| title | - | VARCHAR(256) | NOT NULL
| positive | - | TEXT | NOT NULL
| negative | - | TEXT | NOT NULL
| still_in | Check if the tenant is still inside of the apartment | TINYINT | NOT NULL
| tenant | Check if it's a tenant or a visitor | TINYINT | NOT NULL
| created_at | - | DATETIME | NOT NULL 
| updated_at | - | DATETIME | NULL

## Entité Marks
Name|Description|Type|Specificity
-|-|-|-
| id | - | INT | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT |
| recommendation | - | INT | NULL
| exterior | - | INT | NULL
| interior | - | INT | NULL
| contact | - | INT | NULL
| accessibility | - | INT | NULL
| apartment_environment | - | INT | NULL
| traffic | - | INT | NULL
| exterior_building | - | INT | NULL
| building_environment | - | INT | NULL
| insulation | - | INT | NULL
| cleanliness | - | INT | NULL
| brightness | - | INT | NULL
| first_contact | - | INT | NULL
| contact_quality | - | INT | NULL

