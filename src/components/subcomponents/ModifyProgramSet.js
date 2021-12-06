const ModifyProgramSet = ({ index }) => {
  return (
    <div className='perform__grid'>
      <p>{index + 1}</p>
      <p>---</p>
      <input
          size="1"
          className="inputOne perform__mid__input"
          type="number"     
      />
      <input
          size="1"
          className="inputTwo perform__mid__input"
          type="number"
      />
      <input 
          size="1" 
          className="perform__mid__input-checkbox" 
          type="checkbox"
      />
    </div>
  )
}

export default ModifyProgramSet;