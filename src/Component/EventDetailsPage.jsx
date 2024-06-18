import { useParams,Link } from "react-router-dom"

const EventDetailsPage = () => {

  const Ids = useParams();

  return (
    <section className="min-h-[80vh] px-10 flex justify-center items-center ">
      
    <div className="min-h-[50vh] w-full bg-[#A0DEFF] rounded flex justify-center items-center flex-col gap-5">
         <h1 className='text-4xl text-center'>{Ids.id}</h1>
         <Link to=".." className="text-2xl">Back</Link>
    </div>
    
    </section>
  )
}

export default EventDetailsPage