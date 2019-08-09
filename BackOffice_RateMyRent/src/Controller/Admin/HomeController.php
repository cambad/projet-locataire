<?php

namespace App\Controller\Admin;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
     /**
     * @Route("/", name="admin_home")
     */
    public function home()
    {
        return $this->redirectToRoute('admin_apartment_index');
    }
}
