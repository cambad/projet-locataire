# Dictionnaire de données

## Entitées
- Role
- User
- Category
- Note
- Note_Review
- Review
- Apartment 

## Entité Role
Name|Description|Type|Specificity 
-|-|-|-
| id | - | INT | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT |
| code | Role’s code | VARCHAR(64) | NOT NULL
| name | Role’s name | VARCHAR(64) | NOT NULL

## Entité User
Name|Description|Type|Specificity
-|-|-|-
| id | - | INT | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT |
| surname | User’s surname | VARCHAR(64) | NOT NULL
| name |User’s name | VARCHAR(64) | NOT NULL
| username | User’s username | VARCHAR(32) | NOT NULL
| age | User’s age | INT | NOT NULL
| email | User’s email | VARCHAR(254) | NOT NULL
| password | User’s password | VARCHAR(64) | NOT NULL
| is_active | - | TINYINT(1) | NOT NULL
| role_json_format | role in json format | VARCHAR(254) | NOT NULL

## Entité Category
Name|Description|Type|Specificity
-|-|-|-
| id | - | INT | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT |
| label | Category’s label | VARCHAR(64) | NOT NULL

## Entité Note
Name|Description|Type|Specificity
-|-|-|-
| id | - | INT | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT |
| label | Note’s label | VARCHAR(64) | NOT NULL

## Entité Note_Review
Name|Description|Type|Specificity
-|-|-|-
| number | Rating (between 1 and 5) | TINYINT | NOT NULL, DEFAULT 1

## Entité Apartment 
Name|Description|Type|Specificity
-|-|-|-
| id | - | INT | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT |
| address | Apartment’s address | VARCHAR(254) | NOT NULL
| floor_number | Apartment’s floor number | INT | NOT NULL
| location | Where is the apartment on this floor | VARCHAR(254) | NOT NULL
| area | The apartment’s area | INT | NOT NULL
| rooms | Number of rooms on the apartment | INT | NOT NULL
| rental | Price of the apartment for a month | INT | NOT NULL

## Entité Review
Name|Description|Type|Specificity
-|-|-|-
| id | - | INT | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT |
| title | Review’s title | VARCHAR(254) | NOT NULL
| positive | positive Review | TEXT | NOT NULL
| negative | negative Review | TEXT | NOT NULL
| still_in | Check if the tenant is still inside of the apartment | BOOLEAN | NOT NULL
| created_at | Creation date | DATETIME | NOT NULL 
| updated_at | - | DATETIME | NULL


