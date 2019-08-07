<?php

namespace App\Repository;

use App\Entity\Apartment;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Apartment|null find($id, $lockMode = null, $lockVersion = null)
 * @method Apartment|null findOneBy(array $criteria, array $orderBy = null)
 * @method Apartment[]    findAll()
 * @method Apartment[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ApartmentRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Apartment::class);
    }

    public function lastRelease($limit){

        $query = $this->createQueryBuilder('a')
                      ->select('a.id, a.address, a.rental', 'r.title', 'm.recommendation, m.exterior, m.interior, m.contact')
                      ->join('a.reviews','r')
                      ->join('r.marks','m')
                      ->orderBy('a.id', 'DESC')
                      ->setMaxResults( $limit );

        return $query->getQuery()->getArrayResult();
    }

    public function findAllApartmentsWithReview(){

        $query = $this->createQueryBuilder('a')
                      ->select('a.id, a.address, a.floor_number, a.location, a.rental, a.lat, a.lng', 'r.title', 'm.recommendation, m.exterior, m.interior, m.contact')
                      ->join('a.reviews','r')
                      ->join('r.marks','m')
                      ->orderBy('a.id', 'DESC');

        return $query->getQuery()->getArrayResult();
    }

    public function findApartmentById($id)
    {
        $query = $this->createQueryBuilder('a')
                      ->join('a.reviews','r')
                      ->addSelect('r')
                      ->join('r.marks', 'm')
                      ->addSelect('m')
                      ->orderBy('a.id', 'DESC')
                      ->where('a.id ='. $id)
        ;
        return $query->getQuery()->getArrayResult();
    }
}
