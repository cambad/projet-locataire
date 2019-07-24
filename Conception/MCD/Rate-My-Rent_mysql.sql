CREATE DATABASE IF NOT EXISTS `RATE-MY-RENT` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `RATE-MY-RENT`;

CREATE TABLE `ROLE` (
  `code` VARCHAR(42),
  `name` VARCHAR(42),
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `USER` (
  `surname` VARCHAR(42),
  `name` VARCHAR(42),
  `username` VARCHAR(42),
  `age` VARCHAR(42),
  `email` VARCHAR(42),
  `password` VARCHAR(42),
  `isactive` VARCHAR(42),
  `role_json_format` VARCHAR(42),
  `code` VARCHAR(42),
  PRIMARY KEY (`surname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `REVIEW` (
  `title` VARCHAR(42),
  `positive` VARCHAR(42),
  `negative` VARCHAR(42),
  `still_in` VARCHAR(42),
  `created_at` VARCHAR(42),
  `updated_at` VARCHAR(42),
  `adress` VARCHAR(42),
  `surname` VARCHAR(42),
  PRIMARY KEY (`title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `NOTE_REVIEW` (
  `label` VARCHAR(42),
  `title` VARCHAR(42),
  `number` VARCHAR(42),
  PRIMARY KEY (`label`, `title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `NOTE` (
  `label` VARCHAR(42),
  `label_1` VARCHAR(42),
  PRIMARY KEY (`label`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*
CREATE TABLE `CATEGORY` (
  `label` VARCHAR(42),
  PRIMARY KEY (`label`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
*/

CREATE TABLE `APPARTMENT` (
  `adress` VARCHAR(42),
  `floor_number` VARCHAR(42),
  `location` VARCHAR(42),
  `area` VARCHAR(42),
  `rooms` VARCHAR(42),
  `rental` VARCHAR(42),
  PRIMARY KEY (`adress`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `USER` ADD FOREIGN KEY (`code`) REFERENCES `ROLE` (`code`);
ALTER TABLE `REVIEW` ADD FOREIGN KEY (`surname`) REFERENCES `USER` (`surname`);
ALTER TABLE `REVIEW` ADD FOREIGN KEY (`adress`) REFERENCES `APPARTMENT` (`adress`);
ALTER TABLE `NOTE_REVIEW` ADD FOREIGN KEY (`title`) REFERENCES `REVIEW` (`title`);
ALTER TABLE `NOTE_REVIEW` ADD FOREIGN KEY (`label`) REFERENCES `NOTE` (`label`);
-- ALTER TABLE `NOTE` ADD FOREIGN KEY (`label_1`) REFERENCES `CATEGORY` (`label`);