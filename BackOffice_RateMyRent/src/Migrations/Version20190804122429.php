<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190804122429 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE marks (id INT AUTO_INCREMENT NOT NULL, review_id INT DEFAULT NULL, recommendation INT DEFAULT NULL, exterior INT DEFAULT NULL, interior INT DEFAULT NULL, contact INT DEFAULT NULL, accessibility INT DEFAULT NULL, apartment_environment INT DEFAULT NULL, traffic INT DEFAULT NULL, exterior_building INT DEFAULT NULL, building_environment INT DEFAULT NULL, insulation INT DEFAULT NULL, cleanliness INT DEFAULT NULL, brightness INT DEFAULT NULL, first_contact INT DEFAULT NULL, contact_quality INT DEFAULT NULL, INDEX IDX_3C6AFA533E2E969B (review_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE marks ADD CONSTRAINT FK_3C6AFA533E2E969B FOREIGN KEY (review_id) REFERENCES review (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE marks');
    }
}
