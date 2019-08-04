<?php

namespace App\Controller\Api;

use App\Entity\Apartment;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\ApartmentRepository;
use App\Repository\ReviewRepository;

/**
 * @Route("/api", name="api_")
 */
class ApartmentController extends AbstractController
{
    /**
     * @Route("/five_apartments", name="five_apartments")
     */
    public function lastFiveApi(ApartmentRepository $repository): JsonResponse
    {
        $fiveApartments = $repository->lastRelease(5);

        return new JsonResponse([
            'apartments' => $fiveApartments,
        ]);
    }

    /**
     * @Route("/{id}/apartment", name="apartment_show", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function showApartmentApi(Apartment $apartment, ReviewRepository $repository): JsonResponse
    {
        $reviewsApartment = $repository->findByApartment($apartment);
        //dd($review);

        return new JsonResponse([
            'apartment' => [
                'id' => $apartment->getId(),
                'address' => $apartment->getAddress(),
                'floorNumber' => $apartment->getFloorNumber(),
                'location' => $apartment->getLocation(),
                'area' => $apartment->getArea(),
                'rooms' => $apartment->getRooms(),
                'rental' => $apartment->getRental(),
                'reviews' => $reviewsApartment,
            ],
        ]);
    }

    /**
     * @Route("/apartment/markers", name="marker_show", methods={"GET"})
     */
    public function showMarkerApi(ApartmentRepository $apartmentRepository): JsonResponse
    {        
        $apartmentsWithReview = $apartmentRepository->findAllApartmentsWithReview();     
        
        return new JsonResponse([
            'apartments' => $apartmentsWithReview,
        ]);
    }
}
