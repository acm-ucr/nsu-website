const Offer = () => {
  return (
    <div className="flex flex-col gap-10 p-20">
      <div className="text-nsu-red-100 text-center text-5xl font-bold">
        What We Offer:
      </div>
      <ul className="flex list-disc flex-col gap-5">
        <li>
          Bi-weekly General Meetings filled with engaging activities, cultural
          discussions, and fun icebreakers.
        </li>
        <li>
          A variety of social events where you can meet new friends and bond
          with fellow members.
        </li>
        <li>
          Cultural celebrations that highlight the rich history and traditions
          of the Japanese American community.
        </li>
        <li>
          Intramural sports teams where you can compete, stay active, and have
          fun with fellow members.
        </li>
        <li>
          Volunteer and leadership opportunities to get involved and make a
          difference!
        </li>
      </ul>
    </div>
  );
};

export default Offer;
