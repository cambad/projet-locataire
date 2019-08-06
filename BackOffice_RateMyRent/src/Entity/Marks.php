<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

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
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Range(
     *      min = 0,
     *      max = 5,
     *      minMessage = "La note peut être au minimum de {{ limit }}",
     *      maxMessage = "La note peut être au maximum de {{ limit }}"
     * )
     */
    private $recommendation;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Range(
     *      min = 0,
     *      max = 5,
     *      minMessage = "La note peut être au minimum de {{ limit }}",
     *      maxMessage = "La note peut être au maximum de {{ limit }}"
     * )
     */
    private $exterior;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Range(
     *      min = 0,
     *      max = 5,
     *      minMessage = "La note peut être au minimum de {{ limit }}",
     *      maxMessage = "La note peut être au maximum de {{ limit }}"
     * )
     */
    private $interior;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Range(
     *      min = 0,
     *      max = 5,
     *      minMessage = "La note peut être au minimum de {{ limit }}",
     *      maxMessage = "La note peut être au maximum de {{ limit }}"
     * )
     */
    private $contact;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Range(
     *      min = 0,
     *      max = 5,
     *      minMessage = "La note peut être au minimum de {{ limit }}",
     *      maxMessage = "La note peut être au maximum de {{ limit }}"
     * )
     */
    private $accessibility;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Range(
     *      min = 0,
     *      max = 5,
     *      minMessage = "La note peut être au minimum de {{ limit }}",
     *      maxMessage = "La note peut être au maximum de {{ limit }}"
     * )
     */
    private $apartmentEnvironment;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Range(
     *      min = 0,
     *      max = 5,
     *      minMessage = "La note peut être au minimum de {{ limit }}",
     *      maxMessage = "La note peut être au maximum de {{ limit }}"
     * )
     */
    private $traffic;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Range(
     *      min = 0,
     *      max = 5,
     *      minMessage = "La note peut être au minimum de {{ limit }}",
     *      maxMessage = "La note peut être au maximum de {{ limit }}"
     * )
     */
    private $exteriorBuilding;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Range(
     *      min = 0,
     *      max = 5,
     *      minMessage = "La note peut être au minimum de {{ limit }}",
     *      maxMessage = "La note peut être au maximum de {{ limit }}"
     * )
     */
    private $buildingEnvironment;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Range(
     *      min = 0,
     *      max = 5,
     *      minMessage = "La note peut être au minimum de {{ limit }}",
     *      maxMessage = "La note peut être au maximum de {{ limit }}"
     * )
     */
    private $insulation;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Range(
     *      min = 0,
     *      max = 5,
     *      minMessage = "La note peut être au minimum de {{ limit }}",
     *      maxMessage = "La note peut être au maximum de {{ limit }}"
     * )
     */
    private $cleanliness;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Range(
     *      min = 0,
     *      max = 5,
     *      minMessage = "La note peut être au minimum de {{ limit }}",
     *      maxMessage = "La note peut être au maximum de {{ limit }}"
     * )
     */
    private $brightness;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Range(
     *      min = 0,
     *      max = 5,
     *      minMessage = "La note peut être au minimum de {{ limit }}",
     *      maxMessage = "La note peut être au maximum de {{ limit }}"
     * )
     */
    private $firstContact;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Assert\Range(
     *      min = 0,
     *      max = 5,
     *      minMessage = "La note peut être au minimum de {{ limit }}",
     *      maxMessage = "La note peut être au maximum de {{ limit }}"
     * )
     */
    private $contactQuality;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Review", inversedBy="marks", cascade={"all"})
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

    public function getRecommendation(): ?int
    {
        return $this->recommendation;
    }

    public function setRecommendation(?int $recommendation): self
    {
        $this->recommendation = $recommendation;

        return $this;
    }

    public function getExterior(): ?int
    {
        return $this->exterior;
    }

    public function setExterior(?int $exterior): self
    {
        $this->exterior = $exterior;

        return $this;
    }

    public function getInterior(): ?int
    {
        return $this->interior;
    }

    public function setInterior(?int $interior): self
    {
        $this->interior = $interior;

        return $this;
    }

    public function getContact(): ?int
    {
        return $this->contact;
    }

    public function setContact(?int $contact): self
    {
        $this->contact = $contact;

        return $this;
    }

    public function getAccessibility(): ?int
    {
        return $this->accessibility;
    }

    public function setAccessibility(?int $accessibility): self
    {
        $this->accessibility = $accessibility;

        return $this;
    }

    public function getApartmentEnvironment(): ?int
    {
        return $this->apartmentEnvironment;
    }

    public function setApartmentEnvironment(?int $apartmentEnvironment): self
    {
        $this->apartmentEnvironment = $apartmentEnvironment;

        return $this;
    }

    public function getTraffic(): ?int
    {
        return $this->traffic;
    }

    public function setTraffic(?int $traffic): self
    {
        $this->traffic = $traffic;

        return $this;
    }

    public function getExteriorBuilding(): ?int
    {
        return $this->exteriorBuilding;
    }

    public function setExteriorBuilding(?int $exteriorBuilding): self
    {
        $this->exteriorBuilding = $exteriorBuilding;

        return $this;
    }

    public function getBuildingEnvironment(): ?int
    {
        return $this->buildingEnvironment;
    }

    public function setBuildingEnvironment(?int $buildingEnvironment): self
    {
        $this->buildingEnvironment = $buildingEnvironment;

        return $this;
    }

    public function getInsulation(): ?int
    {
        return $this->insulation;
    }

    public function setInsulation(?int $insulation): self
    {
        $this->insulation = $insulation;

        return $this;
    }

    public function getCleanliness(): ?int
    {
        return $this->cleanliness;
    }

    public function setCleanliness(?int $cleanliness): self
    {
        $this->cleanliness = $cleanliness;

        return $this;
    }

    public function getBrightness(): ?int
    {
        return $this->brightness;
    }

    public function setBrightness(?int $brightness): self
    {
        $this->brightness = $brightness;

        return $this;
    }

    public function getFirstContact(): ?int
    {
        return $this->firstContact;
    }

    public function setFirstContact(?int $firstContact): self
    {
        $this->firstContact = $firstContact;

        return $this;
    }

    public function getContactQuality(): ?int
    {
        return $this->contactQuality;
    }

    public function setContactQuality(int $contactQuality): self
    {
        $this->contactQuality = $contactQuality;

        return $this;
    }
}
