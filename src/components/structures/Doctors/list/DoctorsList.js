import DoctorItem from "./item/DoctorItem";

const DoctorsList = ({specialists}) => {
    return(
        <ul>
            {specialists.map(specialist => {
                return <DoctorItem key={specialist.id} firstname={specialist.firstName} lastname={specialist.lastName} city={specialist.city} experience={specialist.specialization.additionalInfoForSpecialists[0].experience}/>
            })}
        </ul>
    )
}

export default DoctorsList;