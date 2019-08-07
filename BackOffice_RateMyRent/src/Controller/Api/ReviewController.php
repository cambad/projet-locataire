<?php

namespace App\Controller\Api;

use App\Entity\Review;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\ReviewRepository;

/**
 * @Route("/api", name="api_")
*/
class ReviewController extends AbstractController
{
    /**
     * Show all the informations for a review with by id
     * 
     * @Route("/{id}/review", name="review_show", methods={"GET"}, requirements={"id"="\d+"})
     *
     * @param ReviewRepository $reviewRepository
     * @param SerializerInterface $serializer
     * @param Review $id
     * @return Response
     */
    public function showReviewApi(ReviewRepository $reviewRepository, SerializerInterface $serializer, $id): Response
    {
        $reviewById = $reviewRepository->findReviewById($id);
        $reviewSerialised = $serializer->serialize($reviewById, 'json');

        return new Response($reviewSerialised, 201, [
            'content-Type' => 'application/json'
        ]);
    }
}
