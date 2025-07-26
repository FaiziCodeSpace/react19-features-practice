import { useFormStatus } from "react-dom";



export default function SubmitButton(){
    const { pending } = useFormStatus();
    return(<>
        <button type="submit" disabled={pending} className="submit-btn">
            {pending? 'Submitting...':'Submit'}
        </button>
    </>)
}