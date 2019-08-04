<?php

namespace App\Repository;

use App\Entity\Marks;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Marks|null find($id, $lockMode = null, $lockVersion = null)
 * @method Marks|null findOneBy(array $criteria, array $orderBy = null)
 * @method Marks[]    findAll()
 * @method Marks[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MarksRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Marks::class);
    }

    /**
     * Find the marks for one review
     *
     * @param Review $review
     * @return Marks[]
     */
    public function findByReview($review)
    {
       $qb = $this->createQueryBuilder('marks')
                  ->where('marks.review = :myReview')
                  ->setParameter('myReview', $review)
       ;
       return $qb->getQuery()->getArrayResult();
    }
}
