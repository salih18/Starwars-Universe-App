import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Input } from "semantic-ui-react";
import { setSearchTerm, setSearchStatus } from "./../../actions/search";
import { selectPage } from "./../../actions/pagination";
import PropTypes from "prop-types";

const SearchBar = ({
  selectPage,
  setSearchTerm,
  setSearchStatus,
  search: { isSearchActive },
}) => {
  const [searchText, setSearchText] = useState("");
  const [active, setActive] = useState(true);
  const handleSearch = (e, { value }) => {
    setSearchText(value);
  };
  const handleClick = (e) => {
    setSearchTerm(searchText);
    setSearchStatus(true);
  };

  useEffect(() => {
    if (searchText.length === 0) {
      setActive(false);
      selectPage(1);
      setSearchStatus(false);
    } else if (searchText.length < 4) {
      setActive(true);
    } else setActive(false);
  }, [isSearchActive, searchText.length, selectPage, setSearchStatus]);
  return (
    <div className="stackable computer only row">
      <Input
        className="search-bar"
        onChange={handleSearch}
        value={searchText}
        action={{
          icon: "search",
          onClick: handleClick,
          disabled: active,
        }}
        placeholder="Search characters"
      />
    </div>
  );
};

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  search: state.search,
});

export default connect(mapStateToProps, {
  setSearchTerm,
  setSearchStatus,
  selectPage,
})(SearchBar);
