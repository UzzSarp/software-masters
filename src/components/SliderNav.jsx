const SliderNav = (props) => {
    const { clickedSportCars, handleClickAction, clickedElectricCars } = props;
    return (
      <nav>
        <span
          className={clickedSportCars ? "selected" : "clickLevel"}
          onClick={handleClickAction}
        >
          Websites
        </span>
        <span
          className={clickedElectricCars ? "selected" : "clickLevel"}
          onClick={handleClickAction}
        >
          Digital Marketing
        </span>
      </nav>
    );
  };
  
  export default SliderNav;