<?php

namespace App\Form;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use FOS\UserBundle\Form\Type\RegistrationFormType as BaseRegistrationFormType;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('surname', TextType::class, 
            [
                'label' => 'Prénom',
                'attr' => [
                    'placeholder' => 'Votre prénom'
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Votre champs est vide',
                    ]),
                ],
            ])
            ->add('email', EmailType::class, [
                'label' => 'Email', 
                'attr' => [
                    'placeholder' => "Votre email"
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Votre champs est vide',
                    ]),
                ],
            ])
            ->add('name', TextType::class, 
            [
                'label' => 'Nom',
                'attr' => [
                    'placeholder' => 'Votre nom'
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Votre champs est vide',
                    ]),
                ],
            ])
            ->add('username', TextType::class, 
            [
                'label' => 'Pseudonyme',
                'attr' => [
                    'placeholder' => 'Votre pseudonyme'
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Votre champs est vide',
                    ]),
                ],
            ])
            ->add('plainPassword', RepeatedType::class, [
                'type' => PasswordType::class,
                'attr' => [
                    'autocomplete' => 'new-password',
                    'placeholder' => 'Entre 7 et 16 caractères'
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Un mot de passe est nécessaire',
                    ]),
                    new Length([
                        'min' => 7,
                        'max' => 16,
                        'minMessage' => 'Vous devez rentrer au minimum {{ limit }} caractères',
                        'maxMessage' => 'Vous devez rentrer au maximum {{ limit }} caractères',
                    ]),
                ],
                'first_options' => [
                    'label' => 'Mot de passe',
                    'attr' => [
                        'autocomplete' => 'new-password',
                        'placeholder' => 'Entre 7 et 16 caractères'
                    ],
                ],
                'second_options' => [
                    'label' => 'Confirmation du mot de passe',
                    'attr' => [
                        'autocomplete' => 'new-password',
                        'placeholder' => 'Entre 7 et 16 caractères'
                    ],
                ],
            ])
            
        ;
    }
    public function getParent()
    {
        return BaseRegistrationFormType::class;
    }
}
