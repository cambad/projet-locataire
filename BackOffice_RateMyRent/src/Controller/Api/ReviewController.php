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

        if (isset($frontDatas)) {

            // APARTMENT needs : address, floor_number, location, area, rooms, rental, lat, lng
            $apartment = new Apartment;
            //Hydratation of the Apartment entity
            $apartment = $serializer->deserialize($content, Apartment::class, 'json', [
                'object_to_populate' => $apartment
            ]);
            //Check and catch the errors with validator
            $errors = $validator->validate($apartment->getLat(), [

            ]);
            if (0 !== count($errors)) {
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
            if (0 !== count($errors)) {
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
            //If a tenant send a form, we have to calculate the average of the categories and send it into the database.
            if($marks->getRecommendation() === 0)
            {
                $result = $marks->getAccessibility() + $marks->getApartmentEnvironment() + $marks->getTraffic();
                $result = round($result/3);
                $average = intval($result);

                $marks->setRecommendation($average);                
            };

            if($marks->getExterior() === 0)
            {
                $result = $marks->getExteriorBuilding() + $marks->getBuildingEnvironment();
                $result = round($result/2);
                $average = intval($result);

                $marks->setExterior($average);                
            };

            if($marks->getInterior() === 0)
            {
                $result = $marks->getInsulation() + $marks->getCleanliness() + $marks->getBrightness();
                $result = round($result/3);
                $average = intval($result);

                $marks->setInterior($average);                
            };

            if($marks->getContact() === 0)
            {
                $result = $marks->getFirstContact() + $marks->getContactQuality();
                $result = round($result/2);
                $average = intval($result);

                $marks->setContact($average);                
            };
            

            //Check and catch the errors with validator
            $errors = $validator->validate($marks);
            if (0 !== count($errors)) {
                $errors = $serializer->serialize($errors, 'json');
                return new Response($errors, 500, [
                    'content-Type' => 'application/json'
                ]);
            }
            //pushing the marks into the review juste created
            $marks->setReview($review);

            //BDD creating a new review, a new apartement and a new note 
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
