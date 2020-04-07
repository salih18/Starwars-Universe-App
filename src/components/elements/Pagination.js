import React from "react";
import { Icon, Pagination } from "semantic-ui-react";
import { connect } from "react-redux";
import store from './../../store'

import { selectPage, selectSearchPage } from "./../../actions/pagination";

const HomePagination = ({
  selectPage,
  totalPages,
  pagination: { aPage, aSearchPage },
  search: { isSearchActive },
}) => {
  const handlePaginationChange = (e, { activePage }) => {
    console.log("page handler");

    selectPage(activePage);
  };
  const handleSearchPaginationChange = (e, { activePage }) => {
    console.log("search handler", activePage);
    store.dispatch(selectSearchPage(activePage));
  };
  console.log({ isSearchActive });
  return (
    <Pagination
      onPageChange={
        isSearchActive ? handleSearchPaginationChange : handlePaginationChange
      }
      activePage={isSearchActive ? aSearchPage : aPage}
      ellipsisItem={{
        content: <Icon name="ellipsis horizontal" />,
        icon: true,
      }}
      firstItem={{ content: <Icon name="angle double left" />, icon: true }}
      lastItem={{ content: <Icon name="angle double right" />, icon: true }}
      prevItem={{ content: <Icon name="angle left" />, icon: true }}
      nextItem={{ content: <Icon name="angle right" />, icon: true }}
      totalPages={totalPages}
    />
  );
};

const mapStateToProps = (state) => ({
  pagination: state.pagination,
  totalPages: state.characters.totalPages,
  search: state.search,
});
export default connect(mapStateToProps, { selectPage })(HomePagination);
