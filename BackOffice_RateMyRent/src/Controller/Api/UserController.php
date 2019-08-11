<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api", name="api_")
*/
class UserController extends AbstractController
{
     /**
     * Show all the informations for a review with by id
     * 
     * @Route("/{id}/user", name="user_show", methods={"GET"}, requirements={"id"="\d+"})
     *
     * @param UserRepository $userRepository
     * @param SerializerInterface $serializer
     * @param User $id
     * @return Response
     */
    public function showUserApi(UserRepository $userRepository, SerializerInterface $serializer, $id): Response
    {
        $userById = $userRepository->findUserById($id);

        $userSerialised = $serializer->serialize($userById, 'json');

        return new Response($userSerialised, 201, [
            'content-Type' => 'application/json'
        ]);
    }

    /**
     * Show all the informations for a review with by id
     * 
     * @Route("/{id}/user/reviews", name="user_review_show", methods={"GET"}, requirements={"id"="\d+"})
     *
     * @param UserRepository $userRepository
     * @param SerializerInterface $serializer
     * @param User $id
     * @return Response
     */
    public function showReviewByUserApi(UserRepository $userRepository, SerializerInterface $serializer, $id): Response
    {

        $reviewByUser = $userRepository->findReviewByUser($id);
        $reviewSerialised = $serializer->serialize($reviewByUser, 'json');

        return new Response($reviewSerialised, 201, [
            'content-Type' => 'application/json'
        ]);
    }
}
