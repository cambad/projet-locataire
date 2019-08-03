<?php

namespace App\Controller\Api;

use App\Entity\Apartment;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\ApartmentRepository;
use App\Entity\Review;
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
     * @Route("/markers", name="marker_show", methods={"GET"})
     */
    public function showMarkerApi(ApartmentRepository $apartmentRepository): JsonResponse
    {        
        $apartmentsWithReview = $apartmentRepository->findAllApartmentsWithReview();     
        
        return new JsonResponse([
            'apartments' => $apartmentsWithReview,
        ]);
    }

    /**
     * @Route("/{id}/review", name="review_show", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function showReviewApi(Review $review): JsonResponse
    {        
        return new JsonResponse([
            'review' => [
                'id' => $review->getId(),
                'title' => $review->getTitle(),
                'positive' => $review->getPositive(),
                'negative' => $review->getNegative(),
                'still_in' => $review->getStillIn(),
                'createdAt' => $review->getCreatedAt(),
                'updatedAt' => $review->getUpdatedAt(),
                'apartment' => [
                    'id' => $review->getApartment()->getId(),
                    'adresse' => $review->getApartment()->getAddress(),
                    'etage' => $review->getApartment()->getFloorNumber(),
                    'localisation' => $review->getApartment()->getLocation(),
                    'surface' => $review->getApartment()->getArea(),
                    'nombre de pieces' => $review->getApartment()->getRooms(),
                    'loyer' => $review->getApartment()->getRental(),
                ],
                'notes' => $review->getNotes(),
            ],
        ]);
    }
}
