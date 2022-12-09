import {
  Search,
  SearchForm,
  SearchButton,
  SearchButtonLabel,
  SearchInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(event.target.query.value);
    event.target.reset();
  };
  return (
    <div>
      <Search className="searchbar">
        <SearchForm className="form" onSubmit={handleSubmit}>
          <SearchButton type="submit" className="button">
            <SearchButtonLabel className="button-label">
              Search
            </SearchButtonLabel>
          </SearchButton>

          <SearchInput
            name="query"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Search>
    </div>
  );
};
