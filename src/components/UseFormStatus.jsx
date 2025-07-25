import { useFormStatus } from "react-dom";



export default function SubmitButton(){
    const { isPending } = useFormStatus();
    return(<>
        <button className="submit-btn">
            {isPending? 'Submitting...':'Submit'}
        </button>
    </>)
}