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
        ]);

        $populator->addEntity('App\Entity\Review', 20, [
            'title' => function() use($generator) { return $generator->sentence(6, false); },
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
        $userAdmin->setEmail('admin@admin.com');
        $userAdmin->setUsername('admin');

        $encodedPassword = $this->passwordEncoder->encodePassword($userAdmin, 'admin');
        $userAdmin->setPassword($encodedPassword);

        $userAdmin->setRoleJsonFormat('ROLE_ADMIN');
        $userAdmin->setRole($roleAdmin);

        $userModerator = new User();
        $userModerator->setEmail('moderator@moderator.com');
        $userModerator->setUsername('moderator');

        $encodedPassword = $this->passwordEncoder->encodePassword($userModerator, 'moderator');
        $userModerator->setPassword($encodedPassword);

        $userModerator->setRoleJsonFormat('ROLE_MODERATOR');
        $userModerator->setRole($roleModerator);

        $userMember = new User();
        $userMember->setEmail('user@user.com');
        $userMember->setUsername('member');

        $encodedPassword = $this->passwordEncoder->encodePassword($userMember, 'password');
        $userMember->setPassword($encodedPassword);

        $userMember->setRoleJsonFormat('ROLE_MEMBER');
        $userMember->setRole($roleMember);

        $manager->persist($userAdmin);
        $manager->persist($userMember);
        $manager->persist($userModerator);


        $manager->flush();
    }
}
