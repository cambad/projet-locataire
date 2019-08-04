<?php

namespace App\Controller\Api;

use App\Entity\Note;
use App\Entity\Review;
use App\Entity\Apartment;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Marks;

/**
 * @Route("/api", name="api_")
*/
class ReviewController extends AbstractController
{
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

    /**
     * Testing a route
     * 
     * @Route("/review/test", name="review_test", methods={"POST"})
     *
     * @param Request $request
     * @param SerializerInterface $serializer
     * @param ValidatorInterface $validator
     * @param EntityManagerInterface $entityManager
     * @return void
     */
    public function test(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $entityManager) 
    {
        $values = json_decode($request->getContent());

        if (isset($values->area)) {
            $apartment = new Apartment;
            $apartment->setArea($values->area);

            $errors = $validator->validate($apartment);
            if(count($errors)) {
                $errors = $serializer->serialize($errors, 'json');
                return new Response($errors, 500, [
                    'content-Type' => 'application/json'
                ]);
            }
          //dd($apartment);
            $entityManager->persist($apartment);
            $entityManager->flush();

            $data = [
                'status' => 201,
                'message' => 'appartement a été créé'
            ];

            return new JsonResponse($data, 201);
        }
        $data = [
            'status' => 500,
            'message' => 'la donnee est pas passee'
        ];
        return new JsonResponse($data, 500);

    }

    /**
     * New review, Json decode and check with validator before to flush
     * 
     * @Route("/review/new", name="review_new", methods={"POST"})
     *
     * @param Request $request
     * @param SerializerInterface $serializer
     * @param ValidatorInterface $validator
     * @param EntityManagerInterface $entityManager
     * @return JsonResponse
    */
    public function newReview(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $entityManager): JsonResponse
    {
        $frontDatas = [];
        if ($content = $request->getContent()) {
            $frontDatas = json_decode($content, true);
        }
//dd($frontDatas);

        if (isset($frontDatas)) {

            // APARTMENT needs : address, floor_number, location, area, rooms, rental, lat, lng
            $apartment = new Apartment;
            //Hydratation of the Apartment entity
            $apartment = $serializer->deserialize($content, Apartment::class, 'json', [
                'object_to_populate' => $apartment
            ]);
            //Check and catch the errors with validator
            $errors = $validator->validate($apartment);
            if (count($errors)) {
                $errors = $serializer->serialize($errors, 'json');
                return new Response($errors, 500, [
                    'content-Type' => 'application/json'
                ]);
            }

            // REVIEW needs : title, positive, negative, still_in 
            $review = new Review;
            $review = $serializer->deserialize($content, Review::class, 'json', [
                'object_to_populate' => $review
            ]);
                       
            //Check and catch the errors with validator
            $errors = $validator->validate($review);
            if (count($errors)) {
                $errors = $serializer->serialize($errors, 'json');
                return new Response($errors, 500, [
                    'content-Type' => 'application/json'
                ]);
            }
            //pushing the new review into the apartment just created
            $review->setApartment($apartment); 

            //MARKS needs :
            $marks = new Marks;
            $marks = $marks = $serializer->deserialize($content, Marks::class, 'json', [
                'object_to_populate' => $marks
            ]);

            //Check and catch the errors with validator
            $errors = $validator->validate($marks);
            if (count($errors)) {
                $errors = $serializer->serialize($errors, 'json');
                return new Response($errors, 500, [
                    'content-Type' => 'application/json'
                ]);
            }
            //pushing the marks into the review juste created
            $marks->setReview($review);

            //BDD creating a new review, a new apartement and a new note 
         //dd($marks);
            $entityManager->persist($marks);  
            $entityManager->flush();

            $data = [
                'status' => 201,
                'message' => 'Avis bien recu'
            ];

            return new JsonResponse($data, 201);
        }
        $data = [
            'status' => 500,
            'message' => 'Vous devez renseigner tous les champs'
        ];
        return new JsonResponse($data, 500);
        
    }
}
