import { useContext } from "react"
import CommentsCard from "../components/CommentsCard"
import FormCard from "../components/FormCard"
import context from "../context/context"

function Feed() {
  const { comments } = useContext(context);
  return (
    <div id="feed-container">
      {/* sidebar (lado esquerdo) */}
      {/* componente principal no meio */}
      {/* contagem de usuários logados (bônus se tiver tempo - lado direito) */}
      <FormCard />
      {comments?.map((comment) => <CommentsCard {...comment} />)}
    </div>
  )
}

export default Feed