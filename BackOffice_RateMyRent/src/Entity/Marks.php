<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MarksRepository")
 */
class Marks
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Review", inversedBy="marks", cascade={"persist"})
     */
    private $review;

    public function __toString()
    {
        return $this->review;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getReview(): ?Review
    {
        return $this->review;
    }

    public function setReview(?Review $review): self
    {
        $this->review = $review;

        return $this;
    }
}
