<?php

namespace App\Entity;


use App\Repository\MessageRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Index;


#[ORM\Entity(repositoryClass: MessageRepository::class)]
#[ORM\HasLifecycleCallbacks]
#[ORM\Index(name: 'created_at_index', columns: ['created_at'])]

class Message
{
    use TimesTamp;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: "integer")]
    private ?int $id = null;


    #[ORM\Column(type: "text")]
    private $content;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'messages')]
    private $user;

    #[ORM\ManyToOne(targetEntity: Conversation::class, inversedBy: 'messages')]
    private $conversation;

    private $mine;

    /**
     * @return mixed
     */
    public function getMine()
    {
        return $this->mine;
    }

    /**
     * @param mixed $mine
     */
    public function setMine($mine): void
    {
        $this->mine = $mine;
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): static
    {
        $this->content = $content;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getConversation(): ?Conversation
    {
        return $this->conversation;
    }

    public function setConversation(?Conversation $conversation): static
    {
        $this->conversation = $conversation;

        return $this;
    }
}
