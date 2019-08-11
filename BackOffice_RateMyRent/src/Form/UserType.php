<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;


class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
          $builder->add('roles', ChoiceType::class, [
            'attr'  =>  array('class' => 'form-control',
                'style' => 'width: 20rem; margin: 0 auto'),
            'choices' =>
                ['ROLE_ADMIN' => 'ROLE_ADMIN',
                'ROLE_USER' => 'ROLE_USER'] ,
            'multiple' => true,
            'required' => true,
            ]);
    }
    

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'attr' => ['novalidate' => 'novalidate']
        ]);
    }
}
