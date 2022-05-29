import MeetingItem from "./MeetingItem";
import { useEffect, useState } from "react";

const MeetingList = ({accessToken}) => {
  const [tables, setTables] = useState(null);
  useEffect(() => {
    const getTables = async () => {
      await fetch("https://2e00-178-213-240-41.eu.ngrok.io/timeTable", {
        headers: { Authorization: accessToken },
      })
        .then((res) => res.json())
        .then((result) => {
          setTables(result);
        });
    };
    getTables();
  }, []);
  return (
    <ul>
      {tables && tables.map(table => {
        return <MeetingItem table={table} />
      })}
      {/* <MeetingItem /> */}
      {/* {specialists.map(specialist => {
                return <DoctorItem key={specialist.id} firstname={specialist.firstName} lastname={specialist.lastName} city={specialist.city} experience={specialist.specialization.additionalInfoForSpecialists[0].experience}/>
            })} */}
    </ul>
  );
};

export default MeetingList;
