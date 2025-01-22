import { useForm } from "react-hook-form";
import s from './contact.module.scss';

export const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <section className={s.container}>
      <h1>Contact</h1>
      <form className={s.content} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className={s.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address"
              }
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className={s.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && <span>{errors.message.message}</span>}
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}