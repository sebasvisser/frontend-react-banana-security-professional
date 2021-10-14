import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Emailadres" {...register("Emailadres", {required: true, pattern: /^\S+@\S+$/i})} />
            <input type="text" placeholder="Wachtwoord" {...register("Wachtwoord", {})} />
            <input type="text" placeholder="Gebruikersnaam" {...register("Gebruikersnaam", {})} />

            <input type="submit" />
        </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;
