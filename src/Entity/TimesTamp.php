<?php

namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;


trait TimesTamp
{
    #[ORM\Column(type: "datetime" ,nullable: false)]
    private \DateTime $createdAt ;


    /**
     * @return mixed
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    public function __construct()
    {
        $this->createdAt = new \DateTime();
    }

    /**
     * @ORM\PrePersist()
     */
    public function prePersist(): \DateTime
    {
        return $this->createdAt = new \DateTime();
    }
}