import { CommentType, comments } from "../data/comments";
import Repliescom from "./Repliescom";
const Commentcom = () => {
    const commentdata = comments
    console.log(commentdata)
    // const render =() =>{
    //     <div className="">
    //         {commentdata.map(x =>
    //             <div className="flex p-2 items-start space-x-2">
    //                 <img className="w-10 w-10 rounded-full" src={x.userImagePath}></img>
    //                 <div className="bg-gray-200 rounded-lg p-2">
    //                     <p className="font-semibold">{x.username}</p>
    //                     <p>{x.commentText}</p>
    //                     {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
                        
    //                     <div className='flex items-center'>
    //                         <img className='w-4 h-4 mr-1' src='/like.svg'></img>
    //                         <p className='text-gray-500'>{x.likeNum} คน</p>
    //                     </div>
    //                 </div>
    //             </div>

    //         )}

    //     </div>
    // }
    return (
        <div className="">
            {commentdata.map(x =>
                <div className="flex p-2 items-start space-x-2">
                    <img className="w-10 w-10 rounded-full" src={x.userImagePath}></img>
                    <div className="bg-gray-200 rounded-lg p-2">
                        <p className="font-semibold">{x.username}</p>
                        <p>{x.commentText}</p>
                        {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
                    
                        <div className='flex items-center'>
                            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                            <p className='text-gray-500'>{x.likeNum} คน</p>
                        </div> 
                    </div>
                    
                </div>
                
            )}

        </div>
    )
}
export default Commentcom