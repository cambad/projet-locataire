<?php

namespace App\Controller\Api;

use App\Entity\Apartment;
use App\Repository\ApartmentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api", name="api_")
 */
class ApartmentController extends AbstractController
{
    /**
     * Show the last five apartment who just recieve a review
     * 
     * @Route("/five_apartments", name="five_apartments")
     *
     * @param ApartmentRepository $repository
     * @return JsonResponse
     */
    public function lastFiveApi(ApartmentRepository $repository, SerializerInterface $serializerInterface): Response
    {
        $fiveApartments = $repository->lastRelease(5);
        $apartmentsSerialised = $serializerInterface->serialize($fiveApartments, 'json');

        return new Response($apartmentsSerialised, 201, [
            'content-Type' => 'application/json'
        ]);
    }

    /**
     * Show an apartment with the reviews and the marks
     * 
     * @Route("/{id}/apartment", name="apartment_show", methods={"GET"}, requirements={"id"="\d+"})
     *
     * @param SerializerInterface $serializerInterface
     * @param ApartmentRepository $apartmentRepository
     * @param Apartment $id
     * @return Response
     */
    public function showApartmentApi(SerializerInterface $serializerInterface, ApartmentRepository $apartmentRepository, $id): Response
    {
        $apartmentById = $apartmentRepository->findApartmentById($id);
        $apartmentSerialised = $serializerInterface->serialize($apartmentById, 'json');

        return new Response($apartmentSerialised, 201, [
            'content-Type' => 'application/json'
        ]);
    }

    /**
     * Show all the markers visible on the map
     * 
     * @Route("/apartment/markers", name="marker_show", methods={"GET"})
     *
     * @param ApartmentRepository $apartmentRepository
     * @return JsonResponse
     */
    public function showMarkerApi(ApartmentRepository $apartmentRepository): JsonResponse
    {        
        $apartmentsWithReview = $apartmentRepository->findAllApartmentsWithReview();     
        
        return new JsonResponse([
            'apartments' => $apartmentsWithReview,
        ]);
    }

    /**
     * New apartment, Json decode and check with validator before to flush
     * 
     *
     * @param Request $request
     * @param SerializerInterface $serializerInterface
     * @param ValidatorInterface $validator
     * @param EntityManagerInterface $entityManager
     * @return Response 
    */
    public function newApartment(Request $request, ValidatorInterface $validator, EntityManagerInterface $entityManager, SerializerInterface $serializerInterface): Response
    {
        // Check if the content are here
        if ($content = $request->getContent()) {
            //Using SerializerInterface->deserializer to get an object Apartment with his childs (Review and then Marks)
            $newApartment = $serializerInterface->deserialize($content, Apartment::class, 'json', [
                'groups' => ['apartment_new']
            ]);
      //dd($newApartment);
            // We need to calculate the average of the mark's categories (recommendation, exterior, interior and contact) and then send the result to the database

            //To get the all the reviews of one apartment
            foreach ($newApartment->getReviews() as $review) {
                //To get all the marks for one review
                foreach ($review->getMarks() as $mark) {
                   
                    $recommendationMark = $mark->getRecommendation();

                    if ($recommendationMark === 0) {
                        $result = $mark->getAccessibility() + $mark->getApartmentEnvironment() + $mark->getTraffic();
                        $result = round($result/3);
                        $average = intval($result);

                        $mark->setRecommendation($average);
                    };

                    $exteriorMark = $mark->getExterior();

                    if ($exteriorMark === 0) {
                        $result = $mark->getExteriorBuilding() + $mark->getBuildingEnvironment();
                        $result = round($result/2);
                        $average = intval($result);

                        $mark->setExterior($average);
                    };

                    $interiorMark = $mark->getInterior();

                    if ($interiorMark === 0) {
                        $result = $mark->getInsulation() + $mark->getCleanliness() + $mark->getBrightness();
                        $result = round($result/3);
                        $average = intval($result);

                        $mark->setInterior($average);
                    };

                    $contact = $mark->getContact();

                    if ($contact === 0) {
                        $result = $mark->getFirstContact() + $mark->getContactQuality();
                        $result = round($result/2);
                        $average = intval($result);

                        $mark->setContact($average);
                    };
                   
                    $mark->setReview($review);

                    //dd($newApartment);
                }
            }

            $violations = $validator->validate($newApartment);

            if (count($violations)> 0) {
                $repr = $serializerInterface->serialize($violations, 'json');

                return new Response($repr, 500, [
                    'content-Type' => 'application/json'
                ]);
            }
            dd($newApartment);
            //BDD creating a new review, a new apartement and a new note
            $entityManager->persist($newApartment);
            $entityManager->flush();

            $data = [
                'status' => 201,
                'message' => 'Avis bien recu'
            ];
            $data = $serializerInterface->serialize($data, 'json');


            return new Response($data, 201, [
                'content-Type' => 'application/json'
            ]);
        } else 
        {
            $data = [
            'status' => 500,
            'message' => 'Vous devez renseigner tous les champs'
            ];        
            $data = $serializerInterface->serialize($data, 'json');

            return new Response($data, 500, [
                'content-Type' => 'application/json'
            ]);
        }        
    }
}
