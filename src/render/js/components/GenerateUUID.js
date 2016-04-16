import m from 'mithril'

function controller(attrs) {
  const num = m.prop('')
  return { num }
}

function view(ctrl, attrs) {
  const { num } = ctrl

  return (
    <div className="workspace">
      <div className="uuid">
        <div className="uuid__entry form--inline">
          <label className="label">
            <span className="label__text">Number:</span>
            <input  className="text"
                    size="3"
                    maxlength="3"
                    onchange={m.withAttr('value', num)}
                    value={num()}
            />
          </label>
          <button className="button uuid__button" type="button">Generate</button>
        </div>
        <div className="uuid__results">Results</div>
      </div>
    </div>
  )
}

const GenerateUUID = { view, controller }

export default GenerateUUID
