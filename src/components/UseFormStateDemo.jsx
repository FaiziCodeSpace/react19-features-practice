import { useFormState } from "react-dom";
import SubmitButton from "./UseFormStatusDemo";


export default function FeedBackForm() {

  const handleSubmit = async (prevData, formData) => {
    try {
      const feed = formData.get("feedback");
      if(feed!=''){
         const id = Math.random() * 10000;
      let res = await fetch("http://localhost:3001/feedbacks", {
        method: "post",
        body: JSON.stringify({ id, feed }),
      });
      await new Promise(res=>setTimeout(res, 2000));
      if (!res.ok) return { error: "API not found!" };
      return { msg: "Succeded!" };
      }else{
        return {error: 'The Textarea should not be empty!'}
      }

    } catch {
      console.log("API ERROR");
    }
  };

  const [state, formAction] = useFormState( handleSubmit, '');

  return (
    <>
    <div className="feedback-form">
        
      <form action={formAction}>
        <label htmlFor="feedback">FeedBack:</label>
        <textarea placeholder="Your FeedBack" rows={5} name="feedback" id="feedback"></textarea>
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
