import { Link } from "react-router-dom";

const dummyData = [
  {id:'Event1',title:"Wedding Day"},
  {id:'Event2',title:"Ilijan Batangas days"},
  {id:'Event3',title:"Graduation Days"}
]

const EventPage = () => {
  return (
    <section className="min-h-[80vh] px-10 flex justify-center items-center">
      
    <div className="min-h-[50vh] w-full bg-[#A0DEFF] rounded flex flex-col justify-center items-center gap-20">
            
            {
              dummyData.map(prod => {
                return(
                  <div key={prod.id} className="text-2xl">
                  <Link to={`/events/${prod.id}`}>{prod.title}</Link>
                    </div>
                )
              })
            }
      
    </div>
    
    </section>
  )
}

export default EventPage