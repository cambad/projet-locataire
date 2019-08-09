<?php

namespace App\Repository;

use App\Entity\Review;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Review|null find($id, $lockMode = null, $lockVersion = null)
 * @method Review|null findOneBy(array $criteria, array $orderBy = null)
 * @method Review[]    findAll()
 * @method Review[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ReviewRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Review::class);
    }

    public function findReviewById($id)
    {
        $query = $this->createQueryBuilder('r')
                      ->join('r.apartment','a')
                      ->addSelect('a')
                      ->join('r.user','u')
                      ->addSelect('u')
                      ->join('r.marks', 'm')
                      ->addSelect('m')
                      ->orderBy('a.id', 'DESC')
                      ->where('a.id ='. $id)
        ;
        return $query->getQuery()->getArrayResult();
    }
}
