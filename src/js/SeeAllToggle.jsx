

const ShowAll = ({ showAll, toggleShowAll }) => {
  return (
    <button
      id="laguna__projects__toggleButton"
      onClick={toggleShowAll}
      className="laguna__projects__toggleButton"
    >
      {showAll ? 'Show Less' : 'Show All'}
    </button>
  );
};

export default ShowAll;