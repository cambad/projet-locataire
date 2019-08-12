<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, User::class);
    }

    public function findUserById($id)
    {
        $query = $this->createQueryBuilder('u')
                      ->select('u.id, u.username, u.surname, u.name, u.email')
                      ->where('u.id ='. $id)
        ;
        return $query->getQuery()->getArrayResult();
    }

    public function findReviewByUser($id)
    {
        $query = $this->createQueryBuilder('u')
                      ->join('u.reviews', 'r')
                      ->join('r.apartment', 'a')
                      ->join('r.marks', 'm')
                      ->select('r.id, r.title', 'a.address, a.rental', 'm.recommendation, m.exterior, m.interior, m.contact')
                      ->where('u.id ='. $id)
        ;
        return $query->getQuery()->getArrayResult();
    }
}
