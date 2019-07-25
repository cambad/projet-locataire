<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ReviewRepository;

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
        return $this->render('admin/review/index.html.twig', [
            'reviews' => $repository->findAll(),
        ]);
    }
}
