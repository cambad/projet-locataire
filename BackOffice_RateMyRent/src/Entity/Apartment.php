<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ApartmentRepository")
 */
class Apartment
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
     *      minMessage = "L'adresse doit faire au minimum {{ limit }} caractères de long",
     *      maxMessage = "L'adresse doit faire au maximum {{ limit }} caractères de long")
     */
    private $address;

    /**
     * @Assert\Type(
     *     type="integer",
     *     message=" {{ value }} est invalide : {{ type }} est requis."
     * )
     * @ORM\Column(type="integer")
     */
    private $floor_number;

    /**
     * @ORM\Column(type="string", length=128)
     * @Assert\Length(min = 2,
     *      max = 128,
     *      minMessage = "La localisation doit faire au minimum {{ limit }} caractères de long",
     *      maxMessage = "La localisation doit faire au maximum {{ limit }} caractères de long"
     * )
     */
    private $location;

    /**
     * @ORM\Column(type="integer")
     * @Assert\Type(
     *     type="integer",
     *     message=" {{ value }} est invalide {{ type }} est requis."
     * )
     */
    private $area;

    /**
     * @ORM\Column(type="integer")
     * @Assert\Type(
     *     type="integer",
     *     message=" {{ value }} est invalide {{ type }} est requis."
     * )
     */
    private $rooms;

    /**
     * @ORM\Column(type="integer")
     * @Assert\Type(
     *     type="integer",
     *     message=" {{ value }} est invalide {{ type }} est requis."
     * )
     */
    private $rental;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Review", mappedBy="apartment", cascade={"persist", "remove"})
     */
    private $reviews;

    /**
     * @ORM\Column(type="float")
     * @Assert\Type(
     *     type="float",
     *     message=" {{ value }} est invalide {{ type }} est requis."
     * )
     */
    private $lat;

    /**
     * @ORM\Column(type="float")
     * @Assert\Type(
     *     type="float",
     *     message=" {{ value }} est invalide {{ type }} est requis."
     * )
     */
    private $lng;

    public function __construct()
    {
        $this->reviews = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->address;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getFloorNumber(): ?int
    {
        return $this->floor_number;
    }

    public function setFloorNumber(int $floor_number): self
    {
        $this->floor_number = $floor_number;

        return $this;
    }

    public function getLocation(): ?string
    {
        return $this->location;
    }

    public function setLocation(string $location): self
    {
        $this->location = $location;

        return $this;
    }

    public function getArea(): ?int
    {
        return $this->area;
    }

    public function setArea(int $area): self
    {
        $this->area = $area;

        return $this;
    }

    public function getRooms(): ?int
    {
        return $this->rooms;
    }

    public function setRooms(int $rooms): self
    {
        $this->rooms = $rooms;

        return $this;
    }

    public function getRental(): ?int
    {
        return $this->rental;
    }

    public function setRental(int $rental): self
    {
        $this->rental = $rental;

        return $this;
    }

    /**
     * @return Collection|Review[]
     */
    public function getReviews(): Collection
    {
        return $this->reviews;
    }

    public function addReview(Review $review): self
    {
        if (!$this->reviews->contains($review)) {
            $this->reviews[] = $review;
            $review->setApartment($this);
        }

        return $this;
    }

    public function removeReview(Review $review): self
    {
        if ($this->reviews->contains($review)) {
            $this->reviews->removeElement($review);
            // set the owning side to null (unless already changed)
            if ($review->getApartment() === $this) {
                $review->setApartment(null);
            }
        }

        return $this;
    }

    public function getLat(): ?float
    {
        return $this->lat;
    }

    public function setLat(float $lat): self
    {
        $this->lat = $lat;

        return $this;
    }

    public function getLng(): ?float
    {
        return $this->lng;
    }

    public function setLng(float $lng): self
    {
        $this->lng = $lng;

        return $this;
    }
}
