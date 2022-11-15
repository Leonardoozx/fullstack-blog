import { useContext } from "react";
import context from "../context/context";

function FormCard() {
  const { genericState, setGenericState } = useContext(context);

  const handleSubmitClick = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-container" onSubmit={handleSubmitClick} id="share-form">
      <textarea
        name="comment"
        placeholder="Share something cool that happenned in your day... :)"
        onChange={setGenericState}
        value={genericState.comment}
      />
      <button type="submit">Share</button>
    </form>
  )
}

export default FormCard;