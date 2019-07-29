<?php

namespace App\Controller\Admin;

use App\Repository\ApartmentRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Apartment;
use Symfony\Component\HttpFoundation\Request;

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

    /**
     * @Route("/{id}", name="show", methods={"GET"})
     */
    public function show(Apartment $apartment): Response
    {
        return $this->render('admin/apartment/show.html.twig', [
            'apartment' => $apartment,
        ]);
    }

    /**
    * @Route("/{id}/delete", name="delete", methods={"DELETE"})
    */
    public function delete(Request $request, Apartment $apartment): Response
    {
        if ($this->isCsrfTokenValid('delete'.$apartment->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($apartment);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_apartment_index');
    }
}
