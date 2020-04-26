import React, { useEffect } from "react"
import _ from "lodash/collection"

export default function FileList({ files, onStart }) {
  useEffect(() => {
    onStart()
  }, [onStart])

  const fileList = (
    <ul>
      {_.map(files, (f) => {
        return <li>{f.name}</li>
      })}
    </ul>
  )

  const pagination =
    files === null ? null : (
      <nav class="pagination is-rounded" role="navigation" aria-label="pagination">
        <a class="pagination-previous">Previous</a>
        <a class="pagination-next">Next page</a>
        <ul class="pagination-list">
          <li>
            <a class="pagination-link" aria-label="Goto page 1">
              1
            </a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 45">
              45
            </a>
          </li>
          <li>
            <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">
              46
            </a>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 47">
              47
            </a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 86">
              86
            </a>
          </li>
        </ul>
      </nav>
    )

  return (
    <div>
      {fileList}
      {pagination}
    </div>
  )
}
