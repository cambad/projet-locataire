<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
     /**
     * @Route("/", name="home")
     */
    public function home()
    {
        return $this->redirectToRoute('admin_home');
    }
    /**
     * @Route("/admin", name="admin_home")
     */
    public function adminHome()
    {
        return $this->render('home.html.twig');
    }
}
