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
        $review = $repository->findByApartment($apartment);
        //dd($review);

        return new JsonResponse([
            'apartment' => [
                'id' => $apartment->getId(),
                'adresse' => $apartment->getAddress(),
                'etage' => $apartment->getFloorNumber(),
                'localisation' => $apartment->getLocation(),
                'surface' => $apartment->getArea(),
                'nombre de pieces' => $apartment->getRooms(),
                'loyer' => $apartment->getRental(),
                'avis de cet appartement' => $review,
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
