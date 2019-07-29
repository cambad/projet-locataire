<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ReviewRepository;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Review;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route("/admin/review", name="admin_review_")
 */
class ReviewController extends AbstractController
{
    /**
     * @Route("/", name="index", methods={"GET"})
     */
    public function index(ReviewRepository $repository)
    {
        $reviews = $repository->findAll();
        
        return $this->render('admin/review/index.html.twig', [
            'reviews' => $reviews,
        ]);
    }
    
    /**
     * @Route("/{id}", name="show", methods={"GET"})
     */
    public function show(Review $review): Response
    {
        dump($review);
        return $this->render('admin/review/show.html.twig', [
            'review' => $review,
        ]);
    }

    /**
    * @Route("/{id}/delete", name="delete", methods={"DELETE"})
    */
    public function delete(Request $request, Review $review): Response
    {
        if ($this->isCsrfTokenValid('delete'.$review->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($review);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_review_index');
    }
}
