import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PeopleCard from "../../components/movie_card/PeopleCard";

const PeopleDetails = () => {
  const { id } = useParams();
  const [people, setPeople] = useState(null);

  useEffect(() => {
    const fetchPeopleDetails = async () => {
      const peoplesUrl = import.meta.env.VITE_PEOPLE;
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `${peoplesUrl}/${id}?api_key=${apiKey}`;

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch people details");
        }
        const data = await res.json();
        setPeople(data);
      } catch (error) {
        console.error("Error fetching people details:", error);
      }
    };

    fetchPeopleDetails();
  }, [id]);

  const formatDate = (date) => {
    if (!date) return "People still alive";
    const formattedDate = new Date(date).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return formattedDate;
  };

  const renderDetails = () => {
    if (!people) return null;

    return (
      <div className="items-start md:items-center md:flex md:justify-center md:my-5">
        <PeopleCard people={people} showLink={false} />
        <div>
          <h3 className="ml-2 text-2xl text-primaryBlue my-2 text-center">Details:</h3>

          <div className="md:flex md:flex-col md:bg-gray-200 p-10 rounded-lg shadow-md">
            <DetailRow label="Biography" value={people.biography} />
            <DetailRow label="Birthday" value={formatDate(people.birthday)} />
            <DetailRow label="Death Day" value={formatDate(people.deathday)} />
            <DetailRow label="Place of Birth" value={people.place_of_birth} />
          </div>
        </div>
      </div>
    );
  };

  return <>{renderDetails()}</>;
};

const DetailRow = ({ label, value }) => (
  <div className="m-2">
    <h3 className="text-lg text-center">{label}</h3>
    <p>{value}</p>
  </div>
);

export default PeopleDetails;
