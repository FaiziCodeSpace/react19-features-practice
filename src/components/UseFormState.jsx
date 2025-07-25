import { useFormState } from "react-dom";
import SubmitButton from "./UseFormStatus";


export default function FeedBackForm() {

  const handleSubmit = async (prevData, formData) => {
    try {
      const feed = formData.get("feedback");
      const id = Math.random() * 10000;
      let res = await fetch("http://localhost:3001/feedbacks", {
        method: "post",
        body: JSON.stringify({ id, feed }),
      });

      if (!res.ok) return { error: "API not found!" };
      return { msg: "Succeded!" };

    } catch {
      console.log("API ERROR");
    }
  };

  const [state, formAction] = useFormState(handleSubmit, '');

  return (
    <>
    <div className="feedback-form">
        
      <form action={formAction}>
        <label htmlFor="feedback">FeedBack:</label>
        <textarea name="feedback" id="feedback"></textarea>
        <SubmitButton />
      </form>
      {
        state?.error && state?.error? <p style={{color:'red'}}>{state.error}</p>:null
      }
      {
        state?.msg && state?.msg? <p style={{color:'green'}}>{state.msg}</p>:null
      }
    </div>
    </>
  );
}
