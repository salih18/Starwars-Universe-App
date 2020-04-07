import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Input } from "semantic-ui-react";
import { setSearchTerm } from "./../../actions/search";
import PropTypes from "prop-types";

const SearchBar = ({ setSearchTerm }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e, { value }) => {
    setSearchText(value);
  };

  useEffect(() => {
    setSearchTerm(searchText)
  }, [searchText, setSearchTerm]);

  return (
    <Input
      onChange={handleSearch}
      value={searchText}
      action={{ icon: "search" }}
      placeholder="Search characters"
    />
  );
};

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { setSearchTerm })(SearchBar);
