import m  from 'mithril'

function view(ctrl, attrs) {
  const { request, clear } = attrs

  return (
    <div className="uuid__entry form--inline">
      <div className="buttonGroup">
        <button
          className="button"
          type="button"
          onclick={request(1)}
        >+1</button>
        <button
          className="button"
          type="button"
          onclick={request(5)}
        >+5</button>
        <button
          className="button"
          type="button"
          onclick={request(10)}
        >+10</button>
      </div>
      <button
        className="button"
        type="button"
        onclick={clear}
      >Clear</button>
    </div>
  )
}

const UuidEntry = { view }

export default UuidEntry
