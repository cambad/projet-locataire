<?php

namespace App\DataFixtures;

use Faker\Factory;
use Faker\ORM\Doctrine\Populator;

use App\Entity\Role;
use App\Entity\User;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    private $passwordEncoder;

    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }

    public function load(ObjectManager $manager)
    {
        $generator = Factory::create('fr_FR');
        $populator = new Populator($generator, $manager);

        $populator->addEntity('App\Entity\Apartment', 20, [
            'adress' => function() use($generator) { return $generator->address;},
            'floor_number' => function() use($generator) { return $generator->numberBetween(0, 5);},
            'location' => function() use($generator) { return $generator->dayOfMonth();},
            'area' => function() use($generator) { return $generator->numberBetween(15, 99);},
            'rooms' => function() use($generator) { return $generator->numberBetween(1, 4);},
            'rental' => function() use($generator) { return $generator->numberBetween(150, 1500);},
            'lat' => function() use($generator) { return $generator->latitude(40, 50);},
            'lng' => function() use($generator) { return $generator->longitude(-4, 7);},
        ]);

        $populator->addEntity('App\Entity\Review', 20, [
            'title' => function() use($generator) { return $generator->sentence(4, false); },
            'positive' => function() use($generator) { return $generator->paragraph(5); },
            'negative' => function() use($generator) { return $generator->paragraph(5); },
            'still_in' => function() use($generator) { return $generator->numberBetween(0, 1); },
        ]);

        $populator->execute();

        $roleAdmin = new Role();
        $roleAdmin->setCode('ROLE_ADMIN');
        $roleAdmin->setName('Admin');

        $roleModerator = new Role();
        $roleModerator->setCode('ROLE_MODERATOR');
        $roleModerator->setName('Modérateur');

        $roleMember = new Role();
        $roleMember->setCode('ROLE_MEMBER');
        $roleMember->setName('Utilisateur');

        $manager->persist($roleMember);
        $manager->persist($roleModerator);
        $manager->persist($roleAdmin);

        $userAdmin = new User();
        $userAdmin->setSurname('John');
        $userAdmin->setName('Doe');
        $userAdmin->setUsername('admin');
        $userAdmin->setAge(26);
        $userAdmin->setEmail('admin@admin.com');
        $userAdmin->setUsername('admin');
        $encodedPassword = $this->passwordEncoder->encodePassword($userAdmin, 'admin');
        $userAdmin->setPassword($encodedPassword);
        $userAdmin->setRoleJsonFormat('ROLE_ADMIN');
        $userAdmin->setRole($roleAdmin);

        $userModerator = new User();
        $userModerator->setEmail('moderator@moderator.com');
        $userModerator->setUsername('moderator');
        $userModerator->setSurname('John');
        $userModerator->setName('Doe1');
        $userModerator->setAge(30);
        $encodedPassword = $this->passwordEncoder->encodePassword($userModerator, 'moderator');
        $userModerator->setPassword($encodedPassword);
        $userModerator->setRoleJsonFormat('ROLE_MODERATOR');
        $userModerator->setRole($roleModerator);

        $userMember = new User();
        $userMember->setEmail('user@user.com');
        $userMember->setUsername('member');
        $userMember->setSurname('John');
        $userMember->setName('Doe2');
        $userMember->setAge(28);
        $encodedPassword = $this->passwordEncoder->encodePassword($userMember, 'password');
        $userMember->setPassword($encodedPassword);

        $userMember->setRoleJsonFormat('ROLE_MEMBER');
        $userMember->setRole($roleMember);

        $userMember1 = new User();
        $userMember1->setEmail('user1@user.com');
        $userMember1->setUsername('member1');
        $userMember1->setSurname('John');
        $userMember1->setName('Doe3');
        $userMember1->setAge(55);
        $encodedPassword = $this->passwordEncoder->encodePassword($userMember1, 'password');
        $userMember1->setPassword($encodedPassword);

        $userMember1->setRoleJsonFormat('ROLE_MEMBER');
        $userMember1->setRole($roleMember);

        $userMember2 = new User();
        $userMember2->setEmail('user2@user.com');
        $userMember2->setUsername('member2');
        $userMember2->setSurname('John');
        $userMember2->setName('Doe4');
        $userMember2->setAge(45);
        $encodedPassword = $this->passwordEncoder->encodePassword($userMember2, 'password');
        $userMember2->setPassword($encodedPassword);

        $userMember2->setRoleJsonFormat('ROLE_MEMBER');
        $userMember2->setRole($roleMember);

        $manager->persist($userAdmin);
        $manager->persist($userModerator);
        $manager->persist($userMember);
        $manager->persist($userMember1);
        $manager->persist($userMember2);


        $manager->flush();
    }
}
