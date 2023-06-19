<?php

namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;


trait TimesTamp
{
    #[ORM\Column(type: "datetime")]
    private $createdAt;

    /**
     * @return mixed
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * @ORM\prePersist()
     */
    public function prePersist()
    {
        return $this->createdAt = new \DateTime();
    }
}