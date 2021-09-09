import { CommentType } from "../data/comments";

const Repliescom = (rep:CommentType[]) =>{
    const reps:CommentType[] = rep
return (
    reps.map(x =><div className="flex p-2 items-start space-x-2 pl-14">
    <img className="w-10 w-10 rounded-full" src={x.userImagePath}></img>
    <div className="bg-gray-200 rounded-lg p-2">
      <p className="font-semibold">{x.username}</p>
      <p>{x.commentText}</p>
    
       <div className='flex items-center'>
        <img className='w-4 h-4 mr-1' src='/like.svg'></img>
        <p className='text-gray-500'>{x.likeNum}</p>
      </div>
    </div>
  </div> )
          
)
}
export default Repliescom