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

    /**
     * Find the reviews for one apartment
     *
     * @param Apartment $apartment
     * @return Review[]
     */
    public function findByApartment($apartment)
    {
       $qb = $this->createQueryBuilder('review')
                  ->join('review.marks', 'm')
                  ->addSelect('m')
                  ->where('review.apartment = :myApartment')
                  ->setParameter('myApartment', $apartment)
       ;
       return $qb->getQuery()->getArrayResult();
    }

    public function findReviewById($id)
    {
        $query = $this->createQueryBuilder('r')
                      ->join('r.apartment','a')
                      ->addSelect('a')
                      ->join('r.marks', 'm')
                      ->addSelect('m')
                      ->orderBy('a.id', 'DESC')
                      ->where('a.id ='. $id)
        ;
        return $query->getQuery()->getArrayResult();
    }

    /**
     * Find the id and the title reviews for one apartment
     *
     * @param Apartment $apartment
     * @return Review[]
     */
    public function findReviewTitleByApartment($apartment)
    {
       $qb = $this->createQueryBuilder('review')
                  ->select('review.id, review.title')
                  ->where('review.apartment = :myApartment')
                  ->setParameter('myApartment', $apartment)
       ;
       return $qb->getQuery()->getArrayResult();
    }
}
