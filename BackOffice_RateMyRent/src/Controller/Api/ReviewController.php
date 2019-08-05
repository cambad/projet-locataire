<?php

namespace App\Controller\Api;

use App\Entity\Review;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\MarksRepository;

/**
 * @Route("/api", name="api_")
*/
class ReviewController extends AbstractController
{
    /**
     * Show a review with the marks and the apartment
     * 
     * @Route("/{id}/review", name="review_show", methods={"GET"}, requirements={"id"="\d+"})
     *
     * @param Review $review
     * @param MarksRepository $repository
     * @return JsonResponse
     */
    public function showReviewApi(Review $review, MarksRepository $repository): JsonResponse
    {
        $marksByReview = $repository->findByReview($review);

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
                    'address' => $review->getApartment()->getAddress(),
                    'floor_number' => $review->getApartment()->getFloorNumber(),
                    'location' => $review->getApartment()->getLocation(),
                    'area' => $review->getApartment()->getArea(),
                    'rooms' => $review->getApartment()->getRooms(),
                    'rental' => $review->getApartment()->getRental(),
                ],
                'marks' => $marksByReview,
            ],
        ]);
    }
}
