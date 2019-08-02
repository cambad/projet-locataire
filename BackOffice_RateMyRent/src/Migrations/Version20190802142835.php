<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190802142835 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE role (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(64) NOT NULL, name VARCHAR(64) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE note (id INT AUTO_INCREMENT NOT NULL, category_id INT DEFAULT NULL, label VARCHAR(64) NOT NULL, INDEX IDX_CFBDFA1412469DE2 (category_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE note_review (note_id INT NOT NULL, review_id INT NOT NULL, INDEX IDX_6191D61226ED0855 (note_id), INDEX IDX_6191D6123E2E969B (review_id), PRIMARY KEY(note_id, review_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE app_user (id INT AUTO_INCREMENT NOT NULL, role_id INT DEFAULT NULL, surname VARCHAR(64) NOT NULL, name VARCHAR(64) NOT NULL, username VARCHAR(32) NOT NULL, age INT NOT NULL, email VARCHAR(254) NOT NULL, password VARCHAR(64) NOT NULL, is_active TINYINT(1) NOT NULL, role_json_format VARCHAR(256) NOT NULL, UNIQUE INDEX UNIQ_88BDF3E9F85E0677 (username), UNIQUE INDEX UNIQ_88BDF3E9E7927C74 (email), INDEX IDX_88BDF3E9D60322AC (role_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE review (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, apartment_id INT DEFAULT NULL, title VARCHAR(256) NOT NULL, positive LONGTEXT NOT NULL, negative LONGTEXT NOT NULL, still_in TINYINT(1) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_794381C6A76ED395 (user_id), INDEX IDX_794381C6176DFE85 (apartment_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, label VARCHAR(64) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE apartment (id INT AUTO_INCREMENT NOT NULL, address VARCHAR(256) NOT NULL, floor_number INT NOT NULL, location VARCHAR(256) NOT NULL, area INT NOT NULL, rooms INT NOT NULL, rental INT NOT NULL, lat DOUBLE PRECISION NOT NULL, lng DOUBLE PRECISION NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE note ADD CONSTRAINT FK_CFBDFA1412469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE note_review ADD CONSTRAINT FK_6191D61226ED0855 FOREIGN KEY (note_id) REFERENCES note (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE note_review ADD CONSTRAINT FK_6191D6123E2E969B FOREIGN KEY (review_id) REFERENCES review (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE app_user ADD CONSTRAINT FK_88BDF3E9D60322AC FOREIGN KEY (role_id) REFERENCES role (id)');
        $this->addSql('ALTER TABLE review ADD CONSTRAINT FK_794381C6A76ED395 FOREIGN KEY (user_id) REFERENCES app_user (id)');
        $this->addSql('ALTER TABLE review ADD CONSTRAINT FK_794381C6176DFE85 FOREIGN KEY (apartment_id) REFERENCES apartment (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE app_user DROP FOREIGN KEY FK_88BDF3E9D60322AC');
        $this->addSql('ALTER TABLE note_review DROP FOREIGN KEY FK_6191D61226ED0855');
        $this->addSql('ALTER TABLE review DROP FOREIGN KEY FK_794381C6A76ED395');
        $this->addSql('ALTER TABLE note_review DROP FOREIGN KEY FK_6191D6123E2E969B');
        $this->addSql('ALTER TABLE note DROP FOREIGN KEY FK_CFBDFA1412469DE2');
        $this->addSql('ALTER TABLE review DROP FOREIGN KEY FK_794381C6176DFE85');
        $this->addSql('DROP TABLE role');
        $this->addSql('DROP TABLE note');
        $this->addSql('DROP TABLE note_review');
        $this->addSql('DROP TABLE app_user');
        $this->addSql('DROP TABLE review');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE apartment');
    }
}
