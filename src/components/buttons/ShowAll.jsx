const ShowAll = ({ showAll, toggleShowAll }) => {
  return (
    <article className="laguna__showAll_wrapper">
      <button
        id="laguna__projects__toggleButton"
        onClick={toggleShowAll}
        className="laguna__button__light lagunahover-container"
      >
        {showAll ? 'Show Less' : 'Show All'}
      </button>
    </article>
  );
};

export default ShowAll;