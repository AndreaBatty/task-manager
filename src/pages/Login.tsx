import { useDispatch } from "react-redux";
import Button from "../components/Button";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { login } from "../store/authSlice";

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {

  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>();


  const onSumbit = (data: LoginFormData) => {
    dispatch(login({email: data.email}))
    console.log("Dopo il login:", data);
  };

  return (
    <div className="my-0 mx-auto bg-gray-100">
      <form
        onSubmit={handleSubmit(onSumbit)}
        className="bg-white shadow-lg rounded p-8 w-full max-w-sm space-y-4"
        noValidate
      >
        <h1 className="flex justify-center text-2xl font-bold text-green-600">
          Login
        </h1>
        <div>
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Inserisci la tua email"
            error={errors.email?.message}
            {...register("email", {
              required: { value: true, message: "L'email è obbligatoria" },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Formato email non valido",
              },
            })}
          />

          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="Inserisci la password"
            error={errors.password?.message}
            {...register("password", {
              required: { value: true, message: "La password è obbligatoria" },
              minLength: {
                value: 6,
                message: "La password deve avere almeno 6 caratteri",
              },
            })}
          />
        </div>
        <div className="flex justify-between">
          <Button type="submit" variant="primary">
            Login
          </Button>
          <Button type="reset" variant="secondary" onClick={() => reset()}>
            Annulla
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
