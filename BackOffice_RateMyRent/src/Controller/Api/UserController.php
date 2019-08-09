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
        $data = [];

        $userById = $userRepository->findUserById($id);
        $data [] = $userById;

        $reviewByUser = $userRepository->findReviewByUser($id);
        $data [] = $reviewByUser;

        $userSerialised = $serializer->serialize($data, 'json');

        return new Response($userSerialised, 201, [
            'content-Type' => 'application/json'
        ]);
    }
}
