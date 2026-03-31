import React from "react";

export default function Filters(props) {
    let {
        searchText, 
        setSearchText, 
        status, 
        setStatus, 
        category, 
        setCategory, 
        showOnlyHighPriority, 
        setShowOnlyHighPriority,
        clearFilters
    } = props;

    return (
        <article className="panel">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Filters</p>
                <h2>Search the lesson plan</h2>
              </div>
              <button className="ghost-button" type="button" onClick={clearFilters}>
                Reset
              </button>
            </div>

            <div className="form-grid">
              <label>
                Search
                <input
                  type="text"
                  value={searchText}
                  onChange={(event) => setSearchText(event.target.value)}
                  placeholder="Search title or category"
                />
              </label>

              <label>
                Status
                <select
                  value={status}
                  onChange={(event) => setStatus(event.target.value)}
                >
                  <option value="all">All</option>
                  <option value="draft">Draft</option>
                  <option value="planned">Planned</option>
                  <option value="done">Done</option>
                </select>
              </label>

              <label>
                Category
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                >
                  <option value="all">All</option>
                  <option value="Foundations">Foundations</option>
                  <option value="Hooks">Hooks</option>
                  <option value="UI">UI</option>
                </select>
              </label>

              <label className="checkbox-row">
                <input
                  type="checkbox"
                  checked={showOnlyHighPriority}
                  onChange={(event) =>
                    setShowOnlyHighPriority(event.target.checked)
                  }
                />
                Show only high-priority lessons
              </label>
            </div>
          </article>
    )

}