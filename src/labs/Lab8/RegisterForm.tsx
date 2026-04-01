import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/useAuthStore";

function RegisterForm() {
  const setAuth = useAuthStore((state) => state.setAuth);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await axios.post("http://localhost:3000/register", {
        username: data.username,
        email: data.email,
        password: data.password,
      });
      return res.data;
    },
    onSuccess: (data) => {
      setAuth({ user: data.user, token: data.accessToken });
      alert("Đăng ký thành công!");
      navigate("/");
    },
    onError: () => {
      alert("Đăng ký thất bại!");
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;

    mutation.mutate({
      username: form.username.value,
      email: form.email.value,
      password: form.password.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" />
      <input name="email" placeholder="Email" />
      <input name="password" placeholder="Password" type="password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
