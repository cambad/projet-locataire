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
            'Apartment' => [
                'id' => $apartment->getId(),
                'Adresse' => $apartment->getAdress(),
                'Etage' => $apartment->getFloorNumber(),
                'Localisation' => $apartment->getLocation(),
                'Surface' => $apartment->getArea(),
                'Nombre de pièces' => $apartment->getRooms(),
                'Loyer' => $apartment->getRental(),
                'Avis de cette appartement' => $review,
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
            'Les appartements/titre avis' => $apartmentsWithReview,
        ]);
    }

    /**
     * @Route("/{id}/review", name="review_show", methods={"GET"}, requirements={"id"="\d+"})
     */
    public function showReviewApi(Review $review, ApartmentRepository $repository): JsonResponse
    {
        //$apartment = $repository->findByReview($review);
        //dd($apartment);
        
        return new JsonResponse([
            'Review' => [
                'id' => $review->getId(),
                'title' => $review->getTitle(),
                'positive' => $review->getPositive(),
                'negative' => $review->getNegative(),
                'still_in' => $review->getStillIn(),
                'createdAt' => $review->getCreatedAt(),
                'updatedAt' => $review->getUpdateAt(),
                'Apartment' => [
                    'id' => $review->getApartment()->getId(),
                    'Adresse' => $review->getApartment()->getAdress(),
                    'Etage' => $review->getApartment()->getFloorNumber(),
                    'Localisation' => $review->getApartment()->getLocation(),
                    'Surface' => $review->getApartment()->getArea(),
                    'Nombre de pièces' => $review->getApartment()->getRooms(),
                    'Loyer' => $review->getApartment()->getRental(),
                ],
                'Notes' => $review->getNotes(),
            ],
        ]);
    }
}
