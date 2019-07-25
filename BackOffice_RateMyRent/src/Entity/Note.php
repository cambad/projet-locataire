<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\NoteRepository")
 */
class Note
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=64)
     */
    private $label;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Category", inversedBy="notes")
     */
    private $category;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Review", inversedBy="notes")
     */
    private $rewiews;

    public function __construct()
    {
        $this->rewiews = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(string $label): self
    {
        $this->label = $label;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }

    /**
     * @return Collection|Review[]
     */
    public function getRewiews(): Collection
    {
        return $this->rewiews;
    }

    public function addRewiew(Review $rewiew): self
    {
        if (!$this->rewiews->contains($rewiew)) {
            $this->rewiews[] = $rewiew;
        }

        return $this;
    }

    public function removeRewiew(Review $rewiew): self
    {
        if ($this->rewiews->contains($rewiew)) {
            $this->rewiews->removeElement($rewiew);
        }

        return $this;
    }
}
