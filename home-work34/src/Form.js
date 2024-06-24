import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Имя обязательно для заполнения'),
  email: yup.string().email('Введите корректный email').required('Email обязателен для заполнения'),
  phone: yup.string()
    .matches(/^\d+$/, 'Телефон должен содержать только цифры')
    .length(12, 'Телефон должен содержать 12 цифр')
    .required('Телефон обязателен для заполнения'),
});

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Имя</label>
        <input {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Телефон</label>
        <input {...register('phone')} />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>

      <button type="submit">Отправить</button>
    </form>
  );
};

export default Form;
