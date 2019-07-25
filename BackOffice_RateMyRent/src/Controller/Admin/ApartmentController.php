<?php

namespace App\Controller\Admin;

use App\Repository\ApartmentRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/admin/apartment", name="admin_apartment_")
 */
class ApartmentController extends AbstractController
{
    /**
     * @Route("/", name="index", methods={"GET"})
    */
    public function index(ApartmentRepository $repository)
    {
        $apartments = $repository->findAll();
        
        return $this->render('admin/apartment/index.html.twig', [
            'apartments' => $apartments,
        ]);
    }
}
