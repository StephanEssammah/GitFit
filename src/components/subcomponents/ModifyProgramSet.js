const ModifyProgramSet = ({ index }) => {
  return (
    <div className='modify-item__grid'>
      <p>{index + 1}</p>
      <p>---</p>
      <p>---</p>
      <p>---</p>
      <input 
          size="1" 
          className="modify-item__input-checkbox" 
          type="checkbox"
          disabled
      />
    </div>
  )
}

export default ModifyProgramSet;