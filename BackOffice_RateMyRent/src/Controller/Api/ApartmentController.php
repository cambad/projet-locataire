<?php

namespace App\Controller\Api;

use App\Entity\Apartment;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\ApartmentRepository;
use App\Entity\Review;
use App\Repository\ReviewRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Note;

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
    public function newCompleteReview(Request $request, SerializerInterface $serializer, ValidatorInterface $validator, EntityManagerInterface $entityManager): JsonResponse
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

            //NOTES needs :
            // $notes = new Note;
            // $notes = $notes = $serializer->deserialize($content, Note::class, 'json', [
            //     'object_to_populate' => $notes
            // ]);

            // //Check and catch the errors with validator
            // $errors = $validator->validate($notes);
            // if (count($errors)) {
            //     $errors = $serializer->serialize($errors, 'json');
            //     return new Response($errors, 500, [
            //         'content-Type' => 'application/json'
            //     ]);
            // }
            // //pushing the notes into the review juste created
            // $notes->addReviews($review);

            //BDD creating a new review, a new apartement and a new note 
         dd($review);
            $entityManager->persist($review);  
            $entityManager->flush();

            $data = [
                'status' => 201,
                'message' => 'Appartement ajoute'
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
