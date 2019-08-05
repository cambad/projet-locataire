<?php

namespace App\Controller\Api;

use App\Entity\Apartment;
use App\Repository\ApartmentRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
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
    public function lastFiveApi(ApartmentRepository $repository, SerializerInterface $serializer): Response
    {
        $fiveApartments = $repository->lastRelease(5);
        $apartmentsSerialised = $serializer->serialize($fiveApartments, 'json');

        return new Response($apartmentsSerialised, 201, [
            'content-Type' => 'application/json'
        ]);
    }

    /**
     * Show an apartment with the reviews and the marks
     * 
     * @Route("/{id}/apartment", name="apartment_show", methods={"GET"}, requirements={"id"="\d+"})
     *
     * @param SerializerInterface $serializer
     * @param ApartmentRepository $apartmentRepository
     * @param Apartment $id
     * @return Response
     */
    public function showApartmentApi(SerializerInterface $serializer, ApartmentRepository $apartmentRepository, $id): Response
    {
        $apartmentById = $apartmentRepository->findApartmentById($id);
        $apartmentSerialised = $serializer->serialize($apartmentById, 'json');

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
}
