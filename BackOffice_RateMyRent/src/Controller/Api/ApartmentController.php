<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Repository\ApartmentRepository;

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
}
