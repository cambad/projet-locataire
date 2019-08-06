<?php

namespace App\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;
/**
 * @ORM\Entity(repositoryClass="App\Repository\ReviewRepository")
 */
class Review
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=256)
     * @Assert\Length(min = 2,
     *      max = 256,
     *      minMessage = "La localisation doit faire au minimum {{ limit }} caractères de long",
     *      maxMessage = "La localisation doit faire au maximum {{ limit }} caractères de long")
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     * @Assert\Length(min = 2,
     *      max = 600,
     *      minMessage = "La localisation doit faire au minimum {{ limit }} caractères de long",
     *      maxMessage = "La localisation doit faire au maximum {{ limit }} caractères de long"
     * )
     */
    private $positive;

    /**
     * @ORM\Column(type="text")
     * @Assert\Length(min = 2,
     *      max = 600,
     *      minMessage = "La localisation doit faire au minimum {{ limit }} caractères de long",
     *      maxMessage = "La localisation doit faire au maximum {{ limit }} caractères de long"
     * )
     */
    private $negative;

    /**
     * @ORM\Column(type="boolean")
     * @Assert\Type(
     *     type="boolean",
     *     message=" {{ value }} est invalide {{ type }} est requis."
     * )
     */
    private $still_in;

    /**
     * @ORM\Column(type="boolean")
     * @Assert\Type(
     *     type="boolean",
     *     message=" {{ value }} est invalide {{ type }} est requis."
     * )
     */
    private $tenant;

    /**
     * @ORM\Column(type="datetime")
     * @Assert\Type(
     *     type="datetime",
     *     message=" {{ value }} est invalide {{ type }} est requis."
     * )
     */
    private $created_At;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Assert\Type(
     *     type="datetime",
     *     message=" {{ value }} est invalide {{ type }} est requis."
     * )
     */
    private $updated_At;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="reviews")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Apartment", inversedBy="reviews", cascade={"persist", "remove"})
     */
    private $apartment;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Marks", mappedBy="review", cascade={"persist", "remove"})
     */
    private $marks;


    public function __construct()
    {
        $this->created_At = new DateTime();
        $this->marks = new ArrayCollection();
        $this->still_in = false;
    }

    public function __toString()
    {
        return $this->title;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getPositive(): ?string
    {
        return $this->positive;
    }

    public function setPositive(string $positive): self
    {
        $this->positive = $positive;

        return $this;
    }

    public function getNegative(): ?string
    {
        return $this->negative;
    }

    public function setNegative(string $negative): self
    {
        $this->negative = $negative;

        return $this;
    }

    public function getStillIn(): ?bool
    {
        return $this->still_in;
    }

    public function setStillIn(bool $still_in): self
    {
        $this->still_in = $still_in;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_At;
    }

    public function setCreatedAt(\DateTimeInterface $created_At): self
    {
        $this->created_At = $created_At;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updated_At;
    }

    public function setUpdatedAt(?\DateTimeInterface $updated_At): self
    {
        $this->updated_At = $updated_At;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getApartment(): ?Apartment
    {
        return $this->apartment;
    }

    public function setApartment(?Apartment $apartment): self
    {
        $this->apartment = $apartment;

        return $this;
    }

    /**
     * @return Collection|Marks[]
     */
    public function getMarks(): Collection
    {
        return $this->marks;
    }

    public function addMark(Marks $mark): self
    {
        if (!$this->marks->contains($mark)) {
            $this->marks[] = $mark;
            $mark->setReview($this);
        }

        return $this;
    }

    public function removeMark(Marks $mark): self
    {
        if ($this->marks->contains($mark)) {
            $this->marks->removeElement($mark);
            // set the owning side to null (unless already changed)
            if ($mark->getReview() === $this) {
                $mark->setReview(null);
            }
        }

        return $this;
    }

    public function getTenant(): ?bool
    {
        return $this->tenant;
    }

    public function setTenant(bool $tenant): self
    {
        $this->tenant = $tenant;

        return $this;
    }
}
