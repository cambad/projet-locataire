CREATE DATABASE IF NOT EXISTS `RATE-MY-RENT` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `RATE-MY-RENT`;

CREATE TABLE `USER` (
  `username` VARCHAR(42),
  `username_canonical` VARCHAR(42),
  `email` VARCHAR(42),
  `email_canonical` VARCHAR(42),
  `enabled` VARCHAR(42),
  `salt` VARCHAR(42),
  `password` VARCHAR(42),
  `last_login` VARCHAR(42),
  `confirmation_token` VARCHAR(42),
  `password_requested_at` VARCHAR(42),
  `roles` VARCHAR(42),
  `surname` VARCHAR(42),
  `name` VARCHAR(42),
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `REVIEW` (
  `title` VARCHAR(42),
  `positive` VARCHAR(42),
  `negative` VARCHAR(42),
  `still_in` VARCHAR(42),
  `tenant` VARCHAR(42),
  `created_at` VARCHAR(42),
  `updated_at` VARCHAR(42),
  `adress` VARCHAR(42),
  `username` VARCHAR(42),
  PRIMARY KEY (`title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `MARKS` (
  `recommendation` VARCHAR(42),
  `exterior` VARCHAR(42),
  `interior` VARCHAR(42),
  `contact` VARCHAR(42),
  `accessibility` VARCHAR(42),
  `apartment_environment` VARCHAR(42),
  `traffic` VARCHAR(42),
  `exterior_building` VARCHAR(42),
  `building_environment` VARCHAR(42),
  `insulation` VARCHAR(42),
  `cleanliness` VARCHAR(42),
  `brightness` VARCHAR(42),
  `first_contact` VARCHAR(42),
  `contact_quality` VARCHAR(42),
  `title` VARCHAR(42),
  PRIMARY KEY (`recommendation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `APPARTMENT` (
  `adress` VARCHAR(42),
  `floor_number` VARCHAR(42),
  `location` VARCHAR(42),
  `area` VARCHAR(42),
  `rooms` VARCHAR(42),
  `rental` VARCHAR(42),
  `lat` VARCHAR(42),
  `lng` VARCHAR(42),
  PRIMARY KEY (`adress`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `REVIEW` ADD FOREIGN KEY (`username`) REFERENCES `USER` (`username`);
ALTER TABLE `REVIEW` ADD FOREIGN KEY (`adress`) REFERENCES `APPARTMENT` (`adress`);
ALTER TABLE `MARKS` ADD FOREIGN KEY (`title`) REFERENCES `REVIEW` (`title`);