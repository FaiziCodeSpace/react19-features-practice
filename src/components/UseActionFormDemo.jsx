import { useActionState } from "react";
import SubmitButton from "./UseFormStatusDemo";

const handleSubmit = async (prevData, formData) => {
  try {
    const username = formData.get("username");
    const password = formData.get("password");
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const id = Math.random() * 10000;
    // Fetch API
    if (username.length < 5) {
      return { nErr: "The Username should be more 5 characters." };
    } else if (!regex.test(password)) {
      return {
        pErr:
          "Minimum 8 characters, At least 1 uppercase letter, At least 1 lowercase letter, At least 1 digit and At least 1 special character ",
      };
    } else {
      const res = await fetch("http://localhost:3001/authData", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, username, password }),
      });
      await new Promise((res) => setTimeout(res, 2000));
      if (res.ok) {
        return { msg: "Account created!" };
      } else {
        return { error: "Server Error" };
      }
    }
  } catch (err) {
    console.error("Form Error:", err);
  }
};

export default function AuthFormDemo() {
  const [state, formAction] = useActionState(handleSubmit, "");
  return (
    <>
      <h2>Sign in</h2>
      <form action={formAction}>
        <input type="text" name="username" placeholder="Username" required />
        {state?.error && state?.error? <p style={{color:'red'}}>{state.error}</p>: null}
        {state?.nErr && state?.nErr? <p style={{color:'red'}}>{state.nErr}</p>: null}
        <input type="password" name="password" placeholder="Password" required />
        {state?.pErr && state?.pErr? <p style={{color:'red'}}>{state.pErr}</p>: null}
        {state?.msg && state?.msg? <p style={{color:'green'}}>{state.msg}</p>: null}
        <SubmitButton />
      </form>
    </>
  );
}
