<?php

namespace App\Entity;

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
     */
    private $adress;

    /**
     * @ORM\Column(type="integer")
     */
    private $floor_number;

    /**
     * @ORM\Column(type="string", length=256)
     */
    private $location;

    /**
     * @ORM\Column(type="integer")
     */
    private $area;

    /**
     * @ORM\Column(type="integer")
     */
    private $rooms;

    /**
     * @ORM\Column(type="integer")
     */
    private $rental;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAdress(): ?string
    {
        return $this->adress;
    }

    public function setAdress(string $adress): self
    {
        $this->adress = $adress;

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
}
